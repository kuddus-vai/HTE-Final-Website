import { ServiceItem, ProductItem, PricingPlan, TestimonialItem, OfficeLocation } from '../types';

export const COMPANY_INFO = {
  name: 'High-Tech Enterprise',
  legalName: 'High-Tech Enterprise BD Ltd.',
  tagline: 'SMART SOLUTIONS | DIGITAL GROWTH | YOUR SUCCESS',
  shortBio: 'High-Tech Enterprise helps businesses scale with automation, digital systems and smart tools. We build WhatsApp Auto Reply, CRM flows, eCommerce integrations and complete business automation solutions. Upgrade your business one tap at a time.',
  phone: '01996-921149',
  phoneIntl: '+880 1996-921149',
  whatsappUrl: 'https://wa.me/8801996921149',
  email: 'hightechenterprisebd@gmail.com',
  website: 'hightechenterprise.xyz',
  facebookUrl: 'https://facebook.com/HighTechEnterprise48',
  instagramUrl: 'https://instagram.com/hightechenterprisebd',
  stats: {
    recommendationRate: '100%',
    verifiedReviews: '12+',
    followers: '3.4K+',
    queriesAutomated: '70%+',
    avgResponseTime: '< 3s',
    uptime: '99.98%'
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'whatsapp-automation',
    title: 'WhatsApp Auto-Reply & Conversational AI',
    tagline: '70% of business queries never need a human',
    description: 'Turn your WhatsApp into a 24/7 autonomous sales and customer care machine. Takes orders, answers FAQs, updates delivery tracking, and qualifies leads while you sleep.',
    features: [
      'Official Meta Cloud WhatsApp API Integration',
      'Intelligent natural language understanding in English & Bangla',
      'Automated product catalog browsing & cart checkout',
      'Seamless live-agent takeover whenever required'
    ],
    metrics: 'Eliminates 70% support ticket overhead',
    iconName: 'MessageSquareCode',
    category: 'automation'
  },
  {
    id: 'high-performance-web',
    title: 'High-Performance Web Platforms',
    tagline: 'Your website is an asset, not a brochure',
    description: 'We engineer ultra-fast Next.js and modern web platforms optimized for Google Core Web Vitals, SEO dominance, and maximum conversion rates.',
    features: [
      'Sub-second load times on mobile 4G/5G networks',
      'Deep SEO optimization with rich schema structured data',
      'Scientific CRO funnels designed for maximum conversions',
      'PWA support, offline caching & responsive layout'
    ],
    metrics: '3.4x average conversion rate increase',
    iconName: 'Globe',
    category: 'web'
  },
  {
    id: 'crm-autonomous-workflows',
    title: 'Autonomous Workflows & CRM Flows',
    tagline: 'We build nervous systems, not disconnected silos',
    description: 'Native end-to-end automations connecting HubSpot, Salesforce, Zoho, Google Sheets, and your internal databases without human intervention.',
    features: [
      'Automatic lead scoring & immediate sales notifications',
      'Multi-channel synchronization across Meta, Web & Email',
      'Automated invoice generation & payment reminders',
      'Error-resilient webhook pipelines with automatic retries'
    ],
    metrics: 'Saves 25+ weekly administrative hours',
    iconName: 'Workflow',
    category: 'crm'
  },
  {
    id: 'ecommerce-sync',
    title: 'eCommerce & Retail Integrations',
    tagline: 'Shopify, WooCommerce & custom checkout systems',
    description: 'Connect inventory, orders, payment gateways (bKash, Nagad, SSLCommerz, Stripe) with automated order confirmation and WhatsApp tracking updates.',
    features: [
      'Real-time multi-branch stock & inventory sync',
      'Automated abandoned cart recovery on WhatsApp (28% recovery rate)',
      'Direct order confirmation with OTP verification',
      'Automated return/refund & delivery courier dispatch'
    ],
    metrics: '28% higher cart recovery rates',
    iconName: 'ShoppingBag',
    category: 'automation'
  },
  {
    id: 'enterprise-resilience',
    title: 'Enterprise Resilience & Security',
    tagline: 'Automation requires absolute trust & defense-in-depth',
    description: 'We implement SOC-2 compliant logic, role-based access control, and end-to-end encryption for every internal database and customer-facing portal.',
    features: [
      'End-to-end data encryption at rest and in transit',
      'Zero-trust API boundaries with rate-limiting & DDoS shielding',
      'Granular audit logging & tamper-evident event streams',
      'Full compliance with privacy standards & strict data governance'
    ],
    metrics: 'SOC-2 compliant architecture',
    iconName: 'ShieldCheck',
    category: 'security'
  },
  {
    id: 'full-stack-intelligence',
    title: 'Full-Stack Edge Intelligence',
    tagline: 'Built on a hardened stack for the 2026 technical landscape',
    description: 'We utilize edge compute, serverless low-latency databases, and custom LLM microservices to deliver lightning-fast responses globally.',
    features: [
      'Low-latency edge database routing with caching',
      'Custom LLM agent fine-tuning & RAG document search',
      'Automated daily workflow optimizers for teams',
      'Real-time analytics dashboard with predictive KPI alerts'
    ],
    metrics: '99.98% mission-critical uptime SLA',
    iconName: 'Cpu',
    category: 'automation'
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'flowpulse',
    name: 'FlowPulse™',
    badge: 'WhatsApp AI Agent & Auto-Reply',
    headline: 'Turn WhatsApp Into Your Highest-Converting Sales Rep',
    description: 'A complete WhatsApp business automation suite. Handles queries, sends automated broadcasts, confirms orders, and synchronizes leads directly with your CRM.',
    highlights: [
      'Zero-lag 24/7 auto-reply engine with context memory',
      'Multi-agent shared team inbox with tag management',
      'Automated broadcasts with 98% open rates',
      'Instant bKash, Nagad & card payment link generator'
    ],
    integrations: ['WhatsApp Cloud API', 'HubSpot', 'Shopify', 'bKash API', 'Google Sheets'],
    previewType: 'whatsapp',
    ctaText: 'Test FlowPulse Live'
  },
  {
    id: 'shopflow',
    name: 'ShopFlow™',
    badge: 'Next-Gen eCommerce Platform',
    headline: 'High-Converting Online Storefronts Engineered for Growth',
    description: 'Headless, lightning-fast eCommerce architecture tailored for Bangladesh and international retail businesses with embedded WhatsApp checkout.',
    highlights: [
      'Under 0.8s mobile page loading on 4G networks',
      'WhatsApp 1-click checkout & automated invoice generation',
      'Courier API integration (Steadfast, Pathao, RedX)',
      'Automated SMS & WhatsApp order tracking milestones'
    ],
    integrations: ['Next.js', 'WooCommerce', 'Shopify', 'Pathao', 'SSLCommerz'],
    previewType: 'ecommerce',
    ctaText: 'Explore ShopFlow'
  },
  {
    id: 'smartpos',
    name: 'Smart POS Cloud',
    badge: 'Cloud Retail & Multi-Branch POS',
    headline: 'Real-Time Inventory, Offline Billing & Accounting in One Place',
    description: 'Never lose a sale due to internet dropouts. Modern cloud point-of-sale system with offline sync, barcode scanning, and multi-warehouse control.',
    highlights: [
      'Works offline with instant cloud sync on reconnection',
      'Multi-branch inventory transfer and low-stock alerts',
      'Daily profit & loss, VAT, and expense reporting',
      'Thermal receipt printing and digital WhatsApp receipts'
    ],
    integrations: ['Cloud Firestore', 'Thermal Printers', 'Barcode Scanners', 'CSV Export'],
    previewType: 'pos',
    ctaText: 'View POS Features'
  },
  {
    id: 'workflowai',
    name: 'WorkflowAI™',
    badge: 'AI Daily Workflow Optimizer',
    headline: 'Automate Repetitive Daily Tasks and Free 15+ Hours Weekly',
    description: 'Intelligent workflow bot that ingests emails, invoices, client messages, and spreadsheets, then formats and dispatches them across your team automatically.',
    highlights: [
      'Automated PDF invoice and receipt extraction',
      'Daily morning team briefing dispatched to WhatsApp or Slack',
      'Automatic CRM status transitions and follow-up alerts',
      'Custom webhook triggers for bespoke company pipelines'
    ],
    integrations: ['OpenAI / Gemini', 'Zapier', 'Make', 'Slack', 'PostgreSQL'],
    previewType: 'workflow',
    ctaText: 'Optimize Workflows'
  }
];

