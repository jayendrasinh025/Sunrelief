import { DistributorEnquiry, FormValidationResult } from '../types';

export function validateDistributorEnquiry(data: Partial<DistributorEnquiry>): FormValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  if (!data.businessName || data.businessName.trim().length < 2) {
    errors.businessName = 'Please enter your firm or business name.';
  }

  // Validate phone number: remove non-digits, ensure 10+ digits
  const cleanPhone = (data.phoneNumber || '').replace(/\D/g, '');
  if (!cleanPhone || cleanPhone.length < 10) {
    errors.phoneNumber = 'Please provide a valid 10-digit contact number.';
  }

  // Validate optional email
  if (data.email && data.email.trim().length > 0) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      errors.email = 'Please provide a valid email address, or leave it blank.';
    }
  }

  if (!data.city || data.city.trim().length < 2) {
    errors.city = 'Please specify your city or town.';
  }

  if (!data.state || data.state.trim().length === 0) {
    errors.state = 'Please select your state.';
  }

  if (!data.businessType) {
    errors.businessType = 'Please select your business type.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

export function generateEnquiryReference(): string {
  const dateStr = new Date().toISOString().slice(2, 10).replace(/-/g, '');
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  return `SR-B2B-${dateStr}-${randomSuffix}`;
}
