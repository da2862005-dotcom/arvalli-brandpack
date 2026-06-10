export type InquiryStatus = 'new' | 'contacted' | 'quotation_sent' | 'closed';

export interface Inquiry {
  id: string;
  name: string;
  company_name: string;
  phone: string;
  email: string;
  requirement: string;
  budget: string;
  status: InquiryStatus;
  notes?: string;
  created_at: string;
  updated_at: string;
}

const STORAGE_KEY = 'novamens_inquiries';

// Initialize with some mock data if empty
const initializeDb = () => {
  if (!localStorage.getItem(STORAGE_KEY)) {
    const mockData: Inquiry[] = [
      {
        id: '1',
        name: 'Rajesh Patel',
        company_name: 'Patel Food Industries',
        phone: '+91 9876543210',
        email: 'rajesh@patelfoods.com',
        requirement: 'Looking for 5000 custom printed corrugated boxes for our new snack line.',
        budget: '₹50,000 – ₹1,00,000',
        status: 'new',
        created_at: new Date(Date.now() - 86400000).toISOString(),
        updated_at: new Date(Date.now() - 86400000).toISOString(),
      },
      {
        id: '2',
        name: 'Priya Shah',
        company_name: 'StyleMart Retail',
        phone: '+91 8765432109',
        email: 'priya@stylemart.in',
        requirement: 'Need premium shopping bags with logo printing.',
        budget: '₹25,000 – ₹50,000',
        status: 'contacted',
        created_at: new Date(Date.now() - 172800000).toISOString(),
        updated_at: new Date(Date.now() - 86400000).toISOString(),
      }
    ];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mockData));
  }
};

export const db = {
  getInquiries: async (): Promise<Inquiry[]> => {
    initializeDb();
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  insertInquiry: async (inquiryData: Omit<Inquiry, 'id' | 'status' | 'created_at' | 'updated_at'>): Promise<Inquiry> => {
    initializeDb();
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const newInquiry: Inquiry = {
      ...inquiryData,
      id: crypto.randomUUID(),
      status: 'new',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const data = localStorage.getItem(STORAGE_KEY);
    const inquiries: Inquiry[] = data ? JSON.parse(data) : [];
    inquiries.unshift(newInquiry); // add to top
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inquiries));
    return newInquiry;
  },

  updateInquiryStatus: async (id: string, status: InquiryStatus): Promise<Inquiry | null> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return null;
    
    const inquiries: Inquiry[] = JSON.parse(data);
    const index = inquiries.findIndex(i => i.id === id);
    if (index === -1) return null;

    inquiries[index] = {
      ...inquiries[index],
      status,
      updated_at: new Date().toISOString()
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(inquiries));
    return inquiries[index];
  }
};
