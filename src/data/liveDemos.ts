import { LiveDemoItem } from '../types';

/**
 * LIVE DEMO DATA REGISTRY
 * -------------------------------------------------------------
 * All live demo URLs are centralized here. 
 * The client can supply or update any of the `liveDemoUrl` fields 
 * when their live URLs are ready.
 */
export const LIVE_DEMOS_DATA: LiveDemoItem[] = [
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
    liveDemoUrl: 'https://demo.flowpulse.hightechenterprise.xyz', // Replace with your live demo URL when ready
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
    id: 'demo-shopflow-ecommerce',
    title: 'ShopFlow™ Headless High-Conversion Store',
    category: 'ecommerce',
    badge: 'High-Performance Web',
    clientName: 'ShopFlow Core',
    industry: 'Retail & eCommerce',
    summary: 'Ultra-fast Next.js eCommerce storefront with sub-second page loads, 1-tap WhatsApp checkout, and instant courier API synchronization.',
    metrics: '99 Google Speed Score • +28% checkout completion',
    tags: ['Next.js 15', 'Tailwind CSS', 'Pathao Courier API', 'Steadfast Sync', 'bKash API'],
    liveDemoUrl: 'https://demo.shopflow.hightechenterprise.xyz', // Replace with your live demo URL when ready
    hasLiveDemo: true,
    previewType: 'interactive-store',
    previewImageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    caseStudyHighlights: [
      'Integrated Pathao Courier and Steadfast booking in 1 click',
      'Seamless abandoned checkout recovery triggers on customer WhatsApp',
      'Ultra-optimized mobile navigation designed specifically for Bangladesh shoppers'
    ]
  },
  {
    id: 'demo-smartpos-cloud',
    title: 'Smart POS Cloud™ Retail Point of Sale',
    category: 'pos',
    badge: 'Offline-First POS',
    clientName: 'Smart POS Engine',
    industry: 'Multi-Branch Retail',
    summary: 'Cloud-synced point of sale system with offline capability, barcode scanner support, thermal receipt printing, and WhatsApp digital billing.',
    metrics: '100% offline uptime • <0.1s barcode scan latency',
    tags: ['Offline-First PWA', 'Cloud Firestore', 'Thermal Printing', 'Multi-Warehouse'],
    liveDemoUrl: 'https://demo.smartpos.hightechenterprise.xyz', // Replace with your live demo URL when ready
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
    category: 'saas',
    badge: 'Autonomous Workflows',
    clientName: 'WorkflowAI Core',
    industry: 'Enterprise Automation',
    summary: 'Automated morning executive briefings, invoice data extraction, CRM status synchronization, and multi-channel team notifications.',
    metrics: '18.5 hours saved / week per manager',
    tags: ['n8n / Zapier', 'CRM Bi-Directional', 'Document OCR', 'Telegram/WhatsApp'],
    liveDemoUrl: 'https://demo.workflowai.hightechenterprise.xyz', // Replace with your live demo URL when ready
    hasLiveDemo: true,
    previewType: 'interactive-crm',
    previewImageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    caseStudyHighlights: [
      'Morning briefing auto-dispatched to WhatsApp with previous day sales and pending logistics',
      'Automatic invoice PDF extraction directly populated into accounting spreadsheets',
      'Zero-code webhook management with automated retry queues'
    ]
  },
  {
    id: 'demo-urban-threads',
    title: 'Urban Threads Lifestyle Brand Portal',
    category: 'ecommerce',
    badge: 'Fashion & Apparel',
    clientName: 'Urban Threads Bangladesh',
    industry: 'Fashion Lifestyle',
    summary: 'Custom lifestyle fashion web application featuring real-time size availability, automated address verification, and delivery tracking.',
    metrics: '+310% mobile conversions • 400+ orders/day handled',
    tags: ['Custom Next.js', 'Meta Pixel', 'bKash Merchant', 'Steadfast Courier API'],
    liveDemoUrl: 'https://demo.urbanthreads.hightechenterprise.xyz', // Replace with your live demo URL when ready
    hasLiveDemo: true,
    previewType: 'interactive-store',
    previewImageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80',
    caseStudyHighlights: [
      'Engineered for viral Eid campaign spikes without downtime',
      'Direct order confirmation via automated WhatsApp OTP',
      'Customer receives courier tracking URL inside WhatsApp'
    ]
  },
  {
    id: 'demo-nexora-logistics',
    title: 'Nexora Logistics Parcel Tracking Bot',
    category: 'whatsapp',
    badge: 'Supply Chain & Logistics',
    clientName: 'Nexora Express',
    industry: 'Logistics',
    summary: 'Automated conversational parcel tracking engine. Receives consignment numbers and provides live geo-status, rider contacts, and delivery rescheduling.',
    metrics: '60% reduction in call center query volume',
    tags: ['WhatsApp Cloud API', 'GPS Geolocation', 'SMS Fallback', 'Hub Dispatch'],
    liveDemoUrl: 'https://demo.nexora.hightechenterprise.xyz', // Replace with your live demo URL when ready
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
    id: 'demo-lumiere-beauty',
    title: 'Lumiere Beauty Labs WhatsApp Checkout',
    category: 'ecommerce',
    badge: 'Cosmetics & Retail',
    clientName: 'Lumiere Beauty',
    industry: 'Health & Beauty',
    summary: 'Full cosmetic product discovery funnel with shade matching AI assistant and instant WhatsApp abandoned cart recovery automation.',
    metrics: '৳ 320,000+ recovered abandoned cart sales in 12 days',
    tags: ['AI Product Matching', 'WhatsApp Recovery', 'SSLCommerz', 'Pathao API'],
    liveDemoUrl: 'https://demo.lumiere.hightechenterprise.xyz', // Replace with your live demo URL when ready
    hasLiveDemo: true,
    previewType: 'interactive-store',
    previewImageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80',
    caseStudyHighlights: [
      'Interactive skin tone and shade selector guide',
      'Automated abandoned checkout ping with 10% coupon code via WhatsApp within 15 mins',
      'Direct sync with Dhaka warehouse stock'
    ]
  },
  {
    id: 'demo-apex-realestate',
    title: 'Apex Real Estate Lead Qualification Engine',
    category: 'corporate',
    badge: 'Real Estate & Properties',
    clientName: 'Apex Properties',
    industry: 'Real Estate',
    summary: 'High-speed property showcase platform with automated mortgage calculators and instant WhatsApp lead qualification before booking site visits.',
    metrics: 'Page 1 Google SEO • 4.2x qualified buyer leads',
    tags: ['Next.js Architecture', 'Interactive Floor Plans', 'HubSpot CRM', 'Lead Scoring'],
    liveDemoUrl: 'https://demo.apexproperties.hightechenterprise.xyz', // Replace with your live demo URL when ready
    hasLiveDemo: true,
    previewType: 'iframe',
    previewImageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80',
    caseStudyHighlights: [
      'Sub-second 3D virtual tour asset loading',
      'Lead qualification bot collects buyer budget, preferred sector, and moves high-intent buyers to senior brokers',
      'Automatic Google Calendar site-visit scheduling'
    ]
  }
];
