import React from 'react';
import { PageId } from '../types';
import { ArrowRight, Check, Bot, Workflow, Database, Search, DraftingCompass, Rocket, MessageCircle, ShieldCheck } from 'lucide-react';

interface AutomationPageProps {
  onNavigate: (page: PageId) => void;
}

const OFFERS = [
  {
    icon: Workflow,
    name: 'n8n Workflow Automation',
    blurb: 'Custom n8n workflows that connect your tools and kill repetitive work.',
    features: ['Workflow audit & mapping', 'Custom n8n builds', 'API + webhook integrations', 'Error handling & monitoring'],
  },
  {
    icon: Bot,
    name: 'AI Agent Deployment',
    blurb: 'AI agents that answer, qualify, and act — inside your existing stack.',
    features: ['Support & sales agents', 'WhatsApp + web deployment', 'Human handoff rules', 'You approve every output'],
  },
  {
    icon: Database,
    name: 'CRM Sync & Pipelines',
    blurb: 'Your CRM, order flow, and ops finally talking to each other.',
    features: ['GoHighLevel + CRM setup', 'Courier webhook sync', 'Lead pipeline automation', 'Reporting dashboards'],
  },
];

const STEPS = [
  { icon: Search, title: 'Audit', text: 'We deconstruct your operations and find the manual bottlenecks bleeding revenue.' },
  { icon: DraftingCompass, title: 'Architect', text: 'A custom system design — no templates. Your tools, your workflow, your rules.' },
  { icon: Rocket, title: 'Automate', text: 'We build and deploy. You review every output before anything goes live.' },
];

const FAQS = [
  { q: 'How do we start?', a: 'With a free automation audit: a 30-minute call where we map your biggest time leaks. You keep the plan even if we don\'t work together.' },
  { q: 'What does it cost?', a: 'Every business is different, so automation is scoped after the audit — fixed quote, no hourly billing. Simple workflows start in the low four figures.' },
  { q: 'Do I stay in control?', a: 'Yes. Approval gates are built in: nothing customer-facing goes out without your review. No black-box automation.' },
  { q: 'What tools do you work with?', a: 'n8n, OpenAI/Claude APIs, GoHighLevel, WhatsApp Cloud API, Pathao/Steadfast webhooks, and most CRMs via API.' },
];

export const AutomationPage: React.FC<AutomationPageProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF6B00]/40 bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-semibold mb-6">
          <Bot className="w-4 h-4" /> n8n workflows · AI agents · CRM sync
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          Put your business<br />on <span className="text-[#FF6B00]">autopilot.</span>
        </h1>
        <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
          Custom automation systems for agencies, SaaS founders, and service businesses —
          built on n8n, with approval gates so you stay in control.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 rounded-xl bg-[#FF6B00] hover:bg-[#e65f00] text-white font-bold transition flex items-center justify-center gap-2"
          >
            Get a free automation audit <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => onNavigate('websites')}
            className="px-8 py-3.5 rounded-xl border border-slate-700 hover:border-[#FF6B00] font-bold transition"
          >
            Need a website first?
          </button>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
          <ShieldCheck className="w-4 h-4 text-[#FF6B00]" />
          <span>Free audit — you keep the scoped plan either way</span>
        </div>
      </section>

      {/* Offers */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center">What we automate</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {OFFERS.map((o) => (
            <div key={o.name} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[#FF6B00]/15 flex items-center justify-center mb-5">
                <o.icon className="w-6 h-6 text-[#FF6B00]" />
              </div>
              <h3 className="text-xl font-bold">{o.name}</h3>
              <p className="mt-2 text-slate-400 text-sm">{o.blurb}</p>
              <ul className="mt-6 space-y-3 flex-1">
                {o.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-[#FF6B00] mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => onNavigate('contact')}
                className="mt-8 w-full py-3 rounded-xl border border-slate-700 hover:border-[#FF6B00] font-bold transition"
              >
                Discuss my workflow
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Process — the Antigravity Protocol */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center">The Antigravity Protocol</h2>
        <p className="text-slate-400 text-center mt-3 max-w-xl mx-auto">Our build method: audit before architecture, architecture before automation.</p>
        <div className="mt-10 grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
          <h2 className="text-3xl sm:text-4xl font-extrabold">Find out what automation<br />is worth to you. Free.</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">30 minutes, zero pitch. You leave with a scoped automation plan — yours to keep.</p>
          <button
            onClick={() => onNavigate('contact')}
            className="mt-8 px-8 py-3.5 rounded-xl bg-[#FF6B00] hover:bg-[#e65f00] text-white font-bold transition inline-flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" /> Book my free audit
          </button>
        </div>
      </section>
    </div>
  );
};
