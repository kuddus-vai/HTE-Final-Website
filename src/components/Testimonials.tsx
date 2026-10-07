import React from 'react';
import { TESTIMONIALS_DATA, COMPANY_INFO } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';
import { Star, CheckCircle, Quote, ThumbsUp, Sparkles, MessageCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { language } = useLanguage();

  const bnTestimonials = [
    {
      id: 'rev-1',
      clientName: 'তানভীর হোসেন',
      role: 'ম্যানেজিং ডিরেক্টর',
      company: 'আরবান থ্রেডস লাইফস্টাইল',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      reviewText: 'হাই-টেক এন্টারপ্রাইজ আমাদের কাস্টমার সাপোর্টে সম্পূর্ণ পরিবর্তন এনে দিয়েছে। ক্যাম্পেইনের সময় প্রতিদিন ৪০০+ মেসেজ আসত আমাদের হোয়াটসঅ্যাপে। তাদের অটোমেটেড সিস্টেম এখন ৭৫% অর্ডার নিজেই কনফার্ম করে, ঠিকানা ভেরিফাই করে এবং ওয়্যারহাউসে পাঠায়। ১০০% রেকমেন্ডেড!',
      verified: true,
      businessType: 'ই-কমার্স ও ফ্যাশন'
    },
    {
      id: 'rev-2',
      clientName: 'মাহমুদুর রহমান',
      role: 'প্রতিষ্ঠাতা ও সিইও',
      company: 'নেক্সোরা লজিস্টিকস ও এক্সপ্রেস',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      reviewText: 'তারা শুধু একটি সাধারণ ওয়েবসাইট বানিয়ে দেয়নি, আমাদের পুরো ডেলিভারি অপারেশনের নার্ভাস সিস্টেম তৈরি করে দিয়েছে। হোয়াটসঅ্যাপে অটোমেটেড পার্সেল ট্র্যাকিং বট আমাদের কল সেন্টারের ৬০% চাপ কমিয়ে দিয়েছে। সাভার/ঢাকা টিমের কাজ অত্যন্ত প্রশংসনীয়।',
      verified: true,
      businessType: 'লজিস্টিকস ও সাপ্লাই চেইন'
    },
    {
      id: 'rev-3',
      clientName: 'ইঞ্জি. রফিকুল ইসলাম',
      role: 'ম্যানেজিং ডিরেক্টর',
      company: 'অপটিমাম পাওয়ার ইঞ্জিনিয়ারিং লি.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      reviewText: 'হাই-টেক এন্টারপ্রাইজ আমাদের অপটিমাম পাওয়ারের করপোরেট ইঞ্জিনিয়ারিং প্ল্যাটফর্ম নিখুঁতভাবে তৈরি করে দিয়েছে। হেভি ট্রান্সফরমার আরএফকিউ এবং হোয়াটসঅ্যাপ ইঞ্জিনিয়ারিং কোয়েরি প্রায় ৪ গুণ বৃদ্ধি পেয়েছে। অসাধারণ ইঞ্জিনিয়ারিং পার্টনার।',
      verified: true,
      businessType: 'হেভি পাওয়ার ও সাবস্টেশন'
    },
    {
      id: 'rev-4',
      clientName: 'তানভীর আহমেদ',
      role: 'প্রতিষ্ঠাতা ও ব্র্যান্ড ডিরেক্টর',
      company: 'আরবান বিস্ট বিডি',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      reviewText: 'ShopFlow™ নিশ্চিতভাবেই বাংলাদেশের সবচেয়ে দ্রুতগতির আধুনিক ই-কমার্স প্ল্যাটফর্ম। আমাদের মোবাইল কনভার্সন রেট ৩৪% বেড়েছে এবং ১-ট্যাপ হোয়াটসঅ্যাপ চেকআউট ও সরাসরি কুরিয়ার সিঙ্কের কারণে সারা বাংলাদেশে পার্সেল ডেলিভারি একদম সহজ হয়ে গেছে।',
      verified: true,
      businessType: 'ফ্যাশন ও ক্লোদিং ব্র্যান্ড'
    }
  ];

  const items = language === 'bn' ? bnTestimonials : TESTIMONIALS_DATA;

  return (
    <section id="testimonials" className="py-24 bg-[#080B12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with 100% recommend badge */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/40 border border-amber-500/30 text-xs font-semibold text-amber-400 mb-4">
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>{language === 'bn' ? 'অফিসিয়াল ফেসবুক ভেরিফায়েড রেটিং' : 'Official Facebook Verified Rating'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit',sans-serif]">
            {language === 'bn' ? (
              <><span className="text-[#FF7A00]">১০০% উদ্যোক্তাদের</span> দ্বারা প্রশংসিত ও সুপারিশকৃত</>
            ) : (
              <><span className="text-[#FF7A00]">100% Recommend</span> by Business Leaders</>
            )}
          </h2>
          
          <div className="flex items-center justify-center gap-3 mt-4 text-sm text-slate-300">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-white">{language === 'bn' ? '৫.০ / ৫.০' : '5.0 / 5.0'}</span>
            <span className="text-slate-500">•</span>
            <span>{language === 'bn' ? '১২+ ভেরিফায়েড ক্লায়েন্ট রিভিউ' : '12+ Verified Client Reviews'}</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">{language === 'bn' ? '৩,৪০০+ উদ্যোক্তা কমিউনিটি' : '3.4K+ Community'}</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {items.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl bg-[#0E131F] border border-white/10 hover:border-[#FF6B00]/40 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-[#FF8A33] bg-[#FF6B00]/10 px-2.5 py-0.5 rounded-full">
                    {t.businessType}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic mb-6">
                  "{t.reviewText}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.clientName}
                    className="w-10 h-10 rounded-full object-cover border border-white/15"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>{t.clientName}</span>
                      {t.verified && (
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      )}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-2 py-0.5 rounded">
                  {language === 'bn' ? 'ভেরিফায়েড ক্লায়েন্ট' : 'Verified Client'}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Facebook Page Social Proof Bar */}
        <div className="mt-12 text-center">
          <a
            href={COMPANY_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2.5 rounded-full transition-colors"
          >
            <span>{language === 'bn' ? 'ফেসবুকে আমাদের সকল রিভিউ দেখুন (@HighTechEnterprise48)' : 'View all reviews on Facebook (@HighTechEnterprise48)'}</span>
            <MessageCircle className="w-3.5 h-3.5 text-blue-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
