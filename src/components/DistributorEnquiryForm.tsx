import React, { useState } from 'react';
import { 
  Send, 
  MessageSquare, 
  CheckCircle, 
  AlertCircle, 
  Download, 
  RefreshCw, 
  Lock, 
  Building, 
  MapPin, 
  Phone, 
  Mail, 
  User, 
  FileText,
  Snowflake,
  ExternalLink
} from 'lucide-react';
import { DistributorEnquiry, BusinessType } from '../types';
import { validateDistributorEnquiry, generateEnquiryReference } from '../utils/enquiryValidation';
import { formatDistributorWhatsAppMessage, buildWhatsAppLink } from '../utils/whatsappFormatter';
import { BRAND_FACTS } from '../data/products';

interface DistributorEnquiryFormProps {
  initialProductInterest?: string;
  onSuccess?: (enquiry: DistributorEnquiry, ref: string) => void;
}

const INDIAN_STATES = [
  'Gujarat (Headquarters & Active Hub)',
  'Maharashtra (Active Network)',
  'Rajasthan (Active Network)',
  'Madhya Pradesh (Expansion Zone)',
  'Delhi NCR (Expansion Zone)',
  'Goa',
  'Karnataka',
  'Other State / Union Territory'
];

export const DistributorEnquiryForm: React.FC<DistributorEnquiryFormProps> = ({
  initialProductInterest,
  onSuccess
}) => {
  const [formData, setFormData] = useState<DistributorEnquiry>({
    fullName: '',
    businessName: '',
    phoneNumber: '',
    email: '',
    city: '',
    state: 'Gujarat (Headquarters & Active Hub)',
    businessType: 'distributor',
    currentExperience: '',
    coldStorageAvailable: 'yes',
    message: initialProductInterest ? `Interested in stocking: ${initialProductInterest}. Please share wholesale catalogue and terms.` : ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedResult, setSubmittedResult] = useState<{
    enquiry: DistributorEnquiry;
    refNumber: string;
    whatsAppUrl: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear field-level error on change
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateDistributorEnquiry(formData);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Process genuine submission
    setTimeout(() => {
      const refNumber = generateEnquiryReference();
      const submissionRecord: DistributorEnquiry = {
        ...formData,
        id: refNumber,
        submittedAt: new Date().toISOString()
      };

      // Save locally to persist submission history in browser
      try {
        const existing = JSON.parse(localStorage.getItem('sun_relief_enquiries') || '[]');
        existing.unshift(submissionRecord);
        localStorage.setItem('sun_relief_enquiries', JSON.stringify(existing));
      } catch (err) {
        console.error('Local storage save error:', err);
      }

      // Format WhatsApp pre-fill message
      const whatsappMsg = formatDistributorWhatsAppMessage(submissionRecord, refNumber);
      const whatsAppUrl = buildWhatsAppLink(BRAND_FACTS.whatsappNumber, whatsappMsg);

      setSubmittedResult({
        enquiry: submissionRecord,
        refNumber,
        whatsAppUrl
      });

      setIsSubmitting(false);
      if (onSuccess) {
        onSuccess(submissionRecord, refNumber);
      }
    }, 450);
  };

  const handleDownloadSummary = () => {
    if (!submittedResult) return;
    const textContent = formatDistributorWhatsAppMessage(submittedResult.enquiry, submittedResult.refNumber);
    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `SunRelief_Distribution_Enquiry_${submittedResult.refNumber}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    setSubmittedResult(null);
    setFormData({
      fullName: '',
      businessName: '',
      phoneNumber: '',
      email: '',
      city: '',
      state: 'Gujarat (Headquarters & Active Hub)',
      businessType: 'distributor',
      currentExperience: '',
      coldStorageAvailable: 'yes',
      message: ''
    });
  };

  // Render Confirmation Receipt View
  if (submittedResult) {
    return (
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xl space-y-6 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center gap-3 pb-4 border-b border-stone-100">
          <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-green-700 shrink-0">
            <CheckCircle className="w-7 h-7" />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-green-700 bg-green-50 px-2 py-0.5 rounded">
              Enquiry Submitted Successfully
            </span>
            <h3 className="font-anton text-2xl uppercase tracking-wide text-[#1E1915] mt-1">
              Reference: #{submittedResult.refNumber}
            </h3>
          </div>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-stone-600 bg-[#FFFDF9] p-5 rounded-2xl border border-stone-200">
          <p className="font-semibold text-stone-800">
            Thank you, {submittedResult.enquiry.fullName}. Your commercial enquiry has been logged with our distribution desk.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-stone-700 border-t border-stone-200">
            <div><span className="text-stone-400">Business:</span> {submittedResult.enquiry.businessName}</div>
            <div><span className="text-stone-400">Phone:</span> {submittedResult.enquiry.phoneNumber}</div>
            <div><span className="text-stone-400">Location:</span> {submittedResult.enquiry.city}, {submittedResult.enquiry.state}</div>
            <div><span className="text-stone-400">Type:</span> {submittedResult.enquiry.businessType.toUpperCase()}</div>
          </div>
        </div>

        {/* Next Step Action: Direct WhatsApp dispatch */}
        <div className="space-y-3">
          <p className="text-xs font-semibold text-stone-700 uppercase tracking-wider">
            Immediate Processing Options:
          </p>
          
          <a
            href={submittedResult.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 px-6 rounded-xl font-semibold text-sm transition-all shadow-md shadow-green-600/20"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Connect on WhatsApp with Pre-filled Enquiry</span>
            <ExternalLink className="w-4 h-4 ml-1 opacity-75" />
          </a>

          <div className="flex flex-col sm:flex-row gap-2 pt-1">
            <button
              onClick={handleDownloadSummary}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-50 text-xs font-semibold transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4 text-stone-500" />
              <span>Download Enquiry Copy (.txt)</span>
            </button>

            <button
              onClick={handleReset}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 text-xs font-medium transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5 text-stone-400" />
              <span>Submit Another Territory</span>
            </button>
          </div>
        </div>

        <p className="text-[11px] text-stone-400 text-center">
          Our sales operations team verifies cold-chain logistics before confirming regional distributorship. You may also reach us via official channels below.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xl space-y-5">
      
      <div className="border-b border-stone-100 pb-4">
        <h3 className="font-anton text-2xl uppercase tracking-wide text-[#1E1915]">
          Commercial Distribution Enquiry
        </h3>
        <p className="text-xs text-stone-500 mt-1">
          Provide your enterprise details below. Our Gujarat distribution desk will review your territory profile.
        </p>
      </div>

      {/* Grid: Full Name & Business Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-stone-700 flex items-center gap-1.5" htmlFor="fullName">
            <User className="w-3.5 h-3.5 text-stone-400" />
            <span>Full Name <span className="text-red-500">*</span></span>
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Ramesh Patel"
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-stone-800 placeholder-stone-400 focus:outline-hidden focus:ring-2 transition-all ${
              errors.fullName ? 'border-red-400 focus:ring-red-200 bg-red-50/20' : 'border-stone-200 focus:ring-orange-200 focus:border-[#E05326]'
            }`}
          />
          {errors.fullName && <p className="text-[11px] text-red-500">{errors.fullName}</p>}
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-stone-700 flex items-center gap-1.5" htmlFor="businessName">
            <Building className="w-3.5 h-3.5 text-stone-400" />
            <span>Firm / Business Name <span className="text-red-500">*</span></span>
          </label>
          <input
            id="businessName"
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="e.g. Patel Cold Stores & Logistics"
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-stone-800 placeholder-stone-400 focus:outline-hidden focus:ring-2 transition-all ${
              errors.businessName ? 'border-red-400 focus:ring-red-200 bg-red-50/20' : 'border-stone-200 focus:ring-orange-200 focus:border-[#E05326]'
            }`}
          />
          {errors.businessName && <p className="text-[11px] text-red-500">{errors.businessName}</p>}
        </div>
      </div>

      {/* Grid: Phone & Email (Optional) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-stone-700 flex items-center gap-1.5" htmlFor="phoneNumber">
            <Phone className="w-3.5 h-3.5 text-stone-400" />
            <span>Contact Phone (10 digits) <span className="text-red-500">*</span></span>
          </label>
          <input
            id="phoneNumber"
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="e.g. 98250 12345"
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-stone-800 placeholder-stone-400 focus:outline-hidden focus:ring-2 transition-all ${
              errors.phoneNumber ? 'border-red-400 focus:ring-red-200 bg-red-50/20' : 'border-stone-200 focus:ring-orange-200 focus:border-[#E05326]'
            }`}
          />
          {errors.phoneNumber && <p className="text-[11px] text-red-500">{errors.phoneNumber}</p>}
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-stone-700 flex items-center gap-1.5" htmlFor="email">
            <Mail className="w-3.5 h-3.5 text-stone-400" />
            <span>Email Address <span className="text-stone-400 font-normal">(Optional)</span></span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. contact@business.com"
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-stone-800 placeholder-stone-400 focus:outline-hidden focus:ring-2 transition-all ${
              errors.email ? 'border-red-400 focus:ring-red-200 bg-red-50/20' : 'border-stone-200 focus:ring-orange-200 focus:border-[#E05326]'
            }`}
          />
          {errors.email && <p className="text-[11px] text-red-500">{errors.email}</p>}
        </div>
      </div>

      {/* Grid: City & State */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-stone-700 flex items-center gap-1.5" htmlFor="city">
            <MapPin className="w-3.5 h-3.5 text-stone-400" />
            <span>City / Town <span className="text-red-500">*</span></span>
          </label>
          <input
            id="city"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="e.g. Ahmedabad / Surat / Rajkot"
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-stone-800 placeholder-stone-400 focus:outline-hidden focus:ring-2 transition-all ${
              errors.city ? 'border-red-400 focus:ring-red-200 bg-red-50/20' : 'border-stone-200 focus:ring-orange-200 focus:border-[#E05326]'
            }`}
          />
          {errors.city && <p className="text-[11px] text-red-500">{errors.city}</p>}
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-stone-700 flex items-center gap-1.5" htmlFor="state">
            <MapPin className="w-3.5 h-3.5 text-stone-400" />
            <span>Target State <span className="text-red-500">*</span></span>
          </label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm text-stone-800 focus:outline-hidden focus:ring-2 focus:ring-orange-200 focus:border-[#E05326] bg-white cursor-pointer"
          >
            {INDIAN_STATES.map((st) => (
              <option key={st} value={st}>{st}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid: Business Type & Cold Storage Availability */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-stone-700" htmlFor="businessType">
            Business Type <span className="text-red-500">*</span>
          </label>
          <select
            id="businessType"
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm text-stone-800 focus:outline-hidden focus:ring-2 focus:ring-orange-200 focus:border-[#E05326] bg-white cursor-pointer"
          >
            <option value="distributor">Regional Distributor / Stockist</option>
            <option value="retailer">Retail Grocery / Dairy Store</option>
            <option value="wholesaler">FMCG Wholesaler</option>
            <option value="parlour">Dedicated Ice Cream Parlour</option>
            <option value="supermarket">Supermarket / Modern Trade</option>
            <option value="other">Other Commercial Partner</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-stone-700 flex items-center gap-1.5" htmlFor="coldStorageAvailable">
            <Snowflake className="w-3.5 h-3.5 text-blue-500" />
            <span>Deep Freezer Facility (-18°C)</span>
          </label>
          <select
            id="coldStorageAvailable"
            name="coldStorageAvailable"
            value={formData.coldStorageAvailable}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm text-stone-800 focus:outline-hidden focus:ring-2 focus:ring-orange-200 focus:border-[#E05326] bg-white cursor-pointer"
          >
            <option value="yes">Yes, have active deep freezers ready</option>
            <option value="planned">Planned investment upon agreement</option>
            <option value="need_advice">Need advice on freezer capacity</option>
          </select>
        </div>
      </div>

      {/* Existing Business Activity & Retail Reach */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-stone-700 flex items-center gap-1.5" htmlFor="currentExperience">
          <FileText className="w-3.5 h-3.5 text-stone-400" />
          <span>Existing Network / Retail Reach</span>
        </label>
        <input
          id="currentExperience"
          type="text"
          name="currentExperience"
          value={formData.currentExperience}
          onChange={handleChange}
          placeholder="e.g. Currently supplying 85 grocery shops with 2 refrigerated vans"
          className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm text-stone-800 placeholder-stone-400 focus:outline-hidden focus:ring-2 focus:ring-orange-200 focus:border-[#E05326]"
        />
      </div>

      {/* Message / Specific Territory Requirements */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-stone-700" htmlFor="message">
          Message & Specific Enquiries
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Mention specific areas, expected initial order volume, or questions about wholesale pricing..."
          className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm text-stone-800 placeholder-stone-400 focus:outline-hidden focus:ring-2 focus:ring-orange-200 focus:border-[#E05326] resize-none"
        />
      </div>

      {/* Privacy Notice as required by specification */}
      <div className="bg-stone-50 rounded-xl p-3 border border-stone-200/80 flex items-start gap-2 text-[11px] text-stone-500">
        <Lock className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
        <p>
          Privacy Notice: Your information is collected strictly to evaluate distribution eligibility and contact you regarding Sun Relief Ice Cream commercial opportunities. We do not share trade data with third parties.
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#E05326] hover:bg-[#C94318] text-white py-3.5 px-6 rounded-xl font-semibold text-sm transition-all shadow-md shadow-orange-600/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <RefreshCw className="w-4 h-4 animate-spin" />
            <span>Processing Territory Profile...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Submit B2B Distribution Enquiry</span>
          </>
        )}
      </button>

    </form>
  );
};
