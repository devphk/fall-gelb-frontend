export interface Customers {
  id: number;
  entity_id: number;
  special_tax_payer: boolean;
  biller_id: number;
  entity: Entity;
}

export interface Entity {
  id: number;
  name: string;
  phone: string;
  email: string;
  active: boolean;
  address: string;
  created_at: string;
  updated_at: string;
}

export interface CustomersDataTable {
  id: number;
  name: string;
  phone: string;
  address: string;
  biller: string;
  email:string;
  active: boolean;
  biller_id: number;
  special_tax_payer: boolean;
}

export interface Biller {
  id: number;
  name: string;
}