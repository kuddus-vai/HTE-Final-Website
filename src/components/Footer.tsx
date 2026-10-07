import React from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/mockData';
import { PageId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  ShieldCheck, 
  ExternalLink, 
  Instagram, 
  Facebook,
  Sparkles,
  ArrowUp,
  Play,
  Globe,
  Languages
} from 'lucide-react';

interface FooterProps {
  onOpenDemoModal: () => void;
  onNavigate?: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemoModal, onNavigate }) => {
  const { language, toggleLanguage, detectedCountry } = useLanguage();
  const t = TRANSLATIONS[language].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: PageId) => {
    if (onNavigate) {
      onNavigate(page);
      scrollToTop();
    }
  };

  return (
    <footer className="bg-[#05070B] border-t border-white/10 text-slate-400 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <button onClick={() => handleNav('home')} className="text-left focus:outline-none">
              <Logo size="lg" showTagline={true} />
            </button>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm pt-2">
              {COMPANY_INFO.shortBio}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                title="Facebook @HighTechEnterprise48"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-pink-400 flex items-center justify-center transition-colors"
                title="Instagram @hightechenterprisebd"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-900/60 flex items-center justify-center transition-colors"
                title="WhatsApp Direct"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-slate-300 font-mono">
                {language === 'bn' ? '১০০% সন্তুষ্টি (১২+ ভেরিফায়েড রিভিউ)' : '100% Recommended (12+ Verified Reviews)'}
              </span>
            </div>
          </div>

          {/* Solutions Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              {language === 'bn' ? 'সল্যুশন ও সার্ভিসসমূহ' : 'Solutions & Services'}
            </div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors text-left cursor-pointer">
                  {language === 'bn' ? 'হোয়াটসঅ্যাপ অটো-রিপ্লাই এআই' : 'WhatsApp Auto-Reply AI'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors text-left cursor-pointer">
                  {language === 'bn' ? 'নেক্সট.জেএস ওয়েব প্ল্যাটফর্ম' : 'Next.js Web Platforms'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors text-left cursor-pointer">
                  {language === 'bn' ? 'সিআরএম ও ওয়ার্কফ্লো ইঞ্জিন' : 'CRM & Workflow Engines'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors text-left cursor-pointer">
                  {language === 'bn' ? 'পাঠাও ও স্টেডফাস্ট সিঙ্ক' : 'Pathao & Steadfast Sync'}
                </button>
              </li>
            </ul>
          </div>

          {/* SaaS Products & Live Demos (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              {language === 'bn' ? 'প্রোডাক্ট ও লাইভ ডেমো' : 'Products & Demos'}
            </div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-white transition-colors text-left cursor-pointer">
                  {language === 'bn' ? 'ফ্লোপালস™ হোয়াটসঅ্যাপ' : 'FlowPulse™ WhatsApp'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-white transition-colors text-left cursor-pointer">
                  {language === 'bn' ? 'শপফ্লো™ ই-কমার্স' : 'ShopFlow™ eCommerce'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-white transition-colors text-left cursor-pointer">
                  {language === 'bn' ? 'স্মার্ট পিওএস ক্লাউড' : 'Smart POS Cloud'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-white transition-colors text-left cursor-pointer">
                  {language === 'bn' ? 'ওয়ার্কফ্লোএআই™ অপ্টিমাইজার' : 'WorkflowAI™ Optimizer'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('demos')} 
                  className="text-[#FF8A33] hover:underline font-bold flex items-center gap-1 cursor-pointer"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>{language === 'bn' ? '১০+ লাইভ ডেমো ও পোর্টফোলিও' : '10+ Live Demos & Portfolio'}</span>
                </button>
              </li>
              <li className="pt-2 border-t border-white/5">
                <a 
                  href="https://monitor.hightechenterprise.xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1.5 transition-colors group"
                  title="Enterprise Pulse Monitor: Real-time global cyber-threat & tech-intelligence dashboard"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>{language === 'bn' ? 'এন্টারপ্রাইজ পালস মনিটর' : 'Enterprise Pulse Monitor'}</span>
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Savar Headquarters (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              {language === 'bn' ? 'হেডকোয়ার্টার ও সরাসরি যোগাযোগ' : 'Headquarters & Direct Contact'}
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF7A00] flex-shrink-0 mt-0.5" />
                <span>{language === 'bn' ? 'সাভার, ঢাকা ১২১৭, বাংলাদেশ' : 'Dhaka, Savar, Bangladesh, 1217'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={COMPANY_INFO.whatsappUrl} className="hover:text-white font-mono">
                  {COMPANY_INFO.phoneIntl} {language === 'bn' ? '(হোয়াটসঅ্যাপ হটলাইন)' : '(WhatsApp Hotline)'}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#FFA149] flex-shrink-0" />
                <a href={`https://${COMPANY_INFO.website}`} className="hover:text-white font-mono transition-colors">
                  {COMPANY_INFO.website}
                </a>
              </div>
            </div>

            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={onOpenDemoModal}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-[#FF6B00] hover:bg-[#FF8A33] text-white shadow transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === 'bn' ? 'ফ্রি ডেমো প্রোটোটাইপ নিন' : 'Request Free Demo Prototype'}</span>
              </button>

              <button
                onClick={() => handleNav('contact')}
                className="w-full py-2 px-4 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors cursor-pointer"
              >
                {language === 'bn' ? 'যোগাযোগ ও তাৎক্ষণিক ব্লুপ্রিন্ট' : 'Contact & Instant Blueprint'}
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
            <span>© {new Date().getFullYear()} High-Tech Enterprise BD Ltd. {t.allRightsReserved}</span>
            <span>•</span>
            <span>{t.tagline}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {/* Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-semibold text-cyan-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Change Language"
            >
              <Languages className="w-3.5 h-3.5 text-cyan-400" />
              <span>{language === 'bn' ? '🇧🇩 বাংলা' : '🇺🇸 English'}</span>
            </button>

            <a
              href="https://monitor.hightechenterprise.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors"
              title="Official Side Project: Real-time Infrastructure Status & Uptime"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{language === 'bn' ? 'সিস্টেম ৯৯.৯৮% সচল (পালস মনিটর)' : 'Systems 99.98% Operational (Pulse Monitor)'}</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>

            <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>{language === 'bn' ? 'জিরো-ট্রাস্ট আর্কিটেকচার' : 'Zero-Trust Architecture'}</span>
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
