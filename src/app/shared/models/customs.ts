export interface Customs {
  id: number;
  name: string;
  address: string;
  latitude: string;
  longitude: string;
  created_at: string;
  updated_at: string;
  transport_types: TransportType[];
}

export interface CustomsDataTable {
  id: number;
  name: string;
  address: string;
  transport_types:TransportType[],
  latitude: string;
  longitude: string;
}

export interface CustomsExport {
  title: string;
  info:  customsInfo;
}

export interface customsInfo {
  id:              number;
  name:            string;
  address:         string;
  latitude:        string;
  longitude:       string;
  transport_types: TransportType[];
}

export interface TransportType {
  id:   number;
  name: string;
  code: string;
}

export interface Customtype {
  id: number;
  name: string;
  code: string;
}