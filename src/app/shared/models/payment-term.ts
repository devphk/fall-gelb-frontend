export interface PaymenTermTable {
  id: number;
  name: string;
}

export interface PaymenTermResponse {
  id: number;
  name: string;
  payment_term_items: PaymentTermItem[];
}

interface PaymentTermItem {
  id: number;
  payment_term_id: number;
  percentage: number;
  days: number;
}

export interface PaymentTermPost {
  name: string;
  items: Item[];
}

interface Item {
  days: number;
  percentage: number;
}
