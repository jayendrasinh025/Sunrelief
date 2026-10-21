import React from 'react';
import { 
  TrendingUp, 
  Store, 
  Truck, 
  Thermometer, 
  FileCheck2, 
  HelpCircle, 
  ShieldAlert, 
  PhoneCall, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { DistributorEnquiryForm } from './DistributorEnquiryForm';
import { BRAND_FACTS } from '../data/products';

interface DistributorSectionProps {
  initialProductInterest?: string;
}

export const DistributorSection: React.FC<DistributorSectionProps> = ({
  initialProductInterest
}) => {
  const steps = [
    {
      num: '01',
      title: 'Submit an enquiry',
      desc: 'Complete the verified digital enquiry form with your enterprise background and location details.'
    },
    {
      num: '02',
      title: 'Share business & location details',
      desc: 'Our commercial desk reviews your retail network, deep freezer capacity, and territory demand.'
    },
    {
      num: '03',
      title: 'Discuss product availability & logistics',
      desc: 'Evaluate SKU allocation (Sticks, Cones, Family Tubs), delivery frequencies, and cold-chain routes.'
    },
    {
      num: '04',
      title: 'Connect with company for next steps',
      desc: 'Finalize trade agreements, receive point-of-sale branding material, and launch authorized stock.'
    }
  ];

  return (
    <section id="distribution" className="py-24 bg-[#1C1714] text-white relative overflow-hidden">
      
      {/* Visual Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-1">
        
        {/* Section Header with Distinct B2B Visual Identity */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#F4845F] text-xs font-semibold uppercase tracking-wider">
            <Store className="w-3.5 h-3.5" />
            <span>Authorized Partner Network</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-anton uppercase tracking-tight text-white">
            Grow With Sun Relief.
          </h2>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Interested in bringing Sun Relief Ice Cream to your market? Tell us about your business and location to enquire about distribution opportunities across Gujarat and Western India.
          </p>
        </div>

        {/* 4-Step Partnership Roadmap */}
        <div className="mb-20">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#F4845F] mb-6">
            Partnership Onboarding Process:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div 
                key={st.num}
                className="bg-[#26201B] border border-stone-800 rounded-2xl p-6 relative flex flex-col justify-between hover:border-orange-500/40 transition-colors"
              >
                <div>
                  <span className="font-anton text-4xl text-[#F4845F]/40 leading-none">
                    {st.num}
                  </span>
                  <h4 className="font-anton text-lg uppercase tracking-wide text-white mt-3 mb-2">
                    {st.title}
                  </h4>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-stone-800/80 flex items-center gap-1.5 text-[11px] text-stone-500">
                  <span>Step {st.num}</span>
                  <ArrowRight className="w-3 h-3 text-stone-600" />
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-stone-500 mt-3 italic">
            * Note: Application submission does not guarantee territory exclusivity or approval. Each geography is evaluated based on cold-chain viability and market capacity.
          </p>
        </div>

        {/* Two-Column Grid: Left Commercial Checklist & Right Real Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Commercial Requirements & Why Partners Enquire */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#26201B] rounded-3xl p-6 sm:p-8 border border-stone-800 space-y-6">
              
              <div className="border-b border-stone-800 pb-4">
                <h3 className="font-anton text-2xl uppercase tracking-wide text-white">
                  Why Partners Enquire
                </h3>
                <p className="text-xs text-stone-400 mt-1">
                  Key parameters evaluated before entering a commercial distribution agreement:
                </p>
              </div>

              {/* Requirement Items */}
              <div className="space-y-4 text-xs text-stone-300">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-[#F4845F] shrink-0 mt-0.5">
                    <Thermometer className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white text-sm">Strict -18°C Cold Chain</h5>
                    <p className="text-stone-400 mt-0.5">
                      Partners must maintain deep freezer infrastructure at -18°C or below to preserve dairy texture and prevent temperature fluctuations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-[#F4845F] shrink-0 mt-0.5">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white text-sm">Full SKU Assortment Access</h5>
                    <p className="text-stone-400 mt-0.5">
                      Access to our high-rotation handheld sticks, crispy waffle cones (Pista & Choco Chips), and high-margin family tubs (American Nuts, Black Current).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-[#F4845F] shrink-0 mt-0.5">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white text-sm">Cold Logistics Coordination</h5>
                    <p className="text-stone-400 mt-0.5">
                      Primary dispatches from Gujarat with coordinated reefers. Secondary logistics are aligned during commercial onboarding.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-[#F4845F] shrink-0 mt-0.5">
                    <FileCheck2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white text-sm">Commercial Margins & MOQs</h5>
                    <p className="text-stone-400 mt-0.5">
                      Commercial terms, minimum order quantities (MOQ), and dealer margins are customized according to your zone and provided following enquiry submission.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Direct Telephone Desk Notice */}
            <div className="bg-[#2E2721] rounded-2xl p-5 border border-stone-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E05326] flex items-center justify-center text-white shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-400">Direct Distribution Desk</p>
                  <p className="text-sm font-bold text-white font-mono">Official Gujarat Hotline</p>
                </div>
              </div>
              <a
                href={`https://wa.me/${BRAND_FACTS.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-[#F4845F] transition-colors"
              >
                WhatsApp Desk
              </a>
            </div>

          </div>

          {/* Right Column: Genuine Distributor Enquiry Form */}
          <div className="lg:col-span-7">
            <DistributorEnquiryForm initialProductInterest={initialProductInterest} />
          </div>

        </div>

      </div>
    </section>
  );
};
