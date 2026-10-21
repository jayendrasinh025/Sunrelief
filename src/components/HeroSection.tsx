import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight, Sparkles, CheckCircle2, ShieldCheck, Flame, Sun, Store } from 'lucide-react';
import { SUN_RELIEF_PRODUCTS } from '../data/products';
import { Product } from '../types';

interface HeroSectionProps {
  onExploreProducts: () => void;
  onOpenEnquiry: () => void;
  onSelectProductModal: (p: Product) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProducts,
  onOpenEnquiry,
  onSelectProductModal
}) => {
  const [selectedHeroIndex, setSelectedHeroIndex] = useState(0);

  // Auto-cycle through hero products gently every 7 seconds unless interacted with
  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedHeroIndex((prev) => (prev + 1) % SUN_RELIEF_PRODUCTS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const currentProduct = SUN_RELIEF_PRODUCTS[selectedHeroIndex];

  return (
    <section id="hero" className="relative min-h-[90vh] bg-[#FFFDF9] overflow-hidden flex flex-col justify-center">
      {/* Dynamic ambient backdrop reflecting the selected product's authentic palette */}
      <div 
        className="absolute top-0 right-0 w-full sm:w-2/3 h-full pointer-events-none opacity-30 sm:opacity-40 transition-colors duration-1000 blur-3xl -z-10"
        style={{
          background: `radial-gradient(circle at 70% 40%, ${currentProduct.accentColor} 0%, transparent 65%)`
        }}
      />

      {/* Subtle organic noise grid */}
      <div className="absolute inset-0 bg-grain opacity-60 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Authentic Brand Messaging & Dual Conversion Paths */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Authentic Brand Verification Kicker */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200/80 text-[#C94318] text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#E05326] animate-pulse" />
              <span>Gujarat's Creamy Ice Cream Brand</span>
              <span className="text-orange-300">·</span>
              <span className="text-stone-700 font-medium">Made with Real Milk</span>
            </div>

            {/* Core Headline from specification */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-anton tracking-tight text-[#1E1915] uppercase leading-[1.05]">
                Every Scoop <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E05326] via-[#F4845F] to-[#EAB308]">
                  Has A Story.
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-stone-600 max-w-xl font-normal leading-relaxed">
                Discover the flavours of Sun Relief Ice Cream, made for everyday treats, family moments, and more. Authentic milk goodness crafted right here in Gujarat.
              </p>
            </div>

            {/* Dual CTAs: Primary for Consumers, Secondary for Business Partners */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onExploreProducts}
                className="inline-flex items-center justify-center gap-2.5 bg-[#E05326] hover:bg-[#C94318] text-white font-semibold px-7 py-4 rounded-xl text-base shadow-lg shadow-orange-600/25 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Our Ice Cream</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-stone-50 border-2 border-[#1E1915] text-[#1E1915] font-semibold px-7 py-4 rounded-xl text-base transition-all hover:-translate-y-0.5 cursor-pointer shadow-sm"
              >
                <Store className="w-5 h-5 text-[#E05326]" />
                <span>Become a Distributor</span>
              </button>
            </div>

            {/* Quick Proof Pillars */}
            <div className="pt-4 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>100% Real Milk Solids</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Strict -18°C Cold Chain</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Available Across 3 States</span>
              </div>
            </div>

            {/* Interactive Flavour Selector Thumbnails */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2.5">
                Featured Product Spotlight (Click to switch preview):
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {SUN_RELIEF_PRODUCTS.map((prod, idx) => (
                  <button
                    key={prod.id}
                    onClick={() => setSelectedHeroIndex(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
                      selectedHeroIndex === idx
                        ? 'bg-[#1E1915] text-white shadow-sm ring-2 ring-offset-1 ring-[#1E1915]'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                    }`}
                  >
                    <span 
                      className="w-2.5 h-2.5 rounded-full shrink-0" 
                      style={{ backgroundColor: prod.accentColor }} 
                    />
                    <span>{prod.name}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Hero Food Photography Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* The Authentic Product Stage Card */}
            <div className="relative w-full max-w-md sm:max-w-lg bg-white rounded-3xl p-5 sm:p-7 shadow-2xl shadow-stone-900/10 border border-stone-100 overflow-hidden group">
              
              {/* Product Format & Real Packaging Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-stone-100 text-stone-800">
                    {currentProduct.format}
                  </span>
                  <span 
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-md text-white"
                    style={{ backgroundColor: currentProduct.accentColor }}
                  >
                    {currentProduct.tag}
                  </span>
                </div>
                <span className="text-xs text-stone-400 font-mono">
                  {selectedHeroIndex + 1} / {SUN_RELIEF_PRODUCTS.length}
                </span>
              </div>

              {/* The Authentic Photo Container */}
              <div 
                className="relative h-[340px] sm:h-[420px] rounded-2xl overflow-hidden bg-stone-50 flex items-center justify-center cursor-pointer"
                onClick={() => onSelectProductModal(currentProduct)}
                title="Click to view high-res product detail"
              >
                <img
                  src={currentProduct.image}
                  alt={`Sun Relief ${currentProduct.name} - Packaging & Texture`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Floating click indicator */}
                <div className="absolute bottom-3 right-3 bg-[#1E1915]/80 backdrop-blur-xs text-white text-[11px] px-3 py-1.5 rounded-full flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Product Info Bar */}
              <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h3 className="font-anton text-2xl uppercase tracking-wide text-[#1E1915]">
                    {currentProduct.name}
                  </h3>
                  <p className="text-xs text-stone-500 font-medium">
                    {currentProduct.flavour} · {currentProduct.servingFormat}
                  </p>
                </div>

                <button
                  onClick={() => onSelectProductModal(currentProduct)}
                  className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-orange-50 text-[#C94318] hover:bg-orange-100 transition-colors"
                >
                  Flavour Profile
                </button>
              </div>

            </div>

            {/* Authentic food photo assurance caption */}
            <p className="text-[11px] text-stone-400 text-center mt-3 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
              <span>Authentic Sun Relief packaged product photography from Gujarat dairy line</span>
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};
