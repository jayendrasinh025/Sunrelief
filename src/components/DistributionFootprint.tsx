import React, { useState } from 'react';
import { MapPin, CheckCircle, Clock, Search, ArrowRight, ShieldCheck, Compass } from 'lucide-react';
import { BRAND_FACTS } from '../data/products';

interface DistributionFootprintProps {
  onOpenEnquiry: () => void;
}

export const DistributionFootprint: React.FC<DistributionFootprintProps> = ({
  onOpenEnquiry
}) => {
  const [selectedState, setSelectedState] = useState<string>('gujarat');

  const territories = [
    {
      id: 'gujarat',
      name: 'Gujarat',
      status: 'Primary Hub & Full Network',
      statusColor: 'text-green-700 bg-green-50 border-green-200',
      description: 'Birthplace of Sun Relief Ice Cream. High frequency cold-chain dispatches covering all major municipal districts, tier-2 towns, and retail grocery partners.',
      keyRegions: ['Ahmedabad Metro', 'Surat & South Gujarat', 'Vadodara & Anand Milk Belt', 'Rajkot & Saurashtra', 'Bhavnagar & Jamnagar'],
      dispatchCadence: 'Daily / 48-Hour Replenishment'
    },
    {
      id: 'maharashtra',
      name: 'Maharashtra',
      status: 'Active Distribution Network',
      statusColor: 'text-blue-700 bg-blue-50 border-blue-200',
      description: 'Servicing northern and coastal trade corridors connecting with Gujarat logistics routes. Expanding reach for high-demand sticks and family packs.',
      keyRegions: ['Mumbai & MMR Fringe', 'Thane & Palghar', 'Nashik & Khandesh Hubs', 'Pune Expansion Inquiries'],
      dispatchCadence: 'Scheduled Reefer Route Dispatches'
    },
    {
      id: 'rajasthan',
      name: 'Rajasthan',
      status: 'Active Border & Corridor Network',
      statusColor: 'text-amber-700 bg-amber-50 border-amber-200',
      description: 'Serving key southern and western districts with unbroken cold-chain connections from northern Gujarat manufacturing points.',
      keyRegions: ['Udaipur & South Rajasthan', 'Abu Road & Sirohi', 'Jodhpur Distribution Inquiries', 'Bhilwara'],
      dispatchCadence: 'Bi-Weekly Cold Reefer Runs'
    }
  ];

  const currentTerritory = territories.find(t => t.id === selectedState) || territories[0];

  return (
    <section id="footprint" className="py-20 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#C94318] text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Regional Coverage Verification</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-anton uppercase text-[#1E1915] tracking-tight">
            Distribution Footprint
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            As highlighted on our official channels, Sun Relief Ice Cream actively serves consumers and retailers across three prominent western states. We prioritize steady cold-chain integrity over unverified expansion.
          </p>
        </div>

        {/* Territory Switcher & Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Territory Tabs */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
              Select Distribution Territory:
            </p>
            {territories.map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedState(t.id)}
                className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                  selectedState === t.id
                    ? 'bg-white border-[#E05326] shadow-md ring-2 ring-[#E05326]/10'
                    : 'bg-white/60 hover:bg-white border-stone-200 text-stone-700'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <MapPin className={`w-4 h-4 ${selectedState === t.id ? 'text-[#E05326]' : 'text-stone-400'}`} />
                    <span className="font-anton text-lg uppercase tracking-wide text-[#1E1915]">
                      {t.name}
                    </span>
                  </div>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border inline-block ${t.statusColor}`}>
                    {t.status}
                  </span>
                </div>
                <ArrowRight className={`w-4 h-4 ${selectedState === t.id ? 'text-[#E05326]' : 'text-stone-300'}`} />
              </button>
            ))}

            {/* Expansion Notice */}
            <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-200/60 text-xs text-stone-700 space-y-2 mt-4">
              <p className="font-semibold text-[#C94318]">Operating in Another State?</p>
              <p className="text-stone-600 text-[11px] leading-relaxed">
                If you manage distribution infrastructure in Madhya Pradesh, Delhi NCR, or other emerging corridors, submit an enquiry to register priority logistics feasibility.
              </p>
              <button
                onClick={onOpenEnquiry}
                className="text-xs font-bold text-[#E05326] hover:text-[#C94318] inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Register Interest</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Territory Detail Panel */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-stone-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#E05326]">
                  State Logistics Overview
                </span>
                <h3 className="font-anton text-3xl uppercase tracking-wide text-[#1E1915] mt-0.5">
                  {currentTerritory.name}
                </h3>
              </div>
              <span className={`text-xs font-bold px-3 py-1.5 rounded-xl border self-start sm:self-auto ${currentTerritory.statusColor}`}>
                {currentTerritory.status}
              </span>
            </div>

            <p className="text-stone-600 text-sm leading-relaxed">
              {currentTerritory.description}
            </p>

            {/* Key Delivery Hubs */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Key Coverage & Wholesale Hubs:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentTerritory.keyRegions.map((region, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50 border border-stone-100 text-xs text-stone-800">
                    <CheckCircle className="w-4 h-4 text-[#16A34A] shrink-0" />
                    <span className="font-medium">{region}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Logistics Cadence & Disclaimer */}
            <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-stone-600">
                <Clock className="w-4 h-4 text-[#E05326]" />
                <span>Dispatch Cadence: <strong>{currentTerritory.dispatchCadence}</strong></span>
              </div>

              <button
                onClick={onOpenEnquiry}
                className="bg-[#E05326] hover:bg-[#C94318] text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-all shadow-sm cursor-pointer"
              >
                Apply for {currentTerritory.name} Dealership
              </button>
            </div>

          </div>

        </div>

        {/* Verification Transparency Note */}
        <div className="bg-stone-100/70 rounded-2xl p-4 border border-stone-200/80 text-[11px] text-stone-500 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#16A34A] shrink-0" />
          <span>
            Territory Availability Policy: Exact distributor allocation and sub-distributor vacancies depend on non-compete buffers with existing active partners. Details confirmed upon enquiry review.
          </span>
        </div>

      </div>
    </section>
  );
};
