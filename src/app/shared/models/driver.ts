export interface DriverDataPost {
  name: string;
  phone: string;
  email: string;
  active: boolean;
  address: string;
  is_self_employed: boolean;
  provider_id: number;
}
export interface DriverDataTable {
  id: number;
  name: string;
  phone: string;
  email: string;
  active: boolean;
  address: string;
  is_self_employed: boolean;
  provider_id: number;
}

export interface DriverResponse {}
