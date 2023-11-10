export interface BankAcount {}

export interface BankAccountDataTable {
  id: number;
  bankId: number;
  bankName: string;
  numberAccount: string;
  currencyId: number;
  currencyName: string;
}

export interface BankAcountResponse {
  id: number;
  account_number: string;
  bank_id: number;
  currency_id: number;
  order: number;
  visible: boolean;
  created_at: string;
  updated_at: string;
  bank: Bank;
  currency: Currency;
}

interface Currency {
  id: number;
  code: string;
  name: string;
  decimals: number;
  created_at?: any;
  updated_at?: any;
}

interface Bank {
  id: number;
  name: string;
  created_at?: any;
  updated_at?: any;
}
