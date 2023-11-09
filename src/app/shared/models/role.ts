export interface Role {
  id: number;
  name: string;
}

export interface RoleResponse {
  name: string;
  guard_name: string;
  updated_at: string;
  created_at: string;
  id: number;
}

export interface RolePermissionAdded {
  id: number;
  name: string;
  guard_name: string;
  created_at: string;
  updated_at: string;
}
