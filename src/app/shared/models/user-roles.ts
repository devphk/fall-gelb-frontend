export interface UserRole {
  id?: number;
  name: string;
  status: boolean;
}

export interface UserRolesResponse {
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

export interface UserRolePost {
  role_id: number[];
}
