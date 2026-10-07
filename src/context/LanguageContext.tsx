import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type Language = 'bn' | 'en';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  detectedCountry: string | null;
  isBangladesh: boolean;
  isAutoDetected: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  toggleLanguage: () => {},
  detectedCountry: null,
  isBangladesh: false,
  isAutoDetected: false,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Determine initial language synchronously to avoid flash
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      // 1. Check if user manually saved their choice
      const saved = localStorage.getItem('ht_site_language');
      if (saved === 'bn' || saved === 'en') {
        return saved;
      }

      // Default to Bengali ('bn') for authentic full Bengali first experience
      return 'bn';
    } catch {
      // fallback
    }
    return 'bn';
  });

  const [detectedCountry, setDetectedCountry] = useState<string | null>(null);
  const [isAutoDetected, setIsAutoDetected] = useState<boolean>(false);

  // Sync html lang attribute
  useEffect(() => {
    document.documentElement.lang = language === 'bn' ? 'bn' : 'en';
  }, [language]);

  // Real-time IP and Geo-location detection
  useEffect(() => {
    let isMounted = true;

    const detectCountryByIP = async () => {
      // If user has already made an explicit manual choice, do not override
      const hasManualChoice = localStorage.getItem('ht_site_language_manual') === 'true';

      try {
        // High-speed edge geolocation API (zero credentials, sub-100ms response)
        const response = await fetch('https://api.country.is', { 
          cache: 'no-store',
          signal: AbortSignal.timeout(3500) 
        });

        if (response.ok) {
          const data = await response.json();
          const countryCode = (data.country || '').toUpperCase();

          if (isMounted) {
            setDetectedCountry(countryCode);
            setIsAutoDetected(true);

            if (!hasManualChoice) {
              if (countryCode === 'BD') {
                setLanguageState('bn');
                localStorage.setItem('ht_site_language', 'bn');
              } else {
                setLanguageState('en');
                localStorage.setItem('ht_site_language', 'en');
              }
            }
          }
          return;
        }
      } catch (err) {
        // Fallback to secondary geo service if primary fails or blocked
        try {
          const fallbackRes = await fetch('https://ipwho.is/?fields=country_code', {
            signal: AbortSignal.timeout(3500)
          });
          if (fallbackRes.ok) {
            const fbData = await fallbackRes.json();
            const fbCountry = (fbData.country_code || '').toUpperCase();
            if (isMounted) {
              setDetectedCountry(fbCountry);
              setIsAutoDetected(true);
              if (!hasManualChoice) {
                if (fbCountry === 'BD') {
                  setLanguageState('bn');
                  localStorage.setItem('ht_site_language', 'bn');
                } else {
                  setLanguageState('en');
                  localStorage.setItem('ht_site_language', 'en');
                }
              }
            }
            return;
          }
        } catch {
          // Both network calls failed, preserve client timezone heuristic
        }
      }
    };

    detectCountryByIP();

    return () => {
      isMounted = false;
    };
  }, []);

  const setLanguage = useCallback((newLang: Language) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem('ht_site_language', newLang);
      localStorage.setItem('ht_site_language_manual', 'true');
    } catch {
      // ignore
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState(prev => {
      const next = prev === 'en' ? 'bn' : 'en';
      try {
        localStorage.setItem('ht_site_language', next);
        localStorage.setItem('ht_site_language_manual', 'true');
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const isBangladesh = detectedCountry === 'BD' || language === 'bn';

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      toggleLanguage,
      detectedCountry,
      isBangladesh,
      isAutoDetected
    }}>
      {children}
    </LanguageContext.Provider>
  );
};
