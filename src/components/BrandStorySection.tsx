import React from 'react';
import { Milk, ShieldCheck, HeartHandshake, MapPin, Sparkles, Building2, CheckCircle2, Info } from 'lucide-react';
import { BRAND_FACTS } from '../data/products';

export const BrandStorySection: React.FC = () => {
  return (
    <section id="brand-story" className="py-20 bg-white border-y border-stone-200/60 relative overflow-hidden">
      
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl -translate-y-1/2 -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#C94318] text-xs font-semibold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Gujarat Dairy Heritage</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-anton uppercase text-[#1E1915] tracking-tight">
            Crafted With Real Milk. <br className="hidden sm:inline" />
            Made For Everyday Moments.
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            At Sun Relief Ice Cream, our philosophy is simple: authentic ice cream begins with honest dairy. Headquartered in Gujarat, the heart of India&apos;s celebrated milk belt, we blend fresh milk solids with rich ingredients to create moments of pure delight.
          </p>
        </div>

        {/* 4 Core Pillars of Brand Credibility */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <div className="bg-[#FFFDF9] rounded-2xl p-6 border border-stone-200 shadow-xs hover:border-orange-300 transition-colors space-y-3">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-[#E05326]">
              <Milk className="w-6 h-6 stroke-[2.2]" />
            </div>
            <h3 className="font-anton text-xl uppercase tracking-wide text-[#1E1915]">
              Real Milk Foundation
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Formulated with genuine milk cream and dairy solids, ensuring that thick, velvety mouthfeel and natural creaminess without greasy aftertastes.
            </p>
          </div>

          <div className="bg-[#FFFDF9] rounded-2xl p-6 border border-stone-200 shadow-xs hover:border-orange-300 transition-colors space-y-3">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-700">
              <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
            </div>
            <h3 className="font-anton text-xl uppercase tracking-wide text-[#1E1915]">
              Hygienic Modern Batching
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Manufactured in a food-grade environment adhering to strict temperature controls, sanitary pasteurization, and airtight sealing.
            </p>
          </div>

          <div className="bg-[#FFFDF9] rounded-2xl p-6 border border-stone-200 shadow-xs hover:border-orange-300 transition-colors space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700">
              <MapPin className="w-6 h-6 stroke-[2.2]" />
            </div>
            <h3 className="font-anton text-xl uppercase tracking-wide text-[#1E1915]">
              3-State Distribution Reach
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Supplying regional distributors across Gujarat, Maharashtra, and Rajasthan with cold-chain transportation logistics and reliable inventory replenishment.
            </p>
          </div>

          <div className="bg-[#FFFDF9] rounded-2xl p-6 border border-stone-200 shadow-xs hover:border-orange-300 transition-colors space-y-3">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700">
              <HeartHandshake className="w-6 h-6 stroke-[2.2]" />
            </div>
            <h3 className="font-anton text-xl uppercase tracking-wide text-[#1E1915]">
              Family & Partner First
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Designed to be accessible for daily family treats while providing retail stockists with high-velocity SKU turns and dependable trade support.
            </p>
          </div>

        </div>

        {/* Brand Transparency & Partner Verification Box */}
        <div className="bg-gradient-to-r from-stone-900 via-[#271E18] to-stone-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
          
          <div className="relative z-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-orange-200 text-xs font-semibold uppercase tracking-wider">
                <Info className="w-3.5 h-3.5 text-[#F4845F]" />
                <span>Commercial Transparency Guarantee</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-anton uppercase tracking-wide">
                Built On Honest Ingredients & Verified Operations
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                We believe trust is earned on the ground. Sun Relief manufactures pure milk ice cream products from Gujarat and continues to expand distribution footprint. Specific plant audits, commercial dealer margins, and localized supply schedules are shared with verified commercial partners upon submitting a distribution enquiry.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F4845F] shrink-0" />
                  <span>Verified Gujarat Base</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F4845F] shrink-0" />
                  <span>Real Dairy Formulation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F4845F] shrink-0" />
                  <span>Direct Business Desk</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={() => {
                  const el = document.getElementById('distribution');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-[#E05326] hover:bg-[#C94318] text-white py-3.5 px-6 rounded-xl font-semibold text-xs sm:text-sm transition-all text-center cursor-pointer shadow-lg shadow-orange-700/30"
              >
                Explore Distribution Terms
              </button>
              
              <a
                href={BRAND_FACTS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 py-3 px-6 rounded-xl font-medium text-xs sm:text-sm transition-colors text-center"
              >
                Official Instagram ({BRAND_FACTS.instagramHandle})
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
