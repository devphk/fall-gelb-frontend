export interface Configs {
  key: string;
  value: string;
  deletable: boolean;
  updated_at: string;
  created_at: string;
  id: number;
}

export interface ConfigsDataTable {
  id: number;
  key: string;
  value: string;
  deletable:boolean;
}