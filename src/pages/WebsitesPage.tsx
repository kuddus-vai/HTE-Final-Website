import React from 'react';
import { PageId } from '../types';
import { ArrowRight, Check, Globe, Zap, Search, PenTool, Rocket, Star, MessageCircle } from 'lucide-react';

interface WebsitesPageProps {
  onNavigate: (page: PageId) => void;
}

const PLANS = [
  {
    name: 'Landing Page',
    price: '$300',
    unit: 'from',
    blurb: 'A single conversion-focused page built to turn visitors into buyers.',
    features: ['Conversion-first copy structure', 'Mobile-first responsive design', 'Sub-second load times', 'Contact / checkout CTA wiring', 'Basic SEO + analytics setup'],
    cta: 'Start my page',
  },
  {
    name: 'Business Website',
    price: '$700',
    unit: 'from',
    blurb: 'A full multi-page website engineered to sell around the clock.',
    features: ['Everything in Landing Page', 'Up to 8 pages', 'Blog / CMS ready', 'Advanced SEO setup', 'Speed + Core Web Vitals tuned'],
    cta: 'Build my website',
    featured: true,
  },
  {
    name: 'E-commerce Build',
    price: 'Custom',
    unit: 'quote',
    blurb: 'A complete online store — products, payments, and order flow.',
    features: ['Everything in Business Website', 'Product catalog + cart', 'Payment gateway integration', 'Order notification automation', 'Post-launch support'],
    cta: 'Get a quote',
  },
];

const STEPS = [
  { icon: Search, title: 'Audit', text: 'We study your offer, your buyers, and what your current page is leaking.' },
  { icon: PenTool, title: 'Design', text: 'Wireframe to polished design — every section earns its place by converting.' },
  { icon: Zap, title: 'Build', text: 'Coded for speed: sub-second loads, responsive on every device.' },
  { icon: Rocket, title: 'Launch', text: 'Deployed, measured, and tuned. You get the keys and the analytics.' },
];

const WORK = [
  { name: 'Blessed Boutique', kind: 'Fashion e-commerce website' },
  { name: 'Xorell Fashion', kind: 'Fashion brand website' },
  { name: 'Janata Bastralay', kind: 'Retail business website' },
];

const FAQS = [
  { q: 'How long does a website take?', a: 'A landing page typically ships in 5–7 days. A full business website takes 2–3 weeks depending on content readiness.' },
  { q: 'What do you need from me to start?', a: 'Your offer details, any brand assets you have (logo, photos), and 50% deposit. We handle copy structure, design, and build.' },
  { q: 'Will my site rank on Google?', a: 'Every build ships with technical SEO basics: semantic HTML, meta tags, sitemap, and fast Core Web Vitals. Content SEO is a separate engagement.' },
  { q: 'Do you write the copy?', a: 'We structure and sharpen conversion copy from your raw material. Full copywriting from scratch is available as an add-on.' },
];

export const WebsitesPage: React.FC<WebsitesPageProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF6B00]/40 bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-semibold mb-6">
          <Globe className="w-4 h-4" /> Websites for DTC & e-commerce brands
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Websites engineered<br />to <span className="text-[#FF6B00]">sell.</span>
        </h1>
        <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
          High-converting landing pages and business websites for brands that need
          more than pretty — pages built to turn traffic into revenue.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 rounded-xl bg-[#FF6B00] hover:bg-[#e65f00] text-white font-bold transition flex items-center justify-center gap-2"
          >
            Get a free quote <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => onNavigate('portfolio')}
            className="px-8 py-3.5 rounded-xl border border-slate-700 hover:border-[#FF6B00] font-bold transition"
          >
            See recent work
          </button>
        </div>
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-400">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#FF6B00] text-[#FF6B00]" />
            ))}
          </div>
          <span>5.0 rating across 12 client reviews</span>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center">Simple, public pricing</h2>
        <p className="text-slate-400 text-center mt-3 max-w-xl mx-auto">No discovery-call pricing games. 50% deposit to start, 50% on launch.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 border ${p.featured ? 'border-[#FF6B00] bg-[#FF6B00]/5' : 'border-slate-800 bg-slate-900/40'} flex flex-col`}
            >
              {p.featured && (
                <span className="self-start px-3 py-1 rounded-full bg-[#FF6B00] text-white text-xs font-bold mb-4">MOST POPULAR</span>
              )}
              <h3 className="text-xl font-bold">{p.name}</h3>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold">{p.price}</span>
                <span className="text-slate-500 text-sm">{p.unit}</span>
              </div>
              <p className="mt-3 text-slate-400 text-sm">{p.blurb}</p>
              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-[#FF6B00] mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onNavigate('contact')}
                className={`mt-8 w-full py-3 rounded-xl font-bold transition ${p.featured ? 'bg-[#FF6B00] hover:bg-[#e65f00] text-white' : 'border border-slate-700 hover:border-[#FF6B00]'}`}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center">How it works</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <div className="w-11 h-11 rounded-xl bg-[#FF6B00]/15 flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5 text-[#FF6B00]" />
              </div>
              <div className="text-xs font-bold text-slate-500">STEP {i + 1}</div>
              <h3 className="text-lg font-bold mt-1">{s.title}</h3>
              <p className="text-slate-400 text-sm mt-2">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent work */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center">Recent client builds</h2>
        <p className="text-slate-400 text-center mt-3">Real projects, real businesses.</p>
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {WORK.map((w) => (
            <div key={w.name} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[#FF6B00]/30 to-[#FF6B00]/5 border border-[#FF6B00]/30 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-[#FF6B00]" />
              </div>
              <h3 className="text-lg font-bold">{w.name}</h3>
              <p className="text-slate-400 text-sm mt-1">{w.kind}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto py-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10">Questions, answered</h2>
        <div className="space-y-4">
          {FAQS.map((f) => (
            <details key={f.q} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 group">
              <summary className="font-bold cursor-pointer list-none flex justify-between items-center">
                {f.q}
                <span className="text-[#FF6B00] text-xl group-open:rotate-45 transition">+</span>
              </summary>
              <p className="text-slate-400 text-sm mt-3">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 pb-24 text-center">
        <div className="rounded-3xl border border-[#FF6B00]/30 bg-gradient-to-b from-[#FF6B00]/10 to-transparent p-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Your competitors' sites are prettier.<br />Yours will sell more.</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">Tell us about your project — we reply with a fixed quote, not a sales call.</p>
          <button
            onClick={() => onNavigate('contact')}
            className="mt-8 px-8 py-3.5 rounded-xl bg-[#FF6B00] hover:bg-[#e65f00] text-white font-bold transition inline-flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" /> Get my free quote
          </button>
        </div>
      </section>
    </div>
  );
};