export const PRICING_DATA: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Automation',
    tagline: 'Ideal for local businesses & growing eCommerce stores',
    priceBDT: '৳ 14,999',
    priceUSD: '$ 129',
    period: 'one-time setup',
    features: [
      'WhatsApp Business Cloud API setup',
      'Smart Auto-Reply for top 30 business FAQs',
      'Order capture & Google Sheets / Excel live sync',
      'Welcome greeting & out-of-office flow',
      '1 WhatsApp business number connection',
      '14 days post-launch technical support',
      'Basic analytics & monthly summary'
    ],
    notIncluded: [
      'Multi-agent shared team inbox',
      'Custom CRM bi-directional sync',
      'Custom Next.js web application'
    ],
    ctaLabel: 'Get Started'
  },
  {
    id: 'growth-pro',
    name: 'Business Growth Suite',
    tagline: 'Most Popular: Complete WhatsApp AI + CRM + eCommerce automation',
    popular: true,
    priceBDT: '৳ 34,999',
    priceUSD: '$ 299',
    period: 'one-time setup',
    features: [
      'Advanced Conversational AI Bot with context memory',
      '70% support ticket resolution automation',
      'Full Shopify / WooCommerce or Custom Store catalog sync',
      'Automated abandoned cart recovery flow on WhatsApp',
      'Courier API integration (Pathao / Steadfast / RedX)',
      'HubSpot / Zoho / CRM bi-directional sync',
      'Multi-agent dashboard with live human takeover',
      'Automated bKash / Nagad / Card payment reminders',
      '30 days priority VIP support & staff training'
    ],
    ctaLabel: 'Claim Growth Package'
  },
  {
    id: 'enterprise-custom',
    name: 'Enterprise Full-Stack',
    tagline: 'Custom high-performance web platform & bespoke AI systems',
    priceBDT: 'Custom Quote',
    priceUSD: 'Custom Quote',
    period: 'tailored project',
    features: [
      'Bespoke Next.js ultra-fast high-converting web platform',
      'Scientific Conversion Rate Optimization (CRO) funnel',
      'Unlimited custom AI workflow automations & RAG agents',
      'Enterprise ERP, POS and inventory database integration',
      'SOC-2 compliant end-to-end security hardening',
      'Dedicated cloud server infrastructure with 99.98% SLA',
      'Quarterly performance & conversion audit',
      'Dedicated Technical Account Manager'
    ],
    ctaLabel: 'Schedule Executive Call'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'rev-1',
    clientName: 'Tanvir Hossain',
    role: 'Managing Director',
    company: 'Urban Threads Lifestyle',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    reviewText: 'High-Tech Enterprise completely revolutionized our customer support. Our WhatsApp used to get flooded with 400+ inquiries daily during campaigns. Their automated system now handles 75% of orders directly, confirms addresses, and syncs with our warehouse. 100% recommended!',
    verified: true,
    businessType: 'eCommerce & Fashion'
  },
  {
    id: 'rev-2',
    clientName: 'Mahmudur Rahman',
    role: 'Founder & CEO',
    company: 'Nexora Logistics & Express',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    reviewText: 'They didn’t just make us a website; they built a full nervous system for our operations. The automated parcel tracking bot on WhatsApp reduced our call center inquiries by over 60%. Their team at Savar/Dhaka was on point with delivery time.',
    verified: true,
    businessType: 'Logistics & Supply Chain'
  },
  {
    id: 'rev-3',
    clientName: 'Syeda Nafisa Karim',
    role: 'Operations Head',
    company: 'Lumiere Beauty Labs',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    reviewText: 'The WhatsApp abandoned cart recovery automation alone paid for their entire service in the first 12 days. We recovered over ৳ 320,000 worth of pending orders. Truly high-tech and professional.',
    verified: true,
    businessType: 'Retail & Cosmetics'
  },
  {
    id: 'rev-4',
    clientName: 'Arif Chowdhury',
    role: 'Co-Founder',
    company: 'Apex Digital Real Estate',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    reviewText: 'The new high-performance web platform loads in under 1 second. Our Google SEO ranking jumped to page 1 for multiple high-intent keywords, and qualified leads are automatically routed to our sales agents via CRM. Outstanding work.',
    verified: true,
    businessType: 'Real Estate & Properties'
  }
];

