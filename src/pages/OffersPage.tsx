import React from 'react';
import { PageId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import {
  ArrowRight,
  Check,
  Tag,
  Globe,
  Video,
  Bot,
  Workflow,
  MessageCircle,
  Database,
  Search,
  ExternalLink,
} from 'lucide-react';

interface OffersPageProps {
  onNavigate: (page: PageId) => void;
}

const FIVERR_WEBSITE_GIG =
  'https://www.fiverr.com/avimistry4800/build-a-fast-responsive-website-with-react-or-wordpress';
const FIVERR_UGC_GIG =
  'https://www.fiverr.com/avimistry4800/create-ai-ugc-video-ads-with-multiple-hooks-for-tiktok-and-meta';

const AUTOMATION_ICONS = [Workflow, MessageCircle, Database, Bot, Search];

export const OffersPage: React.FC<OffersPageProps> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].offers;

  const webPlans = [t.landing, t.website];
  const ugcPlans = [t.ugcSingle, t.ugcPack, t.ugcSignature];

  return (
    <div>
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF6B00]/40 bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-semibold mb-6">
          <Tag className="w-4 h-4" /> {t.badge}
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          {t.titleA}
          <br />
          <span className="text-[#FF6B00]">{t.titleB}</span>
        </h1>
        <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">{t.subtitle}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 rounded-xl bg-[#FF6B00] hover:bg-[#e65f00] text-white font-bold transition flex items-center justify-center gap-2"
          >
            {t.quoteCta} <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => onNavigate('ai-ugc')}
            className="px-8 py-3.5 rounded-xl border border-slate-700 hover:border-[#FF6B00] font-bold transition"
          >
            {t.ugcCta}
          </button>
        </div>
      </section>

      {/* Websites & landing pages */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <div className="flex items-center justify-center gap-2 text-[#FF6B00]">
          <Globe className="w-6 h-6" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-slate-100">{t.webHeading}</h2>
        </div>
        <p className="text-slate-400 text-center mt-3 max-w-xl mx-auto">{t.webSub}</p>
        <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {webPlans.map((p) => {
            const featured = p.name === t.website.name;
            return (
              <div
                key={p.name}
                className={`rounded-2xl p-8 border ${featured ? 'border-[#FF6B00] bg-[#FF6B00]/5' : 'border-slate-800 bg-slate-900/40'} flex flex-col`}
              >
                {featured && (
                  <span className="self-start px-3 py-1 rounded-full bg-[#FF6B00] text-white text-xs font-bold mb-4">
                    {t.popularLabel}
                  </span>
                )}
                <h3 className="text-xl font-bold">{p.name}</h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-slate-500 text-sm">{p.unit}</span>
                  <span className="text-4xl font-extrabold">{p.price}</span>
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
                  className={`mt-8 w-full py-3 rounded-xl font-bold transition ${featured ? 'bg-[#FF6B00] hover:bg-[#e65f00] text-white' : 'border border-slate-700 hover:border-[#FF6B00]'}`}
                >
                  {p.cta}
                </button>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => onNavigate('websites')}
            className="inline-flex items-center gap-2 font-bold text-[#FFA149] hover:text-white transition"
          >
            {t.webMoreCta} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* AI UGC video ads */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <div className="flex items-center justify-center gap-2 text-[#FF6B00]">
          <Video className="w-6 h-6" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-slate-100">{t.ugcHeading}</h2>
        </div>
        <p className="text-slate-400 text-center mt-3 max-w-xl mx-auto">{t.ugcSub}</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {ugcPlans.map((p) => {
            const featured = p.name === t.ugcPack.name;
            return (
              <div
                key={p.name}
                className={`rounded-2xl p-8 border ${featured ? 'border-[#FF6B00] bg-[#FF6B00]/5' : 'border-slate-800 bg-slate-900/40'} flex flex-col`}
              >
                {featured && (
                  <span className="self-start px-3 py-1 rounded-full bg-[#FF6B00] text-white text-xs font-bold mb-4">
                    {t.popularLabel}
                  </span>
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
                  className={`mt-8 w-full py-3 rounded-xl font-bold transition ${featured ? 'bg-[#FF6B00] hover:bg-[#e65f00] text-white' : 'border border-slate-700 hover:border-[#FF6B00]'}`}
                >
                  {p.cta}
                </button>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => onNavigate('ai-ugc')}
            className="inline-flex items-center gap-2 font-bold text-[#FFA149] hover:text-white transition"
          >
            {t.ugcMoreCta} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Fiverr ordering route */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center">{t.fiverrHeading}</h2>
        <p className="text-slate-400 text-center mt-3 max-w-xl mx-auto">{t.fiverrSub}</p>
        <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 flex flex-col">
            <h3 className="text-xl font-bold">{t.fiverrWebName}</h3>
            <p className="mt-3 text-slate-400 text-sm flex-1">{t.fiverrWebLines}</p>
            <a
              href={FIVERR_WEBSITE_GIG}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full py-3 rounded-xl font-bold transition border border-slate-700 hover:border-[#FF6B00] inline-flex items-center justify-center gap-2"
            >
              {t.fiverrWebCta} <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 flex flex-col">
            <h3 className="text-xl font-bold">{t.fiverrUgcName}</h3>
            <p className="mt-3 text-slate-400 text-sm flex-1">{t.fiverrUgcLines}</p>
            <a
              href={FIVERR_UGC_GIG}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full py-3 rounded-xl font-bold transition border border-slate-700 hover:border-[#FF6B00] inline-flex items-center justify-center gap-2"
            >
              {t.fiverrUgcCta} <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Automation — free audit, no public prices */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <div className="flex items-center justify-center gap-2 text-[#FF6B00]">
          <Bot className="w-6 h-6" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-slate-100">{t.automationHeading}</h2>
        </div>
        <p className="text-slate-400 text-center mt-3 max-w-xl mx-auto">{t.automationSub}</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.automationItems.map((item, i) => {
            const Icon = AUTOMATION_ICONS[i % AUTOMATION_ICONS.length];
            return (
              <div key={item.name} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 flex flex-col">
                <div className="w-11 h-11 rounded-xl bg-[#FF6B00]/15 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#FF6B00]" />
                </div>
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-slate-400 text-sm mt-2">{item.blurb}</p>
                <ul className="mt-4 space-y-2 flex-1">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                      <Check className="w-4 h-4 text-[#FF6B00] mt-0.5 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 rounded-xl bg-[#FF6B00] hover:bg-[#e65f00] text-white font-bold transition inline-flex items-center gap-2"
          >
            {t.auditCta} <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Antigravity Protocol */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center">{t.protocolHeading}</h2>
        <p className="text-slate-400 text-center mt-3">{t.protocolSub}</p>
        <div className="mt-10 grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {t.protocolSteps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center">
              <div className="text-xs font-bold text-slate-500">STEP {i + 1}</div>
              <h3 className="text-lg font-bold mt-1 text-[#FFA149]">{s.title}</h3>
              <p className="text-slate-400 text-sm mt-2">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto py-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10">{t.faqHeading}</h2>
        <div className="space-y-4">
          {t.faqs.map((f) => (
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
          <h2 className="text-3xl sm:text-4xl font-extrabold">{t.finalHeading}</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">{t.finalSub}</p>
          <button
            onClick={() => onNavigate('contact')}
            className="mt-8 px-8 py-3.5 rounded-xl bg-[#FF6B00] hover:bg-[#e65f00] text-white font-bold transition inline-flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" /> {t.finalCta}
          </button>
        </div>
      </section>
    </div>
  );
};
