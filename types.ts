export interface Laptop {
  id: number;
  name: string;
  brand: string;
  processor: string;
  ram: string;
  storage: string;
  screen: string;
  price: number;
  imageUrl: string;
}

export interface Enquiry {
  id: string;
  name: string;
  mobile: string;
  email: string;
  location: string;
  laptopBrand: string;
  issueType: string;
  description: string;
  date: string;
  status: 'New' | 'Contacted' | 'Resolved';
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}