export const LOCATIONS_DATA: OfficeLocation[] = [
  {
    city: 'Dhaka (Savar)',
    country: 'Bangladesh',
    isHQ: true,
    address: 'Savar, Dhaka 1217, Bangladesh',
    status: 'Operational',
    timezone: 'GMT+6 (BST)'
  },
  {
    city: 'New York',
    country: 'United States',
    address: 'Manhattan Hub, NY, USA',
    status: 'Hub',
    timezone: 'GMT-4 (EDT)'
  },
  {
    city: 'London',
    country: 'United Kingdom',
    address: 'Canary Wharf Tech District, London',
    status: 'Liaison',
    timezone: 'GMT+1 (BST)'
  },
  {
    city: 'Dubai',
    country: 'United Arab Emirates',
    address: 'Silicon Oasis Tech Hub, Dubai',
    status: 'Hub',
    timezone: 'GMT+4 (GST)'
  },
  {
    city: 'San Francisco',
    country: 'United States',
    address: 'Bay Area Innovation Center, CA',
    status: 'Liaison',
    timezone: 'GMT-7 (PDT)'
  },
  {
    city: 'Luxembourg',
    country: 'Luxembourg',
    address: 'Fintech Europe Corridor, Luxembourg City',
    status: 'Liaison',
    timezone: 'GMT+2 (CEST)'
  }
];

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Overview' | 'WhatsApp & AI' | 'Courier & Integrations' | 'Pricing & ROI' | 'Local & Support';
}

