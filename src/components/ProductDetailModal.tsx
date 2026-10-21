import React from 'react';
import { X, Check, Snowflake, ShieldCheck, ArrowRight, Package, ThermometerSnowflake, Share2 } from 'lucide-react';
import { Product } from '../types';
import { BRAND_FACTS } from '../data/products';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onEnquire: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onEnquire
}) => {
  if (!product) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 relative flex flex-col md:flex-row overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-stone-700 flex items-center justify-center shadow-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Product Visual */}
        <div className="md:w-1/2 relative bg-stone-100 flex items-center justify-center p-6 md:p-8 min-h-[300px]">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(circle at center, ${product.accentColor} 0%, transparent 70%)`
            }}
          />
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[380px] w-auto object-contain rounded-xl shadow-lg relative z-1"
          />
          <div className="absolute bottom-4 left-4 z-2">
            <span 
              className="text-white text-xs font-semibold px-3 py-1 rounded-md shadow-sm"
              style={{ backgroundColor: product.accentColor }}
            >
              {product.tag}
            </span>
          </div>
        </div>

        {/* Right: Product Details & Specifications */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            
            {/* Format & Origin Tag */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500 bg-stone-100 px-2.5 py-1 rounded">
                {product.format}
              </span>
              <span className="text-xs font-medium text-stone-400">·</span>
              <span className="text-xs font-medium text-stone-600">
                Gujarat Dairy Line
              </span>
            </div>

            <div>
              <h2 className="font-anton text-3xl sm:text-4xl uppercase text-[#1E1915] tracking-tight">
                {product.name}
              </h2>
              <p className="text-sm font-semibold text-[#E05326] mt-0.5">
                Flavour: {product.flavour}
              </p>
            </div>

            <p className="text-stone-600 text-sm leading-relaxed">
              {product.description}
            </p>

            {/* Verified Attributes */}
            <div className="space-y-2 pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Product Specifications:
              </p>
              <ul className="space-y-1.5 text-xs text-stone-700">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#16A34A] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Storage & Cold Chain Advice */}
            <div className="bg-orange-50/70 rounded-xl p-3 border border-orange-100 flex items-start gap-2.5 text-xs text-orange-950">
              <ThermometerSnowflake className="w-4 h-4 text-[#E05326] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">Cold Chain Requirement: </span>
                <span>Keep stored at {BRAND_FACTS.coldChainTemp} in deep freezer for peak texture and taste.</span>
              </div>
            </div>

            <div className="text-[11px] text-stone-400">
              Packaging Format: {product.packagingType} · {product.targetOccasion}
            </div>

          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-stone-200 flex flex-col gap-2.5">
            <button
              onClick={() => {
                onClose();
                onEnquire(product);
              }}
              className="w-full bg-[#E05326] hover:bg-[#C94318] text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <span>Enquire to Stock This Flavour</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: `Sun Relief Ice Cream - ${product.name}`,
                    text: `Check out ${product.name} by Sun Relief Ice Cream!`,
                    url: window.location.href
                  }).catch(() => {});
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Page link copied to clipboard!');
                }
              }}
              className="w-full border border-stone-200 hover:bg-stone-50 text-stone-700 py-2.5 px-4 rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Flavour Details</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
