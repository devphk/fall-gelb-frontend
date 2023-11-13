export interface CurrencyRates {
  id: number;
  currency_a_id: number;
  currency_b_id: number;
  amount: string;
  operation: string;
  datetime: string;
  active: boolean;
  created_at: string;
  updated_at: string;
  currency_a: Currency;
  currency_b: Currency;
}

export interface Currency {
  id: number;
  code: string;
  name: string;
  decimals: number;
  created_at?: any;
  updated_at?: any;
}

export interface CurrencyRatesDataTable {
    id: number;
    currencyIdA: number;
    currencyIdB: number;
    amount: string;
    operation: string;
    datetime: string;
    active: boolean;
    currencyNameA: string;
    currencyNameB: string;
  }