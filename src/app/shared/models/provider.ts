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