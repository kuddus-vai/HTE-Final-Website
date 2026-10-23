import { LiveDemoItem } from '../types';

export interface ShopflowWebsiteDemo {
  id: string;
  name: string;
  url: string;
  category: string;
  badge: string;
  description: string;
  previewImageUrl: string;
  metrics: string;
  tags: string[];
}

export const SHOPFLOW_WEBSITES_DEMO: ShopflowWebsiteDemo[] = [
  {
    id: 'urban-beast',
    name: 'Urban Beast BD',
    url: 'https://kuddus-vai.github.io/Urban-Beast-BD-/',
    category: 'ShopFlow™ eCommerce',
    badge: '★ Featured Live eCommerce',
    description: 'Trendy streetwear storefront with dynamic lookbook, fast mobile checkout, and automated courier sync.',
    previewImageUrl: 'https://kuddus-vai.github.io/Urban-Beast-BD-/banners/702919686_1508813661029736_2615736338465446558_n.jpeg',
    metrics: '0.68s First Contentful Paint',
    tags: ['★ Featured eCommerce', 'Streetwear', '1-Tap Checkout', 'Steadfast/Pathao Sync']
  },
  {
    id: 'optimum-power',
    name: 'Optimum Power Engineering',
    url: 'https://optimumpowerengineering.com/',
    category: 'Corporate & Engineering',
    badge: '★ Featured Project',
    description: 'Heavy electrical & substation engineering portal with technical catalog and instant WhatsApp RFQ.',
    previewImageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=80',
    metrics: '99.4% Mobile Performance',
    tags: ['Featured Project', 'Substation Engineering', 'Next.js', 'WhatsApp RFQ']
  },
  {
    id: 'druto-bazar',
    name: 'Druto Bazar BD',
    url: 'https://kuddus-vai.github.io/Druto-Bazar-BD/',
    category: 'Online Grocery & Essentials',
    badge: 'Online Grocery Demo',
    description: 'Ultra-fast online grocery shopping platform with fresh vegetables, pantry staples, and 1-tap WhatsApp quick ordering.',
    previewImageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80',
    metrics: '30-Min Fast Delivery Ready',
    tags: ['Online Grocery', 'Daily Essentials', 'WhatsApp Cart', 'Dhaka Express Delivery']
  },
  {
    id: 'aumecho-sanctuary',
    name: 'AumEcho Sanctuary',
    url: 'https://aumecho-sanctuary.pages.dev/',
    category: 'YouTube Channel & Vedic Media',
    badge: '★ YouTube Channel Website',
    description: 'Atmospheric digital sanctuary for YouTube channel AumEcho with Sanskrit mantras, Hindi bhajans, 108x Vedic japa counters, and tranquil audio-visual streams.',
    previewImageUrl: 'https://storage.googleapis.com/gpt-engineer-file-uploads/CnE95iaVJRU3T3nDyvyFEzucYY92/social-images/social-1777315086034-AumEcho_thumbnail.webp',
    metrics: '108x Japa Chants • YouTube Media Sync',
    tags: ['YouTube Channel Website', 'Sanskrit Mantras', 'Vedic Chants', 'Creator Platform']
  },
  {
    id: 'one-outfit',
    name: 'One Outfit',
    url: 'https://kuddus-vai.github.io/One-Outfit/',
    category: 'ShopFlow™ eCommerce',
    badge: 'Fashion & Boutique',
    description: 'Curated lifestyle & apparel boutique with responsive collection carousels and direct social cart.',
    previewImageUrl: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop&q=80',
    metrics: '99 Google Speed Score',
    tags: ['Modern Fashion', 'WhatsApp Cart', 'Mobile First']
  },
  {
    id: 'secret-style',
    name: 'Secret Style BD',
    url: 'https://kuddus-vai.github.io/Secret-Style-BD/',
    category: 'ShopFlow™ eCommerce',
    badge: 'Luxury Boutique',
    description: 'Dark luxury digital fashion house showcasing exclusive apparel with buttery-smooth 60fps scrolling.',
    previewImageUrl: 'https://kuddus-vai.github.io/Secret-Style-BD/assets/products/100.jpg',
    metrics: '+41% Engagement Velocity',
    tags: ['Luxury Aesthetics', 'Instant Checkout', 'Responsive']
  },
  {
    id: 'awesome-point',
    name: 'Awesome Point',
    url: 'https://kuddus-vai.github.io/Awesome-Point/',
    category: 'ShopFlow™ eCommerce',
    badge: 'Retail & Multi-Category',
    description: 'Multi-category retail storefront engineered for fast browsing, flash deals, and quick checkout.',
    previewImageUrl: 'https://kuddus-vai.github.io/Awesome-Point/Banner.jpg',
    metrics: '98 Mobile Usability Score',
    tags: ['Multi-Category', 'Flash Sales', 'Fast Cart']
  }
];

