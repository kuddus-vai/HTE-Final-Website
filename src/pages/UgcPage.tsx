import React from 'react';
import { PageId } from '../types';
import { ArrowRight, Check, Video, Link2, Clapperboard, Rocket, Star, MessageCircle, Sparkles, Mic, Layers, Timer } from 'lucide-react';

interface UgcPageProps {
  onNavigate: (page: PageId) => void;
}

const PLANS = [
  {
    name: 'Single Spot',
    price: '$20',
    unit: 'per 20-second video',
    blurb: 'A risk-free first taste. One product, one hook angle.',
    features: ['20-second creator-style video', 'Vertical 9:16 format', '1 revision round', 'Delivery in 48 hours'],
    cta: 'Try a single spot',
  },
  {
    name: 'Creative Pack',
    price: '$450',
    unit: '30 videos · $15 each',
    blurb: 'A full month of ad creatives, produced in days.',
    features: ['30 × 20-second videos', 'Multiple hook angles to test', 'Vertical 9:16 format', '2 revision rounds', 'Priority delivery'],
    cta: 'Scale my creatives',
    featured: true,
  },
  {
    name: 'Signature Spot',
    price: '$55',
    unit: 'per 60-second video',
    blurb: 'Longer storytelling for hero placements and landing pages.',
    features: ['60-second video', 'Script + hook development', 'Vertical + square formats', '2 revision rounds'],
    cta: 'Order the signature spot',
  },
];

const CRAFT = [
  { icon: Sparkles, title: 'Photoreal AI creators', text: 'Lifelike presenters matched to your brand — no casting, no scheduling, no usage-rights negotiations.' },
  { icon: Mic, title: 'Scripts in your voice', text: 'Hooks and scripts written for your product and your buyer, not generic ad-speak.' },
  { icon: Layers, title: 'Creative volume', text: 'Test 30 hook angles for the price of 3 human-shot videos. Volume is how ad accounts win.' },
  { icon: Timer, title: '48-hour turnaround', text: 'From product link to finished video in two days. Human creators take two weeks.' },
];

const STEPS = [
  { icon: Link2, title: 'Share your product', text: 'Send a product link. No shoot, no shipping samples, no briefing calls.' },
  { icon: Clapperboard, title: 'We craft the ads', text: 'Our AI video engine produces creator-style videos in your brand voice.' },
  { icon: Check, title: 'You approve', text: 'Review, request revisions, approve. Nothing ships without your sign-off.' },
  { icon: Rocket, title: 'Launch everywhere', text: 'Drop the videos into Meta, TikTok, Shorts — wherever your buyers scroll.' },
];

const USE_CASES = ['Product demos', 'Customer testimonials', 'Unboxing videos', 'Founder stories', 'Before / after', 'Offer announcements'];

const FAQS = [
  { q: 'Is the creator a real person?', a: 'No — a photorealistic AI presenter, consistent across every video and available on demand. That is exactly why there is no scheduling, no per-post fee, and no usage-rights expiry.' },
  { q: 'How does this compare to hiring a UGC creator?', a: 'A human creator typically charges $150–$3,000 per video and needs 1–2 weeks. Our engine delivers in 48 hours from $20, so you can test dozens of angles for the same budget.' },
  { q: 'What if the first video misses the mark?', a: 'Every order includes revision rounds, and the $20 single exists precisely as a low-risk trial — approve the style once, then scale with confidence.' },
  { q: 'Which platforms are the videos made for?', a: 'Vertical 9:16 by default — Reels, TikTok, YouTube Shorts. Square 1:1 is included with the Signature spot.' },
];

