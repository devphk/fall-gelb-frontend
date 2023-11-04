export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at?: any;
  created_at: string;
  updated_at: string;
  picture?: any;
  status: boolean;
  username: string;
  lastname: string;
}

export interface UserDataTable {
  id: number;
  name: string;
  email: string;
  status: string;
  username: string;
  lastname:string;
  }

export interface UserExport {
  title: string;
  info:  Info;
}

export interface Info {
  id:                number;
  name:              string;
  email:             string;
  email_verified_at: null;
  created_at:        Date;
  updated_at:        Date;
  picture:           null;
  status:            boolean;
  username:          string;
  lastname:          string;
}

