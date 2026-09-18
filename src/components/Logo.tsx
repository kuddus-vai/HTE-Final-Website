import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showTagline = false, className = '' }) => {
  const iconDimensions = {
    sm: { w: 32, h: 32, fontMain: 'text-base', fontSub: 'text-[9px]' },
    md: { w: 42, h: 42, fontMain: 'text-xl', fontSub: 'text-[11px]' },
    lg: { w: 54, h: 54, fontMain: 'text-2xl', fontSub: 'text-xs' },
    xl: { w: 72, h: 72, fontMain: 'text-4xl', fontSub: 'text-sm' }
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* 3D Segmented Cyber Sphere Icon */}
      <div 
        className="relative flex-shrink-0 flex items-center justify-center"
        style={{ width: iconDimensions.w, height: iconDimensions.h }}
      >
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(255,107,0,0.5)]"
        >
          {/* Subtle Outer Cyber Ring */}
          <circle cx="50" cy="50" r="47" stroke="rgba(255, 107, 0, 0.25)" strokeWidth="1.5" strokeDasharray="3 3" />
          
          {/* Layered Sliced Sphere Bands - Inspired by High-Tech Enterprise Official Emblem */}
          {/* Top Cap */}
          <path d="M 38 18 Q 50 12 62 18 Q 50 22 38 18 Z" fill="#FF7A00" />
          
          {/* Layer 1 (White segment) */}
          <path d="M 28 26 Q 50 18 72 26 C 68 29 32 29 28 26 Z" fill="#FFFFFF" />
          
          {/* Layer 2 (Orange layered segments with grid cuts) */}
          <path d="M 20 35 Q 35 28 48 34 Q 35 38 20 35 Z" fill="#FF6B00" />
          <path d="M 52 34 Q 65 28 80 35 Q 65 38 52 34 Z" fill="#FF8A33" />
          
          {/* Layer 3 - Central Wide Band (White & Orange) */}
          <path d="M 15 45 Q 32 37 47 43 Q 32 49 15 45 Z" fill="#FFFFFF" />
          <path d="M 53 43 Q 68 37 85 45 Q 68 49 53 43 Z" fill="#FF6B00" />
          
          {/* Layer 4 - Equator (White & Orange bricked cyber slices) */}
          <path d="M 14 55 Q 32 50 48 54 Q 32 59 14 55 Z" fill="#FF7A00" />
          <path d="M 52 54 Q 68 50 86 55 Q 68 59 52 54 Z" fill="#FFFFFF" />
          
          {/* Layer 5 (Segmented strata) */}
          <path d="M 18 65 Q 35 60 48 63 Q 35 68 18 65 Z" fill="#FFFFFF" />
          <path d="M 52 63 Q 65 60 82 65 Q 65 68 52 63 Z" fill="#FF6B00" />
          
          {/* Layer 6 */}
          <path d="M 26 75 Q 50 70 74 75 Q 50 80 26 75 Z" fill="#FF7A00" />
          
          {/* Bottom Cap */}
          <path d="M 38 84 Q 50 82 62 84 Q 50 88 38 84 Z" fill="#FFFFFF" />

          {/* Accent glow dot */}
          <circle cx="50" cy="50" r="2.5" fill="#FF8A33" />
        </svg>
      </div>

      {/* Brand Typographic Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-center tracking-[0.14em] font-extrabold text-white leading-none">
          <span className={`${iconDimensions.fontMain} font-['Outfit',sans-serif]`}>HIGH</span>
          <span className="mx-1 text-[#FF6B00] font-light">|</span>
          <span className={`${iconDimensions.fontMain} text-white font-['Outfit',sans-serif]`}>TECH</span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className={`${iconDimensions.fontSub} tracking-[0.28em] font-semibold text-[#FF7A00] uppercase font-['Outfit',sans-serif]`}>
            ENTERPRISE
          </span>
        </div>
        {showTagline && (
          <span className="text-[10px] tracking-[0.12em] text-[#94A3B8] uppercase font-medium mt-1">
            Smart Solutions • Digital Growth
          </span>
        )}
      </div>
    </div>
  );
};
