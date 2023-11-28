export interface EntityDocumentValidateResponse {
  id: number;
  entity_document_item_id: number;
  observations?: any;
  status: string;
  created_at: string;
  updated_at: string;
  validated_by?: any;
  entity_document_item: Entitydocumentitem;
}

interface Entitydocumentitem {
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
export interface EntityDocumentValidateObservation {
  status: string;
  observations?: any;
}

export interface EntityDocumentValidateFilter {
  status?: string;
  entity_document_item_id?: number;
  entity_type?: string;
}

export interface EntityDocumentValidateDataTable {
  id: number;
  observations?: any;
  status: string;
}
