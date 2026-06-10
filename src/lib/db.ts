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

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export const db = {
  getInquiries: async (): Promise<Inquiry[]> => {
    try {
      const response = await fetch(`${API_URL}/inquiries`);
      if (!response.ok) throw new Error('Failed to fetch inquiries');
      return await response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  },

  insertInquiry: async (inquiryData: Omit<Inquiry, 'id' | 'status' | 'created_at' | 'updated_at'>): Promise<Inquiry> => {
    const response = await fetch(`${API_URL}/inquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inquiryData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit inquiry');
    }
    
    return await response.json();
  },

  updateInquiryStatus: async (id: string, status: InquiryStatus): Promise<Inquiry | null> => {
    try {
      const response = await fetch(`${API_URL}/inquiries/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });
      
      if (!response.ok) throw new Error('Failed to update inquiry status');
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  }
};
