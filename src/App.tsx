/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductCatalogue } from './components/ProductCatalogue';
import { BrandStorySection } from './components/BrandStorySection';
import { DistributorSection } from './components/DistributorSection';
import { DistributionFootprint } from './components/DistributionFootprint';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { DistributorEnquiryModal } from './components/DistributorEnquiryModal';
import { SUN_RELIEF_PRODUCTS, BRAND_FACTS } from './data/products';
import { Product } from './types';
import { MessageCircle, Sun, ArrowUp, Store } from 'lucide-react';

export default function App() {
  const [activeAudience, setActiveAudience] = useState<'consumer' | 'business'>('consumer');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryProductInterest, setEnquiryProductInterest] = useState<string | undefined>(undefined);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Preload authentic product images on mount
  useEffect(() => {
    SUN_RELIEF_PRODUCTS.forEach((p) => {
      const img = new Image();
      img.src = p.image;
    });

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudienceChange = (audience: 'consumer' | 'business') => {
    setActiveAudience(audience);
    if (audience === 'business') {
      const el = document.getElementById('distribution');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      const el = document.getElementById('products');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnquireAboutProduct = (product: Product) => {
    setEnquiryProductInterest(`${product.name} (${product.format})`);
    setIsEnquiryModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#1E1915] flex flex-col selection:bg-[#F4845F] selection:text-white">
      {/* Navigation Header */}
      <Navbar
        onOpenEnquiryModal={() => {
          setEnquiryProductInterest(undefined);
          setIsEnquiryModalOpen(true);
        }}
        activeAudience={activeAudience}
        setActiveAudience={handleAudienceChange}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Distinctive Hero Section with authentic food photography */}
        <HeroSection
          onExploreProducts={() => {
            const el = document.getElementById('products');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenEnquiry={() => {
            setEnquiryProductInterest(undefined);
            setIsEnquiryModalOpen(true);
          }}
          onSelectProductModal={(p) => setSelectedProduct(p)}
        />

        {/* 2. Consumer Product Discovery Catalogue */}
        <ProductCatalogue
          onSelectProduct={(p) => setSelectedProduct(p)}
          onEnquireProduct={handleEnquireAboutProduct}
        />

        {/* 3. Our Brand Story & Gujarat Dairy Manufacturing */}
        <BrandStorySection />

        {/* 4 & 5 & 6. Dedicated Distributor & Retailer Section ("Grow With Sun Relief") */}
        <DistributorSection initialProductInterest={enquiryProductInterest} />

        {/* 7. Regional Distribution Footprint (Gujarat, MH, RJ) */}
        <DistributionFootprint
          onOpenEnquiry={() => {
            setEnquiryProductInterest(undefined);
            setIsEnquiryModalOpen(true);
          }}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenEnquiry={() => {
          setEnquiryProductInterest(undefined);
          setIsEnquiryModalOpen(true);
        }}
        onSelectCategory={() => {
          const el = document.getElementById('products');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onEnquire={handleEnquireAboutProduct}
      />

      {/* Distributor Enquiry Popup Modal */}
      <DistributorEnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        productInterest={enquiryProductInterest}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Back to top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-white text-stone-700 hover:text-[#E05326] shadow-lg border border-stone-200 flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Instant WhatsApp Quick Connect */}
        <a
          href={`https://wa.me/${BRAND_FACTS.whatsappNumber}?text=${encodeURIComponent('Hello Sun Relief Team, I am visiting your website and would like to know more about your ice creams and distribution.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-4 rounded-full shadow-xl shadow-green-600/30 transition-all hover:scale-105 cursor-pointer"
          title="Direct WhatsApp enquiry"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="text-xs font-bold hidden sm:inline">WhatsApp Us</span>
        </a>
      </div>
    </div>
  );
}
