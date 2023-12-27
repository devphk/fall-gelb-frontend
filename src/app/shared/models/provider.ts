import { Concept } from "./concept";

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

export interface ProviderDataTabla {
  id: number;
  name: string;
  phone: {
    value: string,
    mask: string
  };
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

export interface ProviderServiceData {
  concept_id: number;
  amount: number;
  unit_id: number;
  payment_term_id: number;
  currency_id: number;
  validity_date: string | null;
  iva: boolean;
}

export interface ProviderDocumentPost {
  resource_id: number;
  resource: string;
  document_type_id: number;
  admission_date?: string;
  file: string;
  document_number?: string;
}

export interface DocumentType {
  id: number;
  name: string;
  expired_days: number;
}

export interface ProviderDocuments {
  id: number;
  name: string;
  file_types: string[];
  required_document_number: boolean;
  expired_days: number;
  created_at: string;
  updated_at: string;
  entity_document_item: Entitydocumentitem;
  file:string;
  document_number?: any;
  admission_date?: any;
  documentID?: number;
}

export interface Entitydocumentitem {
  id: number;
  resource_id: number;
  resource: string;
  document_type_id: number;
  admission_date?: any;
  expired_date: string;
  file: string;
  document_number?: any;
  created_at: string;
  updated_at: string;
  created_by: number;
}

export interface EditProviderDocumentPost {
  document_type_id?: number;
  document_number?: string | null;
  admission_date?:string | null;
  file: string;
}

export interface ProviderServices {
  id: number;
  provider_id: number;
  concept_id: number;
  amount: string;
  unit_id: number;
  payment_term_id: number;
  currency_id: number;
  validity_date: string;
  iva: boolean;
  provider: Provider;
  concept: Concept;
  unit: Unit;
  payment_term: Unit;
  currency: Currency;
  concept_name?: string;
}

export interface Currency {
  id: number;
  code: string;
  name: string;
  decimals: number;
  created_at?: any;
  updated_at?: any;
}

export interface Unit {
  id: number;
  name: string;
}

export interface Provider {
  id: number;
  entity_id: number;
  special_tax_payer: boolean;
  iva_retention: number;
  person_type_id: number;
  provider_type_id: number;
  is_national: boolean;
  provider_transport_type_id: number;
}

export interface ProviderGet {
  id: number;
  entity_id: number;
  special_tax_payer: boolean;
  iva_retention: number;
  person_type_id: number;
  provider_type_id: number;
  is_national: boolean;
  provider_transport_type_id?: number;
  entity: Entity;
  provider_type: Providertype;
  person_type: Persontype;
}

export interface Persontype {
  id: number;
  name: string;
  document_prefix: string;
}

export interface Providertype {
  id: number;
  name: string;
  code: string;
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
  last_name?: string;
}