export interface ProviderPost {
  name: string;
  phone: string;
  email: string;
  active: boolean;
  address: string;
  special_tax_payer: boolean;
  iva_retention: number;
  person_type_id: number;
  provider_type_id: number;
  is_national: boolean;
}
export interface ProviderResponse {
  id: number;
  entity_id: number;
  special_tax_payer: boolean;
  iva_retention: number;
  person_type_id: number;
  provider_type_id: number;
  is_national: boolean;
  provider_transport_type_id?: number;
  entity: Entity;
}

interface Entity {
  id: number;
  name: string;
  phone: string;
  email: string;
  active: boolean;
  address: string;
  created_at: string;
  updated_at: string;
}

export interface ProviderDataTabla {
  id: number;
  name: string;
  phone: string;
  email: string;
  active: boolean;
  address: string;
  special_tax_payer: boolean;
  iva_retention: number;
  person_type_id: number;
  provider_type_id: number;
  is_national: boolean;
  provider_transport_type_id?: number;
}

export interface ProviderServices {
  id: number;
  provider_id: number;
  concept_id: number;
  amount: number;
  unit_id: number;
  payment_term_id: number;
  currency_id: number;
  validity_date: string;
  iva: boolean;
}
export interface ProviderServicesDataTable {
  id: number;
  amount: number;
  validity_date: string;
  concept_id: number;
  concept_name?: string;
  unit_id?: number;
  currency_id?: number;
  iva?: boolean;
  payment_term_id?: number;

}

export interface ProviderServiceData {
  concept_id: number;
  amount: number;
  unit_id: number;
  payment_term_id: number;
  currency_id: number;
  validity_date: string | null;
  iva: boolean;
}