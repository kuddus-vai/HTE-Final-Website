import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/mockData';
import { PageId } from '../types';
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
  Globe
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string; highlight?: boolean; badge?: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'products', label: 'Products' },
    { id: 'demos', label: 'Live Demos', highlight: true, badge: '8+ Live' },
    { id: 'pricing', label: 'Pricing & ROI' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
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
              24/7 Always Open
            </span>
            <span className="text-slate-500">•</span>
            <span>Headquarters: Savar, Dhaka 1217</span>
            <span className="text-slate-500">•</span>
            <span className="text-[#FFA149]">100% Recommendation Score</span>
          </div>

          <div className="flex items-center gap-3">
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
            className="flex items-center gap-2 group text-left focus:outline-none"
          >
            <Logo size="md" />
          </button>

          {/* Multipage Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0E131F]/90 border border-white/10 px-3 py-1.5 rounded-full shadow-inner">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`text-xs font-semibold tracking-wide px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
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
          <div className="hidden sm:flex items-center gap-3">
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
              className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#FF6B00]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#FF6B00] via-[#FF8A33] to-[#FF6B00] rounded-full group-hover:opacity-100 transition-opacity animate-pulse"></span>
              <span className="relative flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0E131F] text-xs font-bold text-white transition-all group-hover:bg-transparent">
                <Sparkles className="w-3.5 h-3.5 text-[#FF7A00] group-hover:text-white transition-colors" />
                <span>Get Free Demo</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => handleLinkClick('demos')}
              className="text-xs font-bold bg-[#FF6B00]/20 text-[#FFA149] border border-[#FF6B00]/40 px-2.5 py-1 rounded-full flex items-center gap-1"
            >
              <Play className="w-2.5 h-2.5 fill-current" />
              <span>Demos</span>
            </button>

            <button
              onClick={onOpenDemoModal}
              className="text-xs font-bold bg-[#FF6B00] text-white px-2.5 py-1 rounded-full"
            >
              Free Demo
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-300 hover:text-white rounded-lg bg-white/5 border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07090E]/98 border-b border-white/15 px-4 pt-3 pb-6 mt-2 backdrop-blur-2xl shadow-2xl">
          <div className="flex flex-col space-y-1.5">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`w-full text-left px-3.5 py-2.5 text-sm font-medium rounded-xl transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#FF6B00] text-white font-bold'
                      : 'text-slate-200 hover:text-[#FF7A00] hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {item.highlight && <Play className="w-3 h-3 fill-current text-[#FFA149]" />}
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-[#FFA149]">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}

            <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-950/40 border border-emerald-500/30"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {COMPANY_INFO.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemoModal();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-gradient-to-r from-[#FF6B00] to-[#FF8A33] text-white shadow-lg"
              >
                <Sparkles className="w-4 h-4" />
                <span>Request Free Prototype Demo</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
