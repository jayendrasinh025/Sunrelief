import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Sun, Phone, Instagram } from 'lucide-react';
import { BRAND_FACTS } from '../data/products';

interface NavbarProps {
  onOpenEnquiryModal: () => void;
  activeAudience: 'consumer' | 'business';
  setActiveAudience: (aud: 'consumer' | 'business') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenEnquiryModal,
  activeAudience,
  setActiveAudience
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#EEDDCB]">
      {/* Top utility banner for audience switching */}
      <div className="bg-[#1E1915] text-[#F5EBE1] text-xs py-1.5 px-4 sm:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 font-medium text-[#F4845F]">
            <Sun className="w-3.5 h-3.5" />
            Gujarat Born · Real Milk Ice Creams
          </span>
          <span className="hidden md:inline text-stone-500">|</span>
          <span className="hidden md:inline text-stone-400">Serving Gujarat, Maharashtra & Rajasthan</span>
        </div>

        <div className="flex items-center gap-3">
          {/* Audience Mode Switcher */}
          <div className="inline-flex items-center bg-[#2B241E] p-0.5 rounded-full border border-stone-700 text-[11px]">
            <button
              onClick={() => setActiveAudience('consumer')}
              className={`px-2.5 py-0.5 rounded-full font-medium transition-all ${
                activeAudience === 'consumer'
                  ? 'bg-[#F4845F] text-white shadow-xs'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              Consumer Hub
            </button>
            <button
              onClick={() => setActiveAudience('business')}
              className={`px-2.5 py-0.5 rounded-full font-medium transition-all ${
                activeAudience === 'business'
                  ? 'bg-[#F4845F] text-white shadow-xs'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              B2B / Distributors
            </button>
          </div>

          <a
            href={BRAND_FACTS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-stone-300 hover:text-white transition-colors"
            title="Follow on Instagram"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span className="text-[11px]">Instagram</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#F4845F] rounded-lg"
          aria-label="Sun Relief Ice Cream Home"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#F4845F] to-[#E05326] flex items-center justify-center text-white shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
            <Sun className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-anton tracking-wide text-2xl text-[#1E1915] uppercase leading-none">
                SUN RELIEF
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#E05326] bg-orange-100 px-1.5 py-0.5 rounded">
                DAIRY
              </span>
            </div>
            <p className="text-[11px] font-semibold tracking-widest text-stone-500 uppercase mt-0.5">
              ICE CREAM · GUJARAT
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-700">
          <button
            onClick={() => scrollTo('hero')}
            className="hover:text-[#E05326] transition-colors cursor-pointer py-1"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo('products')}
            className="hover:text-[#E05326] transition-colors cursor-pointer py-1"
          >
            Flavour Catalogue
          </button>
          <button
            onClick={() => scrollTo('brand-story')}
            className="hover:text-[#E05326] transition-colors cursor-pointer py-1"
          >
            Our Story & Milk
          </button>
          <button
            onClick={() => scrollTo('distribution')}
            className="hover:text-[#E05326] transition-colors cursor-pointer py-1 font-semibold text-[#1E1915]"
          >
            Distribution & Retail
          </button>
          <button
            onClick={() => scrollTo('footprint')}
            className="hover:text-[#E05326] transition-colors cursor-pointer py-1"
          >
            Network Footprint
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="hover:text-[#E05326] transition-colors cursor-pointer py-1"
          >
            Contact
          </button>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => scrollTo('products')}
            className="text-xs font-semibold px-3.5 py-2 text-stone-700 hover:text-stone-900 transition-colors cursor-pointer"
          >
            Explore Flavours
          </button>
          <button
            onClick={onOpenEnquiryModal}
            className="inline-flex items-center gap-2 bg-[#E05326] hover:bg-[#C94318] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-xl shadow-md shadow-orange-600/20 transition-all hover:scale-[1.02] cursor-pointer"
          >
            <span>Become a Distributor</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenEnquiryModal}
            className="bg-[#E05326] text-white text-xs font-semibold px-3 py-1.5 rounded-lg"
          >
            Partner
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-stone-900 rounded-lg hover:bg-stone-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF9] border-b border-[#EEDDCB] px-4 pt-3 pb-6 shadow-xl space-y-4">
          <div className="flex flex-col space-y-2 text-base font-medium text-stone-800">
            <button
              onClick={() => scrollTo('hero')}
              className="text-left py-2 px-3 rounded-lg hover:bg-orange-50 hover:text-[#E05326]"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo('products')}
              className="text-left py-2 px-3 rounded-lg hover:bg-orange-50 hover:text-[#E05326]"
            >
              Our Products & Flavours
            </button>
            <button
              onClick={() => scrollTo('brand-story')}
              className="text-left py-2 px-3 rounded-lg hover:bg-orange-50 hover:text-[#E05326]"
            >
              About Sun Relief
            </button>
            <button
              onClick={() => scrollTo('distribution')}
              className="text-left py-2 px-3 rounded-lg hover:bg-orange-50 hover:text-[#E05326] font-semibold text-[#E05326]"
            >
              Distributor & Retailer Info
            </button>
            <button
              onClick={() => scrollTo('footprint')}
              className="text-left py-2 px-3 rounded-lg hover:bg-orange-50 hover:text-[#E05326]"
            >
              Regional Coverage
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="text-left py-2 px-3 rounded-lg hover:bg-orange-50 hover:text-[#E05326]"
            >
              Contact & Support
            </button>
          </div>

          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiryModal();
              }}
              className="w-full text-center bg-[#E05326] text-white font-semibold py-3 rounded-xl shadow-md"
            >
              Submit Distributor Enquiry
            </button>
            <a
              href={BRAND_FACTS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 border border-stone-300 text-stone-700 py-2.5 rounded-xl text-sm font-medium"
            >
              <Instagram className="w-4 h-4 text-[#E05326]" />
              Visit Official Instagram ({BRAND_FACTS.instagramHandle})
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
