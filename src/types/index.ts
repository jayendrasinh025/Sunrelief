export type ProductCategory = 'all' | 'sticks' | 'cones' | 'tubs';

export interface Product {
  id: string;
  name: string;
  flavour: string;
  category: 'sticks' | 'cones' | 'tubs';
  format: string;
  tag: string;
  image: string;
  accentColor: string;
  bgLight: string;
  heroHeadline?: string;
  description: string;
  features: string[];
  packagingType: string;
  servingFormat: string;
  targetOccasion: string;
}

export type BusinessType = 
  | 'distributor'
  | 'retailer'
  | 'wholesaler'
  | 'parlour'
  | 'supermarket'
  | 'other';

export interface DistributorEnquiry {
  id?: string;
  fullName: string;
  businessName: string;
  phoneNumber: string;
  email?: string;
  city: string;
  state: string;
  businessType: BusinessType;
  currentExperience: string;
  coldStorageAvailable: 'yes' | 'planned' | 'need_advice';
  message: string;
  submittedAt?: string;
}

export interface FormValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}
