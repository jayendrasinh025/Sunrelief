import { DistributorEnquiry } from '../types';

export function formatDistributorWhatsAppMessage(enquiry: DistributorEnquiry, refNumber?: string): string {
  const ref = refNumber || 'WEBSITE-DIRECT';
  const typeLabels: Record<string, string> = {
    distributor: 'Authorized Distributor',
    retailer: 'Retail Outlet / Store',
    wholesaler: 'Wholesale Stockist',
    parlour: 'Ice Cream Parlour',
    supermarket: 'Supermarket / Modern Trade',
    other: 'General Commercial Partner'
  };

  const coldLabels: Record<string, string> = {
    yes: 'Yes, existing cold room / deep freezers ready (-18°C)',
    planned: 'Planned investment upon dealership agreement',
    need_advice: 'Need guidance on freezer setup & capacity'
  };

  const lines = [
    `*SUN RELIEF ICE CREAM - B2B PARTNERSHIP ENQUIRY*`,
    `Ref: #${ref}`,
    ``,
    `*Contact Details:*`,
    `• Name: ${enquiry.fullName.trim()}`,
    `• Business: ${enquiry.businessName.trim()}`,
    `• Phone: ${enquiry.phoneNumber.trim()}`,
    enquiry.email ? `• Email: ${enquiry.email.trim()}` : null,
    `• Location: ${enquiry.city.trim()}, ${enquiry.state.trim()}`,
    ``,
    `*Business Profile:*`,
    `• Model: ${typeLabels[enquiry.businessType] || enquiry.businessType}`,
    `• Deep Freezer Setup: ${coldLabels[enquiry.coldStorageAvailable] || enquiry.coldStorageAvailable}`,
    enquiry.currentExperience ? `• Existing Network: ${enquiry.currentExperience.trim()}` : null,
    ``,
    enquiry.message ? `*Notes / Requirements:*\n"${enquiry.message.trim()}"\n` : null,
    `_Sent via Sun Relief official digital portal._`
  ].filter(Boolean);

  return lines.join('\n');
}

export function buildWhatsAppLink(phone: string, message: string): string {
  const cleanPhone = phone.replace(/\D/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
