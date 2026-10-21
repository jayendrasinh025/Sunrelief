import test from 'node:test';
import assert from 'node:assert/strict';
import { formatDistributorWhatsAppMessage, buildWhatsAppLink } from './whatsappFormatter.ts';
import { DistributorEnquiry } from '../types';

test('formats WhatsApp message with required information', () => {
  const enquiry: DistributorEnquiry = {
    fullName: 'Kiran Desai',
    businessName: 'Desai Dairy Hub',
    phoneNumber: '9898989898',
    city: 'Vadodara',
    state: 'Gujarat',
    businessType: 'wholesaler',
    currentExperience: '5 years running frozen foods',
    coldStorageAvailable: 'yes',
    message: 'Please send catalogue and MOQ.'
  };

  const message = formatDistributorWhatsAppMessage(enquiry, 'SR-B2B-TEST-001');
  assert.ok(message.includes('SUN RELIEF ICE CREAM'));
  assert.ok(message.includes('Ref: #SR-B2B-TEST-001'));
  assert.ok(message.includes('Kiran Desai'));
  assert.ok(message.includes('Desai Dairy Hub'));
  assert.ok(message.includes('Vadodara, Gujarat'));
  assert.ok(message.includes('Wholesale Stockist'));
  assert.ok(message.includes('Please send catalogue and MOQ.'));
});

test('builds valid WhatsApp click-to-chat URL with encoded params', () => {
  const url = buildWhatsAppLink('+91 98250 12345', 'Hello Sun Relief');
  assert.ok(url.startsWith('https://wa.me/919825012345?text=Hello%20Sun%20Relief'));
});
