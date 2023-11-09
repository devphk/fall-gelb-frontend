export interface userRole {
  id?: number;
  name: string;
  status: boolean;
}

export interface userRolesResponse {
  id: number;
  name: string;
  guard_name: string;
  created_at: string;
  updated_at: string;
  pivot: Pivot;
}

interface Pivot {
  model_type: string;
  model_id: number;
  role_id: number;
}
