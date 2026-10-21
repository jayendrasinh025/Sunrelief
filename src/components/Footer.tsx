import React from 'react';
import { Sun, Instagram, Phone, Mail, MapPin, ArrowRight, ShieldCheck, MessageSquare } from 'lucide-react';
import { BRAND_FACTS, SUN_RELIEF_PRODUCTS } from '../data/products';

interface FooterProps {
  onOpenEnquiry: () => void;
  onSelectCategory: (cat: 'sticks' | 'cones' | 'tubs') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenEnquiry,
  onSelectCategory
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#140F0C] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E05326] flex items-center justify-center text-white shadow-md">
                <Sun className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <span className="font-anton tracking-wide text-2xl text-white uppercase leading-none block">
                  SUN RELIEF
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-[#F4845F] uppercase">
                  ICE CREAM · GUJARAT
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              Authentic ice cream churned with real milk in Gujarat. Dedicated to bringing delicious, high-quality sticks, cones, and family packs to consumers and commercial retailers across Western India.
            </p>

            {/* Official Instagram Link */}
            <div className="pt-2">
              <a
                href={BRAND_FACTS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-stone-800/80 hover:bg-stone-700 text-white text-xs font-semibold transition-colors border border-stone-700"
              >
                <Instagram className="w-4 h-4 text-[#F4845F]" />
                <span>Follow on Instagram ({BRAND_FACTS.instagramHandle})</span>
              </a>
            </div>
          </div>

          {/* Consumer Discovery Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-anton text-sm uppercase tracking-wider text-white">
              For Consumers
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => {
                    scrollTo('products');
                    onSelectCategory('sticks');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Mango Dolly & Duet Sticks
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollTo('products');
                    onSelectCategory('cones');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Pista & Choco Cones
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    scrollTo('products');
                    onSelectCategory('tubs');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  American Nuts & Berry Tubs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('brand-story')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Real Milk Dairy Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('footprint')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Where to Find Us
                </button>
              </li>
            </ul>
          </div>

          {/* Business & Distribution Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-anton text-sm uppercase tracking-wider text-[#F4845F]">
              For Business & Trade
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={onOpenEnquiry}
                  className="hover:text-white transition-colors font-medium text-stone-200 cursor-pointer flex items-center gap-1"
                >
                  <span>Become an Authorized Distributor</span>
                  <ArrowRight className="w-3 h-3 text-[#F4845F]" />
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenEnquiry}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Wholesale Stockist Inquiries
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('distribution')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Cold Chain Requirements (-18°C)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('footprint')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Gujarat, MH & RJ Route Logistics
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenEnquiry}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Territory Availability Review
                </button>
              </li>
            </ul>
          </div>

          {/* Verified Contact Details & Direct Hotline */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-anton text-sm uppercase tracking-wider text-white">
              Official Contact Desk
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F4845F] shrink-0 mt-0.5" />
                <span>Manufacturing & Corporate Hub: Gujarat, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F4845F] shrink-0" />
                <span>Distribution Helpline: Via WhatsApp Desk</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/${BRAND_FACTS.whatsappNumber}?text=Hello%20Sun%20Relief%20Ice%20Cream%20Team`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 hover:text-white underline"
                >
                  Direct WhatsApp Chat
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEnquiry}
                className="w-full bg-[#E05326] hover:bg-[#C94318] text-white py-2 px-3 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
              >
                Submit Commercial Enquiry
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Integrity Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <p>
            © {new Date().getFullYear()} Sun Relief Ice Cream. All rights reserved. Registered trademark in Gujarat, India.
          </p>

          <div className="flex items-center gap-4 text-stone-400">
            <span>Made with Real Milk</span>
            <span>·</span>
            <span>Preserved at -18°C</span>
            <span>·</span>
            <a
              href={BRAND_FACTS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F4845F] hover:underline"
            >
              @sun_relief_ice_cream
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