export const FAQ_DATA: FaqItem[] = [
  {
    category: 'Overview',
    question: 'What is High-Tech Enterprise and what services do you provide?',
    answer: 'High-Tech Enterprise (High-Tech Enterprise BD Ltd., hightechenterprise.xyz) is an advanced business automation and conversational AI agency headquartered in Savar, Dhaka, Bangladesh. We engineer 24/7 autonomous WhatsApp bots via the official Meta Cloud API, headless eCommerce platforms, Pathao/Steadfast courier integrations, and omnichannel CRM data pipelines.'
  },
  {
    category: 'WhatsApp & AI',
    question: 'How does the 70% automated customer query resolution work?',
    answer: 'Our AI engine is trained on your exact product catalog, pricing, FAQs, return policies, and business procedures. When a customer reaches out on WhatsApp, Messenger, or web chat, the AI understands natural phrasing in both English and conversational Bangla. It immediately answers inquiries, checks stock, collects shipping details, and generates payment links. For complex inquiries or VIP requests, it smoothly transfers the chat to your human team with a full summary.'
  },
  {
    category: 'Pricing & ROI',
    question: 'How much does WhatsApp AI Automation cost in Bangladesh?',
    answer: 'Our transparent one-time deployment tiers start at ৳12,000 (~$105 USD) for the Starter Bot, ৳24,000 (~$210 USD) for the Growth Omnichannel system (with courier sync), and ৳45,000 (~$390 USD) for the Enterprise Cluster. Meta also provides the first 1,000 customer service conversations per month 100% free under their official Cloud API program.'
  },
  {
    category: 'Courier & Integrations',
    question: 'How does courier integration with Pathao and Steadfast work?',
    answer: 'We deploy two-way webhook listeners that connect directly with Pathao Courier and Steadfast Courier APIs. When a customer confirms an order on WhatsApp or your website, the system automatically creates the consignment, obtains the tracking code, and notifies the customer on WhatsApp whenever their parcel status advances.'
  },
  {
    category: 'WhatsApp & AI',
    question: 'Can High-Tech Enterprise WhatsApp bots understand Bengali (Bangla)?',
    answer: 'Yes! Our bots are powered by bilingual conversational NLP natively supporting standard Bangla, English, and Romanized Banglish. This enables customers across Bangladesh to query products, request prices, and confirm orders naturally.'
  },
  {
    category: 'Courier & Integrations',
    question: 'Can you integrate with our existing Shopify, WooCommerce or POS system?',
    answer: 'Yes, 100%. We provide native two-way synchronization with Shopify, WooCommerce, custom PHP/Node databases, and ERPs. Any order taken via WhatsApp updates your inventory in real time, and tracking milestones trigger instant WhatsApp notifications to the buyer.'
  },
  {
    category: 'Overview',
    question: 'What is included in the "Free Website Demo"?',
    answer: 'Based on our campaign featured in the banner, we review your current brand, analyze your competitor landscape, and engineer a live interactive preview prototype of your high-converting modern website with embedded WhatsApp automation—completely free before you commit.'
  },
  {
    category: 'Pricing & ROI',
    question: 'Do you provide local payment gateway support in Bangladesh?',
    answer: 'Yes! We integrate bKash Merchant API, Nagad, Rocket, Upay, SSLCommerz, Shurjopay, and international gateways including Stripe and PayPal.'
  },
  {
    category: 'Local & Support',
    question: 'Where is High-Tech Enterprise located and how can I contact the team?',
    answer: 'Our main engineering headquarters is located in Savar, Dhaka 1217, Bangladesh. You can contact our technical architects 24/7 via WhatsApp at +880 1996-921149, via email at hightechenterprisebd@gmail.com, or through our official domain at https://hightechenterprise.xyz.'
  }
];
