export interface DriverDataPost {
  name: string;
  last_name:string;
  phone: string;
  email: string;
  active: boolean;
  address: string;
  is_self_employed: boolean;
  provider_id?: number | null;
}
export interface DriverDataTable {
  id: number;
  name: string;
  last_name: string;
  phone: string;
  email: string;
  active: boolean;
  address: string;
  is_self_employed: boolean;
  provider_id: number;
}

export interface DriverResponse {
  id: number;
  entity_id: number;
  is_self_employed: boolean;
  provider_id: number;
  entity: Entity;
}

interface Entity {
  id: number;
  name: string;
  last_name:string;
  phone: string;
  email: string;
  active: boolean;
  address: string;
  created_at: string;
  updated_at: string;
}
