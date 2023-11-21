
export interface ConceptType {
  id: number;
  name: string;
  code: string;
}

export interface RetentionConcept {
  id: number;
  name: string;
  natural_person: number;
  legal_person: number;
  created_at: string;
  updated_at: string;
  natural_person_code?: any;
  legal_person_code?: any;
}

export interface RetentionConceptTableData {
  id: number;
  name: string;
  natural_person: number;
  legal_person: number;
}
