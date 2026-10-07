import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/mockData';
import { PageId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { 
  MessageCircle, 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles, 
  PhoneCall, 
  Play, 
  Clock, 
  Award,
  Layers,
  ChevronDown,
  Mail,
  Globe,
  Languages,
  ExternalLink
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenDemoModal: () => void;
  onScrollToSimulator?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentPage, 
  onNavigate, 
  onOpenDemoModal 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, detectedCountry } = useLanguage();
  const t = TRANSLATIONS[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string; highlight?: boolean; badge?: string }[] = [
    { id: 'home', label: t.navbar.home },
    { id: 'services', label: t.navbar.services },
    { id: 'products', label: t.navbar.products },
    { id: 'demos', label: t.navbar.demos, highlight: true, badge: t.navbar.liveBadge },
    { id: 'pricing', label: t.navbar.pricing },
    { id: 'about', label: t.navbar.about },
    { id: 'contact', label: t.navbar.contact },
  ];

  const handleLinkClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#07090E]/95 backdrop-blur-md border-b border-white/10 py-2.5 shadow-[0_4px_30px_rgba(0,0,0,0.85)]' 
          : 'bg-[#07090E]/80 backdrop-blur-sm py-4 border-b border-white/5'
      }`}
    >
      {/* Top micro banner */}
      <div className="hidden md:block bg-gradient-to-r from-[#FF6B00]/10 via-[#0A0E1A] to-[#FF6B00]/10 border-b border-white/5 py-1 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] text-slate-300">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-emerald-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {t.navbar.alwaysOpen}
            </span>
            <span className="text-slate-500">•</span>
            <span>{t.navbar.headquarters}</span>
            <span className="text-slate-500">•</span>
            <a 
              href="https://monitor.hightechenterprise.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 hover:text-emerald-300 font-mono text-[10px] transition-colors"
              title="Official Side Project: Real-time Infrastructure Status Monitor"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span>{t.navbar.pulseMonitor}</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>

          <div className="flex items-center gap-3">
            {/* Geo Detection indicator */}
            <span className="text-[10px] text-slate-400 font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10">
              IP Geo: {detectedCountry ? `${detectedCountry}` : 'Auto'}
            </span>

            {/* Language Switcher in top bar */}
            <button
              onClick={toggleLanguage}
              className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/15 border border-white/10 text-cyan-300 hover:text-white flex items-center gap-1 font-semibold transition-colors cursor-pointer"
              title="Switch language between Bengali and English"
            >
              <Languages className="w-3 h-3 text-cyan-400" />
              <span>{language === 'bn' ? '🇧🇩 বাংলা' : '🇺🇸 English'}</span>
            </button>

            <span className="text-slate-500">•</span>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
              title="Official Email"
            >
              <Mail className="w-3 h-3 text-cyan-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <span className="text-slate-500">•</span>
            <a 
              href={`https://${COMPANY_INFO.website}`} 
              className="font-mono text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
              title="Official Domain"
            >
              <Globe className="w-3 h-3 text-[#FFA149]" />
              <span>{COMPANY_INFO.website}</span>
            </a>
            <span className="text-slate-500">•</span>
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="font-mono text-[#FFA149] hover:underline flex items-center gap-1"
            >
              <PhoneCall className="w-3 h-3" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-1 sm:mt-1.5">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button 
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2 group text-left focus:outline-none cursor-pointer"
          >
            <Logo size="md" />
          </button>

          {/* Multipage Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0E131F]/90 border border-white/10 px-3 py-1.5 rounded-full shadow-inner">
            {navItems.map((item) => {
              const isActive = currentPage === item.id || (item.id === 'demos' && currentPage === 'portfolio');
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`text-xs font-semibold tracking-wide px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-[#FF6B00] text-white shadow-md shadow-[#FF6B00]/30'
                      : item.highlight
                      ? 'text-[#FFA149] hover:text-white hover:bg-white/5'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.highlight && <Play className="w-2.5 h-2.5 fill-current" />}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-black/30 text-white' : 'bg-[#FF6B00]/20 text-[#FFA149]'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions & WhatsApp Contact */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Direct Language Switcher Pill */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1 text-xs font-bold text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 px-3 py-1.5 rounded-full hover:bg-cyan-900/40 transition-colors cursor-pointer"
              title="Toggle Language (বাংলা / English)"
            >
              <Languages className="w-3.5 h-3.5 text-cyan-400" />
              <span>{language === 'bn' ? 'বাংলা' : 'EN'}</span>
            </button>

            {/* Live WhatsApp quick CTA */}
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-3 py-1.5 rounded-full hover:bg-emerald-900/50 transition-colors"
              title="Chat with High-Tech Enterprise on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            {/* Free Demo Trigger Button */}
            <button
              id="navbar-get-demo-btn"
              onClick={onOpenDemoModal}
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#FF6B00] cursor-pointer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#FF6B00] via-[#FF8A33] to-[#FF6B00] rounded-full group-hover:opacity-100 transition-opacity animate-pulse"></span>
              <span className="relative flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0E131F] text-xs font-bold text-white transition-all group-hover:bg-transparent">
                <Sparkles className="w-3.5 h-3.5 text-[#FF7A00] group-hover:text-white transition-colors" />
                <span>{t.navbar.freeDemoBtn}</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-1.5 lg:hidden">
            {/* Mobile Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="text-xs font-bold bg-cyan-950/60 text-cyan-300 border border-cyan-500/40 px-2 py-1 rounded-full flex items-center gap-1 cursor-pointer"
              title="Toggle Language"
            >
              <span>{language === 'bn' ? 'বাং' : 'EN'}</span>
            </button>

            <button
              onClick={() => handleLinkClick('demos')}
              className="text-xs font-bold bg-[#FF6B00]/20 text-[#FFA149] border border-[#FF6B00]/40 px-2 py-1 rounded-full flex items-center gap-1 cursor-pointer"
            >
              <Play className="w-2.5 h-2.5 fill-current" />
              <span>{language === 'bn' ? 'লাইভ ডেমো' : 'Demos'}</span>
            </button>

            <button
              onClick={onOpenDemoModal}
              className="text-xs font-bold bg-[#FF6B00] text-white px-2.5 py-1 rounded-full cursor-pointer"
            >
              {language === 'bn' ? 'ডেমো নিন' : 'Demo'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-300 hover:text-white rounded-lg bg-white/5 border border-white/10 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0E17]/98 border-b border-white/10 backdrop-blur-xl px-4 py-4 space-y-2 animate-in slide-in-from-top-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className="w-full text-left py-2.5 px-3 rounded-xl text-sm font-semibold text-slate-200 hover:text-white hover:bg-white/5 flex items-center justify-between"
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FF6B00]/20 text-[#FFA149]">
                  {item.badge}
                </span>
              )}
            </button>
          ))}

          {/* Language Switcher inside mobile drawer */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-slate-400">ভাষা / Language:</span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => {
                  if (language !== 'bn') toggleLanguage();
                }}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  language === 'bn' ? 'bg-cyan-500 text-slate-950' : 'bg-white/5 text-slate-400'
                }`}
              >
                🇧🇩 বাংলা
              </button>
              <button
                onClick={() => {
                  if (language !== 'en') toggleLanguage();
                }}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  language === 'en' ? 'bg-cyan-500 text-slate-950' : 'bg-white/5 text-slate-400'
                }`}
              >
                🇺🇸 English
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