/**
 * LIVE DEMO DATA REGISTRY
 * -------------------------------------------------------------
 * All live demo URLs are centralized here. 
 * The client can supply or update any of the `liveDemoUrl` fields 
 * when their live URLs are ready.
 */
export const LIVE_DEMOS_DATA: LiveDemoItem[] = [
  {
    id: 'demo-wpl-pureflow',
    title: 'WPL PureFlow — Advanced Water Purification (USA)',
    category: 'websites',
    badge: '★ Featured US Live Project',
    clientName: 'WPL (Water Purification Laboratories USA)',
    industry: 'Liquid Futurism & Clean Water Tech',
    summary: 'Awwwards-grade digital experience for luxury residential, medical, and hospitality water purification systems across the USA. Features fluid liquid atmosphere, technical specification inspection, and architectural system consultations.',
    metrics: '0.52s LCP • 11,000+ US Installations • Liquid Futurism',
    tags: ['★ Featured Project', 'US Precision Engineering', 'Liquid Futurism', 'Next-Gen Architecture', 'Clean Water Tech'],
    liveDemoUrl: 'https://usa-pureflow.pages.dev/',
    hasLiveDemo: true,
    previewType: 'iframe',
    previewImageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&auto=format&fit=crop&q=80',
    caseStudyHighlights: [
      'Built in Sheffield since 1992, now plumbed into 11,000+ American homes, medical facilities, and boutique hospitality properties',
      'Ultra-minimalist liquid futurism aesthetic with atmospheric fluid dynamics and bespoke typography',
      'Interactive system specification breakdown for reverse osmosis, deionization, and UV sterilization architectures'
    ]
  },
  {
    id: 'demo-optimum-power',
    title: 'Optimum Power Engineering Ltd.',
    category: 'websites',
    badge: '★ Featured Live Project',
    clientName: 'Optimum Power Engineering Ltd.',
    industry: 'Heavy Engineering & Energy',
    summary: 'Corporate web engineering platform for heavy electrical and substation solutions in Bangladesh. Features industrial product catalogs, technical documentation downloads, and instant WhatsApp inquiry routing.',
    metrics: '99.4% Mobile Performance • 3.8x B2B Project RFQ Volume',
    tags: ['★ Featured Project', 'Corporate Showcase', 'Next.js Architecture', 'Industrial B2B', 'WhatsApp RFQ'],
    liveDemoUrl: 'https://optimumpowerengineering.com/',
    hasLiveDemo: true,
    previewType: 'iframe',
    previewImageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=80',
    caseStudyHighlights: [
      'Engineered for heavy electrical engineering clients, contractors, and industrial developers across Bangladesh',
      'Instant WhatsApp & phone RFQ trigger for high-voltage transformers and power generators',
      'Optimized Core Web Vitals for rapid loading on field mobile connections'
    ]
  },
  {
    id: 'demo-druto-bazar-bd',
    title: 'Druto Bazar BD - Online Grocery Superstore',
    category: 'websites',
    badge: 'Online Grocery Demo',
    clientName: 'Druto Bazar BD',
    industry: 'Online Grocery & Daily Essentials',
    summary: 'High-speed online grocery storefront for fresh vegetables, fruits, dairy, and household pantry staples in Bangladesh. Engineered with instant category filtering, dynamic basket calculation, and 1-tap WhatsApp quick ordering for same-day home delivery.',
    metrics: '30-Min Fast Delivery Ready • 99.2% Mobile Speed',
    tags: ['Online Grocery', 'Daily Essentials', 'ShopFlow™ eCommerce', 'WhatsApp Quick Order', 'Instant Cart'],
    liveDemoUrl: 'https://kuddus-vai.github.io/Druto-Bazar-BD/',
    hasLiveDemo: true,
    previewType: 'iframe',
    previewImageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=80',
    caseStudyHighlights: [
      'Tailored specifically for rapid pantry shopping and fresh food replenishment in Bangladesh',
      'One-tap WhatsApp basket checkout dispatching itemized lists and delivery address directly to dispatchers',
      'Ultra-optimized mobile architecture loading smoothly even on low-bandwidth cellular networks'
    ]
  },
  {
    id: 'demo-aumecho-sanctuary',
    title: 'AumEcho Sanctuary — YouTube Channel & Vedic Audio Hub',
    category: 'websites',
    badge: '★ YouTube Channel Website',
    clientName: 'AumEcho (YouTube Creator Channel)',
    industry: 'YouTube Media & Spiritual Chants',
    summary: 'Immersive digital sanctuary for the AumEcho YouTube creator channel. Engineered with sacred Sanskrit mantras, Hindi bhajans, 108x Vedic japa counters, and distraction-free audio-visual streaming for deep meditation, healing, and focus.',
    metrics: '108x Repetitions • Sub-second Audio Stream • 4K Media',
    tags: ['★ YouTube Channel Website', 'Vedic Mantras', 'Creator Platform', 'Sanskrit Chants', 'Audio-Visual Sync'],
    liveDemoUrl: 'https://aumecho-sanctuary.pages.dev/',
    hasLiveDemo: true,
    previewType: 'iframe',
    previewImageUrl: 'https://storage.googleapis.com/gpt-engineer-file-uploads/CnE95iaVJRU3T3nDyvyFEzucYY92/social-images/social-1777315086034-AumEcho_thumbnail.webp',
    caseStudyHighlights: [
      'Bespoke web platform engineered for YouTube creator channel audience retention and brand authority',
      'Curated audio streaming player with Vedic mantras, Hindi bhajans, and 108x repetition japa counters',
      'Sub-second page transitions with atmospheric dark meditation aesthetics and responsive mobile playback'
    ]
  },
  {
    id: 'demo-urban-beast-bd',
    title: 'Urban Beast BD - ShopFlow™ Storefront',
    category: 'websites',
    badge: 'ShopFlow™ Live eCommerce',
    clientName: 'Urban Beast BD',
    industry: 'Apparel & Lifestyle eCommerce',
    summary: 'High-conversion trendy apparel and streetwear storefront designed for youth fashion culture in Bangladesh. Complete with responsive lookbooks, size guides, and frictionless social checkout.',
    metrics: '0.68s First Contentful Paint • +34% Conversion Velocity',
    tags: ['ShopFlow™ eCommerce', 'Streetwear Catalog', '1-Tap Checkout', 'Mobile First', 'Dhaka Fast Delivery'],
    liveDemoUrl: 'https://kuddus-vai.github.io/Urban-Beast-BD-/',
    hasLiveDemo: true,
    previewType: 'iframe',
    previewImageUrl: 'https://kuddus-vai.github.io/Urban-Beast-BD-/banners/702919686_1508813661029736_2615736338465446558_n.jpeg',
    caseStudyHighlights: [
      'Bold dark-mode urban aesthetics crafted for viral Facebook & Instagram ad campaigns',
      'Frictionless mobile ordering with instant WhatsApp delivery confirmation',
      'Automated Steadfast and Pathao courier dispatch readiness'
    ]
  },
  {
    id: 'demo-one-outfit',
    title: 'One Outfit - ShopFlow™ Fashion Boutique',
    category: 'websites',
    badge: 'ShopFlow™ Live eCommerce',
    clientName: 'One Outfit BD',
    industry: 'Fashion & Lifestyle Retail',
    summary: 'Minimalist contemporary fashion portal emphasizing curated seasonal collections, drop announcements, and seamless mobile product discovery for Bangladeshi fashion shoppers.',
    metrics: '99 Speed Score • Sub-second Page Transitions',
    tags: ['ShopFlow™ eCommerce', 'Curated Boutique', 'WhatsApp Ordering', 'Responsive Lookbook'],
    liveDemoUrl: 'https://kuddus-vai.github.io/One-Outfit/',
    hasLiveDemo: true,
    previewType: 'iframe',
    previewImageUrl: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop&q=80',
    caseStudyHighlights: [
      'High-fashion editorial layout featuring responsive product carousels and clean pricing',
      'Direct WhatsApp order placement with automated delivery address and size capture',
      'Ultra-lightweight bundle size delivering instant load times on 4G networks'
    ]
  },
  {
    id: 'demo-secret-style-bd',
    title: 'Secret Style BD - ShopFlow™ Luxury Store',
    category: 'websites',
    badge: 'ShopFlow™ Live eCommerce',
    clientName: 'Secret Style BD',
    industry: 'Exclusive Apparel & Accessories',
    summary: 'Sophisticated dark luxury digital boutique showcasing exclusive trend apparel, signature collections, and direct-to-consumer order workflows.',
    metrics: '+41% Average Time on Site • Instant Mobile Load',
    tags: ['ShopFlow™ eCommerce', 'Luxury Dark Aesthetic', 'Direct WhatsApp Cart', 'Fast Checkout'],
    liveDemoUrl: 'https://kuddus-vai.github.io/Secret-Style-BD/',
    hasLiveDemo: true,
    previewType: 'iframe',
    previewImageUrl: 'https://kuddus-vai.github.io/Secret-Style-BD/assets/products/100.jpg',
    caseStudyHighlights: [
      'Atmospheric high-contrast luxury UI designed for premium wardrobe drops',
      'Instant direct-line purchase integration via WhatsApp concierge',
      'Zero layout shift (0.00 CLS) ensuring buttery smooth mobile scrolling'
    ]
  },
  {
    id: 'demo-awesome-point',
    title: 'Awesome Point - ShopFlow™ Storefront',
    category: 'websites',
    badge: 'ShopFlow™ Live eCommerce',
    clientName: 'Awesome Point',
    industry: 'Multi-Category Retail & Gadgets',
    summary: 'Dynamic multi-category digital retail storefront engineered for fast product discovery, flash sales, category filtering, and instant customer engagement.',
    metrics: '98 Mobile Usability Score • 1-Click Order Link',
    tags: ['ShopFlow™ eCommerce', 'Multi-Category Catalog', 'Flash Deals', 'Quick Cart', 'WhatsApp Notification'],
    liveDemoUrl: 'https://kuddus-vai.github.io/Awesome-Point/',
    hasLiveDemo: true,
    previewType: 'iframe',
    previewImageUrl: 'https://kuddus-vai.github.io/Awesome-Point/Banner.jpg',
    caseStudyHighlights: [
      'Multi-category retail grid supporting rapid expansion into gadgets, fashion, and lifestyle items',
      'Fast search and category filtering tailored for non-technical shoppers',
      'Built-in order summary generation for rapid verification over WhatsApp'
    ]
  },
  {
    id: 'demo-enterprise-monitor',
    title: 'Enterprise Pulse Monitor (Cyber-Threat & Tech-Intelligence)',
    category: 'intelligence',
    badge: 'Cyber-Threat & Tech-Intelligence',
    clientName: 'High-Tech Enterprise Security Operations',
    industry: 'Cyber-Threat & Tech-Intelligence',
    summary: 'Real-time global cyber-threat & tech-intelligence dashboard for high-tech enterprise clients. Ingests active threat vectors, zero-day vulnerabilities, API endpoint telemetry, and infrastructure resilience indicators 24/7.',
    metrics: 'Real-Time Threat Ingestion • 99.98% SLA',
    tags: ['Cyber-Threat Telemetry', 'Tech-Intelligence', 'Zero-Day Feeds', 'Global Threat Map'],
    liveDemoUrl: 'https://monitor.hightechenterprise.xyz/',
    hasLiveDemo: true,
    previewType: 'iframe',
    previewImageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    caseStudyHighlights: [
      'Ingests real-time global cyber-threat feeds and vulnerability intelligence for enterprise clients',
      'Continuous 60s multi-region endpoint verification and webhook telemetry (99.98% SLA)',
      'Automated threat alert dispatch and resilience analytics ensuring zero silent outages'
    ]
  },
  {
    id: 'demo-flowpulse-whatsapp',
    title: 'FlowPulse™ WhatsApp AI Sales Machine',
    category: 'whatsapp',
    badge: 'Flagship WhatsApp Bot',
    clientName: 'FlowPulse Sandbox',
    industry: 'Conversational Commerce',
    summary: 'Autonomous 24/7 WhatsApp AI sales assistant capable of handling multi-turn inquiries, catalog browsing, cart generation, and live human takeover.',
    metrics: '70% automated resolution • <2s response latency',
    tags: ['WhatsApp Cloud API', 'Conversational AI', 'Bangla & English NLP', 'bKash Link'],
    liveDemoUrl: 'https://demo.flowpulse.hightechenterprise.xyz',
    hasLiveDemo: true,
    previewType: 'interactive-whatsapp',
    previewImageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    caseStudyHighlights: [
      'Responds in both colloquial Bangla and professional English instantly',
      'Integrates directly with product catalogs and calculates real-time shipping',
      'Automated fallback to live human agent when sentiment or intent requires it'
    ]
  },
  {
    id: 'demo-nexora-logistics',
    title: 'Nexora Logistics Parcel Tracking Bot',
    category: 'whatsapp',
    badge: 'Supply Chain & Logistics',
    clientName: 'Nexora Express',
    industry: 'Courier & Logistics',
    summary: 'Automated conversational parcel tracking engine. Receives consignment numbers and provides live geo-status, rider contacts, and delivery rescheduling.',
    metrics: '60% reduction in call center query volume',
    tags: ['WhatsApp Cloud API', 'Steadfast & Pathao', 'GPS Telemetry', 'Automated OTP'],
    liveDemoUrl: 'https://demo.nexora.hightechenterprise.xyz',
    hasLiveDemo: true,
    previewType: 'interactive-whatsapp',
    previewImageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80',
    caseStudyHighlights: [
      'Customers type parcel tracking ID and receive immediate real-time rider status',
      'Automated dispatch alerts sent to receivers on morning of delivery',
      'Reduces failed delivery rates by over 22%'
    ]
  },
  {
    id: 'demo-smartpos-cloud',
    title: 'Smart POS Cloud™ Retail Point of Sale',
    category: 'software',
    badge: 'Offline-First POS',
    clientName: 'Smart POS Engine',
    industry: 'Multi-Branch Retail',
    summary: 'Cloud-synced point of sale system with offline capability, barcode scanner support, thermal receipt printing, and WhatsApp digital billing.',
    metrics: '100% offline uptime • <0.1s barcode scan latency',
    tags: ['Offline-First PWA', 'Cloud Firestore', 'Thermal Printing', 'Multi-Warehouse'],
    liveDemoUrl: 'https://demo.smartpos.hightechenterprise.xyz',
    hasLiveDemo: true,
    previewType: 'interactive-pos',
    previewImageUrl: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=800&auto=format&fit=crop&q=80',
    caseStudyHighlights: [
      'Cashiers can continue billing even during internet outages; auto-syncs when online',
      'Generates paperless digital receipts directly sent to customer WhatsApp with coupons',
      'Multi-branch stock transfer and instant profit/loss accounting'
    ]
  },
  {
    id: 'demo-workflowai-optimizer',
    title: 'WorkflowAI™ Business Process Engine',
    category: 'software',
    badge: 'Autonomous Workflows',
    clientName: 'WorkflowAI Core',
    industry: 'Enterprise Automation',
    summary: 'Automated morning executive briefings, invoice data extraction, CRM status synchronization, and multi-channel team notifications.',
    metrics: '18.5 hours saved / week per manager',
    tags: ['n8n / Zapier', 'CRM Bi-Directional', 'Document OCR', 'Executive WhatsApp'],
    liveDemoUrl: 'https://demo.workflowai.hightechenterprise.xyz',
    hasLiveDemo: true,
    previewType: 'interactive-crm',
    previewImageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    caseStudyHighlights: [
      'Morning briefing auto-dispatched to WhatsApp with previous day sales and pending logistics',
      'Automatic invoice PDF extraction directly populated into accounting spreadsheets',
      'Zero-code webhook management with automated retry queues'
    ]
  }
];