export const UgcPage: React.FC<UgcPageProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-10 pb-20 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-[#FF6B00]/12 blur-[130px] rounded-full pointer-events-none" />
        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF6B00]/40 bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-semibold mb-6">
              <Video className="w-4 h-4" /> AI UGC Video Ads
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08]">
              UGC ads that stop<br />the scroll.<br />
              <span className="bg-gradient-to-r from-[#FF6B00] to-[#FFB25E] bg-clip-text text-transparent">Crafted by AI.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-400 max-w-lg">
              Creator-style product videos for DTC brands — photorealistic presenters,
              scripts in your voice, delivered in 48 hours. From <span className="text-white font-semibold">$20 a video</span>.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-3.5 rounded-xl bg-[#FF6B00] hover:bg-[#e65f00] text-white font-bold transition flex items-center justify-center gap-2 shadow-lg shadow-[#FF6B00]/25"
              >
                Start with a $20 video <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate('websites')}
                className="px-8 py-3.5 rounded-xl border border-slate-700 hover:border-[#FF6B00] font-bold transition"
              >
                Pair it with a landing page
              </button>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-slate-400">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FF6B00] text-[#FF6B00]" />
                ))}
              </div>
              <span>5.0 across 12 client reviews</span>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-[270px] h-[560px] rounded-[2.5rem] border border-slate-700 bg-slate-900/80 p-3 shadow-2xl shadow-black/60">
              <div className="w-full h-full rounded-[2rem] bg-gradient-to-b from-[#1a1208] via-[#0d0a06] to-[#07090E] border border-slate-800 flex flex-col items-center justify-center gap-4 p-6 text-center overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#FF6B00]/20 blur-[80px] rounded-full" />
                <div className="w-16 h-16 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/40 flex items-center justify-center">
                  <Video className="w-7 h-7 text-[#FF6B00]" />
                </div>
                <p className="text-sm font-bold text-white relative">AI Creator</p>
                <p className="text-xs text-slate-400 relative">"This serum changed<br />my mornings…"</p>
                <div className="flex gap-1.5 relative">
                  <span className="w-8 h-1.5 rounded-full bg-[#FF6B00]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                </div>
                <p className="text-[11px] text-slate-500 relative mt-2">9:16 · Captions on · Brand voice</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craft */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center">Why it performs</h2>
        <p className="text-slate-400 text-center mt-3 max-w-xl mx-auto">The format buyers trust, produced at a speed and cost humans can't match.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CRAFT.map((c) => (
            <div key={c.title} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 hover:border-[#FF6B00]/40 transition">
              <div className="w-11 h-11 rounded-xl bg-[#FF6B00]/15 flex items-center justify-center mb-4">
                <c.icon className="w-5 h-5 text-[#FF6B00]" />
              </div>
              <h3 className="text-lg font-bold">{c.title}</h3>
              <p className="text-slate-400 text-sm mt-2">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-8">
        <div className="flex flex-wrap justify-center gap-3">
          {USE_CASES.map((u) => (
            <span key={u} className="px-5 py-2.5 rounded-full border border-slate-800 bg-slate-900/40 text-sm text-slate-300">
              {u}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center">Simple pricing, serious volume</h2>
        <p className="text-slate-400 text-center mt-3">Start with one. Scale when it converts.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 border ${p.featured ? 'border-[#FF6B00] bg-gradient-to-b from-[#FF6B00]/10 to-transparent' : 'border-slate-800 bg-slate-900/40'} flex flex-col`}
            >
              {p.featured && (
                <span className="self-start px-3 py-1 rounded-full bg-[#FF6B00] text-white text-xs font-bold mb-4">MOST BRANDS START HERE</span>
              )}
              <h3 className="text-xl font-bold">{p.name}</h3>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold">{p.price}</span>
              </div>
              <div className="text-slate-500 text-sm">{p.unit}</div>
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
                className={`mt-8 w-full py-3 rounded-xl font-bold transition ${p.featured ? 'bg-[#FF6B00] hover:bg-[#e65f00] text-white shadow-lg shadow-[#FF6B00]/25' : 'border border-slate-700 hover:border-[#FF6B00]'}`}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-500 text-sm mt-6">Every tier includes revision rounds. You approve every frame before it ships.</p>
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

      {/* FAQ */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto py-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10">Questions, answered</h2>
        <div className="space-y-4">
          {FAQS.map((f) => (
            <details key={f.q} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 group">
              <summary className="font-bold cursor-pointer list-none flex justify-between items-center gap-4">
                {f.q}
                <span className="text-[#FF6B00] text-xl group-open:rotate-45 transition shrink-0">+</span>
              </summary>
              <p className="text-slate-400 text-sm mt-3">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 pb-24">
        <div className="relative rounded-3xl border border-[#FF6B00]/30 bg-gradient-to-b from-[#FF6B00]/10 to-transparent p-12 text-center overflow-hidden">
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#FF6B00]/15 blur-[100px] rounded-full pointer-events-none" />
          <h2 className="relative text-3xl sm:text-4xl font-extrabold">Your next best-performing ad<br />could cost $20.</h2>
          <p className="relative text-slate-400 mt-4 max-w-xl mx-auto">One video, 48 hours, zero risk. See what your product looks like as a scroll-stopping ad.</p>
          <button
            onClick={() => onNavigate('contact')}
            className="relative mt-8 px-8 py-3.5 rounded-xl bg-[#FF6B00] hover:bg-[#e65f00] text-white font-bold transition inline-flex items-center gap-2 shadow-lg shadow-[#FF6B00]/25"
          >
            <MessageCircle className="w-5 h-5" /> Start my $20 video
          </button>
        </div>
      </section>
    </div>
  );
};
