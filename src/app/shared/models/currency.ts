export interface CurrencyPost {
  name: string;
  code: string;
  decimals: number;
}

export interface CurrencyResponse {
  id: number;
  code: string;
  name: string;
  decimals: number;
  created_at?: any;
  updated_at?: any;
}

export interface CurrencyDataTable {
  id: number;
  code: string;
  name: string;
  decimals: number;
}
