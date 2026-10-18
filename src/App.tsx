import React, { useState, useEffect, useCallback } from 'react';
import { PageId, LiveDemoItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FreeDemoModal } from './components/FreeDemoModal';
import { LiveDemoModal } from './components/LiveDemoModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { EmailCollectorModal } from './components/EmailCollectorModal';

// Dedicated Page Modules
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ProductsPage } from './pages/ProductsPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { WebsitesPage } from './pages/WebsitesPage';
import { UgcPage } from './pages/UgcPage';
import { AutomationPage } from './pages/AutomationPage';

const VALID_PAGES: PageId[] = ['home', 'services', 'products', 'demos', 'portfolio', 'pricing', 'about', 'contact', 'websites', 'ai-ugc', 'automation'];

const PAGE_TITLES: Record<PageId, string> = {
  home: 'High-Tech Enterprise | Smart Solutions • Digital Growth • WhatsApp AI & Automation',
  services: 'Engineering Services & Automation | High-Tech Enterprise BD',
  products: 'Proprietary Software Systems & SaaS Platforms | High-Tech Enterprise BD',
  demos: 'Live Interactive Demos & Systems Sandbox | High-Tech Enterprise BD',
  portfolio: 'Flagship Web Engineering & Client Deployments | High-Tech Enterprise BD',
  pricing: 'Transparent Pricing & TCO Cost Calculator | High-Tech Enterprise BD',
  about: 'About High-Tech Enterprise • Savar Headquarters & Core Team',
  contact: 'Contact & Instant System Blueprint | High-Tech Enterprise BD',
  websites: 'High-Converting Websites & Landing Pages for DTC Brands | High-Tech Enterprise',
  'ai-ugc': 'AI UGC Video Ads from $20 for DTC Brands | High-Tech Enterprise',
  automation: 'n8n Workflow Automation & AI Agents | High-Tech Enterprise',
};

const PAGE_DESCRIPTIONS: Record<PageId, string> = {
  home: 'High-Tech Enterprise (hightechenterprise.xyz) engineers 24/7 WhatsApp AI auto-reply bots, CRM workflows, eCommerce integrations & sub-second web platforms in Savar, Dhaka, Bangladesh.',
  services: 'Explore conversational AI bots, Pathao/Steadfast courier webhook integrations, headless web platforms & enterprise automation flows.',
  products: 'Discover enterprise-grade automation modules: Meta Cloud API connectors, 2-way courier dispatchers, headless stores, and custom POS sync.',
  demos: 'Test 10+ live interactive demos & client websites: ShopFlow stores, WhatsApp bots, parcel tracking, Enterprise Pulse Monitor cyber-threat dashboard, and cloud POS.',
  portfolio: 'Inspect our portfolio of bespoke web platforms, live eCommerce stores, industrial corporate sites, and autonomous WhatsApp engines.',
  pricing: 'Calculate your exact system deployment cost, Meta WhatsApp API fees, hosting and monthly subscriptions with our interactive TCO calculator.',
  about: 'Learn about High-Tech Enterprise BD Ltd., our engineering principles, Savar Dhaka headquarters, 99.98% SLA, and zero-trust security standards.',
  contact: 'Connect directly with our engineering team in Savar, Dhaka via WhatsApp (+880 1996-921149) or email (hightechenterprisebd@gmail.com).',
  websites: 'High-converting landing pages (from $300) and business websites (from $700) for DTC and e-commerce brands. Designed to convert, built for speed.',
  'ai-ugc': 'AI UGC video ads for DTC brands from $20. Creator-style product videos made with AI — no shoot, no creator fees, 48-hour delivery.',
  automation: 'n8n workflow automation, AI agent deployment, and CRM sync for agencies and service businesses. Free automation audit.',
};

