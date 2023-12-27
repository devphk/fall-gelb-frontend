
export interface ConceptType {
  id: number;
  name: string;
  code: string;
}

export interface Concept {
  id: number;
  name: string;
  concept_type_id: number;
  for_sale: boolean;
  for_purchase: boolean;
  created_at: string;
  updated_at: string;
  retention_concept_id?: number;
  concept_customs?: Conceptcustoms;
  concept_ground_transportation?: Conceptgroundtransportation;
  concept_international_freight?: Conceptinternationalfreight;
  concept_storage?: Conceptstorage;
}

interface Conceptstorage {
  id: number;
  concept_id: number;
  customs_type_id: number;
  cargo_type_id: number;
  region: string;
}

interface Conceptinternationalfreight {
  id: number;
  concept_id: number;
  origin: string;
  destination: string;
  transport_type_id: number;
}

interface Conceptgroundtransportation {
  id: number;
  concept_id: number;
  origin: string;
  destination: string;
}

interface Conceptcustoms {
  id: number;
  concept_id: number;
  customs_id: number;
  customs_type_id: number;
}
