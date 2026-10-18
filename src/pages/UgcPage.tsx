import React from 'react';
import { PageId } from '../types';
import { ArrowRight, Check, Video, Zap, Link2, Clapperboard, Rocket, Star, MessageCircle, BadgeDollarSign } from 'lucide-react';

interface UgcPageProps {
  onNavigate: (page: PageId) => void;
}

const PLANS = [
  {
    name: 'Single Spot',
    price: '$20',
    unit: '/ 20-sec video',
    blurb: 'Try one. If you love it, scale to the pack.',
    features: ['20-second creator-style video', '1 product, 1 hook angle', 'Vertical 9:16 format', '1 revision round', 'Delivery in 48 hours'],
    cta: 'Get my $20 video',
  },
  {
    name: '30-Video Pack',
    price: '$450',
    unit: '/ 30 videos ($15 each)',
    blurb: 'A month of ad creatives in one order.',
    features: ['30 × 20-second videos', 'Multiple hook angles', 'Vertical 9:16 format', '2 revision rounds', 'Priority delivery'],
    cta: 'Scale my creatives',
    featured: true,
  },
  {
    name: 'Long-Form Spot',
    price: '$55',
    unit: '/ 1-min video',
    blurb: 'Deeper storytelling for hero placements.',
    features: ['60-second video', 'Script + hook development', 'Vertical + square formats', '2 revision rounds', 'Delivery in 72 hours'],
    cta: 'Order the 1-min spot',
  },
];

const STEPS = [
  { icon: Link2, title: 'Send a link', text: 'You send your product link. No shoot, no shipping samples, no briefing calls.' },
  { icon: Clapperboard, title: 'We generate', text: 'Our AI video engine creates creator-style ads in your brand voice.' },
  { icon: Check, title: 'You approve', text: 'Review, request revisions, approve. You control every frame before it ships.' },
  { icon: Rocket, title: 'You launch', text: 'Drop the videos into Meta, TikTok, or wherever your buyers are.' },
];

const FAQS = [
  { q: 'Is the creator a real person?', a: 'No — the creator is 100% AI-generated: photorealistic, consistent, and available on demand. No scheduling, no usage rights negotiations, no per-post fees.' },
  { q: 'How is this different from hiring a UGC creator?', a: 'A human creator charges $150–$3,000 per video and takes 1–2 weeks. We deliver in 48 hours at $20/video, and you can test 30 hook angles for the price of 3 human videos.' },
  { q: 'What if I don\'t like the video?', a: 'Every order includes revision rounds. The $20 single is designed as a risk-free trial — love it or don\'t buy the pack.' },
  { q: 'What formats do I get?', a: 'Vertical 9:16 by default (Reels, TikTok, Shorts). Square 1:1 available on the long-form spot.' },
];

export const UgcPage: React.FC<UgcPageProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF6B00]/40 bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-semibold mb-6">
          <Video className="w-4 h-4" /> AI UGC video ads for DTC brands
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          This creator is 100% AI.<br />Your ad costs <span className="text-[#FF6B00]">$20.</span>
        </h1>
        <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
          Creator-style product videos made with AI. No shoot. No creator fees.
          No 2-week turnaround. A founder sends a product link — videos come back.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 rounded-xl bg-[#FF6B00] hover:bg-[#e65f00] text-white font-bold transition flex items-center justify-center gap-2"
          >
            Get my $20 video <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => onNavigate('websites')}
            className="px-8 py-3.5 rounded-xl border border-slate-700 hover:border-[#FF6B00] font-bold transition"
          >
            Pair it with a landing page
          </button>
        </div>
      </section>

      {/* Price disruption */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 sm:p-12">
          <div className="flex items-center gap-3 mb-8">
            <BadgeDollarSign className="w-6 h-6 text-[#FF6B00]" />
            <h2 className="text-2xl sm:text-3xl font-extrabold">The math your competitors hate</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-2xl border border-slate-800">
              <div className="text-3xl font-extrabold text-slate-500 line-through">$3,000</div>
              <div className="text-sm text-slate-400 mt-2">Human influencer<br />per video + 2-week wait</div>
            </div>
            <div className="p-6 rounded-2xl border border-slate-800">
              <div className="text-3xl font-extrabold text-slate-400">$160</div>
              <div className="text-sm text-slate-400 mt-2">Typical AI UGC agency<br />per video</div>
            </div>
            <div className="p-6 rounded-2xl border border-[#FF6B00] bg-[#FF6B00]/5">
              <div className="text-4xl font-extrabold text-[#FF6B00]">$20</div>
              <div className="text-sm text-slate-300 mt-2">High-Tech Enterprise<br />per video, 48-hour delivery</div>
            </div>
          </div>
          <p className="text-center text-slate-500 text-sm mt-6">Same scroll-stopping format. AI-native cost structure — not a quality cut.</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center">Pick your volume</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 border ${p.featured ? 'border-[#FF6B00] bg-[#FF6B00]/5' : 'border-slate-800 bg-slate-900/40'} flex flex-col`}
            >
              {p.featured && (
                <span className="self-start px-3 py-1 rounded-full bg-[#FF6B00] text-white text-xs font-bold mb-4">BEST VALUE</span>
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
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center">From link to launch in 48 hours</h2>
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

      {/* Social proof strip */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-8">
        <div className="flex items-center justify-center gap-3 text-slate-300">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#FF6B00] text-[#FF6B00]" />
            ))}
          </div>
          <span className="font-semibold">5.0 across 12 client reviews</span>
          <span className="text-slate-500">·</span>
          <span className="flex items-center gap-1"><Zap className="w-4 h-4 text-[#FF6B00]" /> 48-hour turnaround</span>
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
          <h2 className="text-3xl sm:text-4xl font-extrabold">One $20 video.<br />Zero risk.</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">Try a single spot. If you love it, scale to 30. If not, you're out twenty bucks.</p>
          <button
            onClick={() => onNavigate('contact')}
            className="mt-8 px-8 py-3.5 rounded-xl bg-[#FF6B00] hover:bg-[#e65f00] text-white font-bold transition inline-flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" /> Start my $20 video
          </button>
        </div>
      </section>
    </div>
  );
};
