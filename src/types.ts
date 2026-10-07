export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  metrics: string;
  iconName: string;
  category: 'automation' | 'web' | 'crm' | 'security';
}

export interface ProductItem {
  id: string;
  name: string;
  badge: string;
  headline: string;
  description: string;
  highlights: string[];
  integrations: string[];
  previewType: 'whatsapp' | 'ecommerce' | 'pos' | 'workflow';
  ctaText: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceBDT: string;
  priceUSD: string;
  period: string;
  popular?: boolean;
  features: string[];
  notIncluded?: string[];
  ctaLabel: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  reviewText: string;
  verified: boolean;
  businessType: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  options?: string[];
  dataPill?: string;
}

export interface OfficeLocation {
  city: string;
  country: string;
  isHQ?: boolean;
  address: string;
  status: 'Operational' | 'Hub' | 'Liaison';
  timezone: string;
}

export type PageId = 'home' | 'services' | 'products' | 'demos' | 'portfolio' | 'pricing' | 'about' | 'contact';

export interface LiveDemoItem {
  id: string;
  title: string;
  category: 'whatsapp' | 'ecommerce' | 'saas' | 'pos' | 'corporate' | 'side-projects' | 'websites' | 'intelligence' | 'software';
  badge: string;
  clientName: string;
  industry: string;
  summary: string;
  metrics: string;
  tags: string[];
  liveDemoUrl: string; // The user will provide real live demo URLs here later
  hasLiveDemo: boolean;
  previewType: 'interactive-whatsapp' | 'interactive-store' | 'interactive-pos' | 'interactive-crm' | 'iframe';
  previewImageUrl?: string;
  caseStudyHighlights: string[];
}

export interface SideProjectItem {
  id: string;
  name: string;
  badge: string;
  url: string;
  domain: string;
  status: 'Operational' | 'Beta' | 'Active';
  uptime: string;
  description: string;
  longDescription: string;
  features: string[];
  techStack: string[];
  category: string;
}
