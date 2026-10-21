import React from 'react';
import { X, Store } from 'lucide-react';
import { DistributorEnquiryForm } from './DistributorEnquiryForm';

interface DistributorEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productInterest?: string;
}

export const DistributorEnquiryModal: React.FC<DistributorEnquiryModalProps> = ({
  isOpen,
  onClose,
  productInterest
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-stone-200 relative p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E05326] mb-2">
          <Store className="w-4 h-4" />
          <span>B2B Commercial Partnership Desk</span>
        </div>

        <DistributorEnquiryForm initialProductInterest={productInterest} />
      </div>
    </div>
  );
};