// Helper function to sync SEO, OpenGraph & Canonical tags dynamically
function syncMetaTags(page: PageId) {
  const title = PAGE_TITLES[page] || PAGE_TITLES.home;
  const description = PAGE_DESCRIPTIONS[page] || PAGE_DESCRIPTIONS.home;
  const canonicalUrl = page === 'home' 
    ? 'https://hightechenterprise.xyz/' 
    : `https://hightechenterprise.xyz/${page}`;

  document.title = title;

  // Description
  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta) descMeta.setAttribute('content', description);

  // OG Title & Description & URL
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', description);

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

  // Canonical link
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink) {
    canonicalLink.setAttribute('href', canonicalUrl);
  }
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeLiveDemo, setActiveLiveDemo] = useState<LiveDemoItem | null>(null);
  const [isEmailCollectorOpen, setIsEmailCollectorOpen] = useState(false);

  // Trigger popup email collector exactly 45 seconds after visitor lands
  useEffect(() => {
    let isSubscribed = false;
    let isDismissed = false;
    try {
      isSubscribed = !!localStorage.getItem('ht_email_subscriber');
      isDismissed = sessionStorage.getItem('ht_email_collector_dismissed') === 'true';
    } catch {
      // ignore
    }

    if (isSubscribed || isDismissed) {
      return;
    }

    const timer = setTimeout(() => {
      setIsEmailCollectorOpen(true);
    }, 45000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseEmailCollector = () => {
    setIsEmailCollectorOpen(false);
    try {
      sessionStorage.setItem('ht_email_collector_dismissed', 'true');
    } catch {
      // ignore
    }
  };

  // Helper to extract clean page slug from current window location without #
  const resolvePageFromUrl = useCallback((): PageId => {
    // 1. Check pathname first (clean URL slug format: /services, /products, /portfolio, /demos, etc.)
    const pathnameSlug = window.location.pathname.replace(/^\/+|\/+$/g, '').trim().toLowerCase();

    if (VALID_PAGES.includes(pathnameSlug as PageId)) {
      return pathnameSlug as PageId;
    }

    // 2. If pathname is root, check if there's any legacy hash (e.g. #services, #portfolio) to cleanly migrate
    if (!pathnameSlug || pathnameSlug === 'home') {
      const hashSlug = window.location.hash.replace(/^#\/?/, '').trim().toLowerCase();
      if (VALID_PAGES.includes(hashSlug as PageId)) {
        // Strip # completely from URL and replace with clean path
        const cleanPath = hashSlug === 'home' ? '/' : `/${hashSlug}`;
        window.history.replaceState({ page: hashSlug }, '', cleanPath);
        return hashSlug as PageId;
      }
      if (window.location.hash) {
        // Clear any orphaned hash like #
        window.history.replaceState(null, '', '/');
      }
      return 'home';
    }

    return 'home';
  }, []);

  // Sync state with clean path slugs on mount & browser back/forward (popstate)
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const initialPage = resolvePageFromUrl();
    setCurrentPage(initialPage);
    syncMetaTags(initialPage);

    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }

    const handlePopState = () => {
      const page = resolvePageFromUrl();
      setCurrentPage(page);
      syncMetaTags(page);
      if (!window.location.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [resolvePageFromUrl]);

  // Clean navigation using HTML5 pushState (no # in url slugs)
  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    syncMetaTags(page);

    const targetPath = page === 'home' ? '/' : `/${page}`;
    
    // Only push state if path differs or if a hash is still present
    if (window.location.pathname !== targetPath || window.location.hash) {
      window.history.pushState({ page }, '', targetPath);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  const launchLiveDemo = (demo: LiveDemoItem) => {
    setActiveLiveDemo(demo);
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 selection:bg-[#FF6B00] selection:text-white flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Universal Sticky Header Navigation with Clean Path Navigation */}
      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
        onOpenDemoModal={openDemoModal} 
      />

      {/* Multipage Dynamic View Router */}
      <main className="flex-1 pt-24 sm:pt-28">
        {currentPage === 'home' && (
          <HomePage
            onOpenDemoModal={openDemoModal}
            onNavigate={handleNavigate}
            onLaunchLiveDemo={launchLiveDemo}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onOpenDemoModal={openDemoModal}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            onOpenDemoModal={openDemoModal}
            onNavigate={handleNavigate}
            onLaunchLiveDemo={launchLiveDemo}
          />
        )}

        {(currentPage === 'demos' || currentPage === 'portfolio') && (
          <PortfolioPage
            onOpenDemoModal={openDemoModal}
            onNavigate={handleNavigate}
            onLaunchLiveDemo={launchLiveDemo}
          />
        )}

        {currentPage === 'pricing' && (
          <PricingPage
            onOpenDemoModal={openDemoModal}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onOpenDemoModal={openDemoModal}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onOpenDemoModal={openDemoModal}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'websites' && (
          <WebsitesPage
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'ai-ugc' && (
          <UgcPage
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'automation' && (
          <AutomationPage
            onNavigate={handleNavigate}
          />
        )}

        {/* Fallback to prevent blank page on unknown state */}
        {!VALID_PAGES.includes(currentPage) && (
          <HomePage
            onOpenDemoModal={openDemoModal}
            onNavigate={handleNavigate}
            onLaunchLiveDemo={launchLiveDemo}
          />
        )}
      </main>

      {/* Universal Footer */}
      <Footer 
        onOpenDemoModal={openDemoModal} 
        onNavigate={handleNavigate} 
      />

      {/* Interactive Device Viewport & Live Demo Modal */}
      {activeLiveDemo && (
        <LiveDemoModal
          demo={activeLiveDemo}
          onClose={() => setActiveLiveDemo(null)}
          onOpenConsultation={openDemoModal}
        />
      )}

      {/* Free Website & Bot Prototype Consultation Modal */}
      {isDemoModalOpen && (
        <FreeDemoModal 
          isOpen={isDemoModalOpen} 
          onClose={closeDemoModal} 
        />
      )}

      {/* 10-Second Timed Email Collector Popup */}
      <EmailCollectorModal
        isOpen={isEmailCollectorOpen}
        onClose={handleCloseEmailCollector}
        onOpenConsultation={openDemoModal}
      />

      {/* Automated Rule-Based Chatbot & WhatsApp Support Widget */}
      <FloatingWhatsApp onOpenDemoModal={openDemoModal} />

    </div>
  );
}
