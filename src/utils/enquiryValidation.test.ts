import test from 'node:test';
import assert from 'node:assert/strict';
import { validateDistributorEnquiry, generateEnquiryReference } from './enquiryValidation.ts';

test('validates correct distributor enquiry without errors', () => {
  const validData = {
    fullName: 'Rajesh Patel',
    businessName: 'Patel Cold Storage & Distribution',
    phoneNumber: '9825123456',
    email: 'rajesh@pateldistributors.com',
    city: 'Ahmedabad',
    state: 'Gujarat',
    businessType: 'distributor' as const,
    currentExperience: 'Supplying 120 retail shops across East Ahmedabad',
    coldStorageAvailable: 'yes' as const,
    message: 'Looking for exclusive distributor terms for North zone.'
  };

  const result = validateDistributorEnquiry(validData);
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('catches missing mandatory fields and invalid phone number', () => {
  const invalidData = {
    fullName: '',
    businessName: '',
    phoneNumber: '1234',
    city: '',
    state: '',
    businessType: undefined
  };

  const result = validateDistributorEnquiry(invalidData);
  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName, 'fullName should have error');
  assert.ok(result.errors.businessName, 'businessName should have error');
  assert.ok(result.errors.phoneNumber, 'phoneNumber should have error');
  assert.ok(result.errors.city, 'city should have error');
  assert.ok(result.errors.state, 'state should have error');
  assert.ok(result.errors.businessType, 'businessType should have error');
});

test('validates optional email formatting correctly', () => {
  const dataWithBadEmail = {
    fullName: 'Amit Shah',
    businessName: 'Shah Mart',
    phoneNumber: '+91 99988 77665',
    email: 'not-an-email',
    city: 'Surat',
    state: 'Gujarat',
    businessType: 'retailer' as const
  };

  const result = validateDistributorEnquiry(dataWithBadEmail);
  assert.equal(result.isValid, false);
  assert.ok(result.errors.email, 'bad email format should flag error');

  // Empty email is valid since it is optional
  const dataWithEmptyEmail = { ...dataWithBadEmail, email: '' };
  const validResult = validateDistributorEnquiry(dataWithEmptyEmail);
  assert.equal(validResult.isValid, true);
});

test('generates expected enquiry reference pattern', () => {
  const ref = generateEnquiryReference();
  assert.match(ref, /^SR-B2B-\d{6}-\d{4}$/);
});
