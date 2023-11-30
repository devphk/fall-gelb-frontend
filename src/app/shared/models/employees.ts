export interface Employee {
  id: number;
  entity_id: number;
  identification_card: string;
  departament_id: number;
  admission_date: string;
  contract_type_id: number;
  currency_id: number;
  basic_salary: number;
  schedule_start_time: string;
  schedule_end_time: string;
  employee_status_id: number;
  payment_frequency_id: number;
  entity: Entity;
  departament: Departament;
  contract_type: Contracttype;
  currency: Currency;
  employee_status: Contracttype;
  payment_frequency: Paymentfrequency;
}

export interface Paymentfrequency {
  id: number;
  name: string;
  code: string;
  period: string;
  quantity: number;
}

export interface Currency {
  id: number;
  code: string;
  name: string;
  decimals: number;
  created_at?: any;
  updated_at: string;
}

export interface Contracttype {
  id: number;
  name: string;
  code: string;
}

export interface Departament {
  id: number;
  name: string;
  departament_id?: any;
}

export interface Entity {
  id: number;
  name: string;
  phone: string;
  email: string;
  active: boolean;
  address: string;
  created_at: string;
  updated_at: string;
}

export interface EmployeeDataTable {
  id:number;
  name:string;
  phone:{
    value:string;
    mask:string;
  }
  email:string;
  address:string;
  currency_id: number;
  basic_salary: number;
  identification_card: string;
  employee_status_id: number;
  departament_id: number;
  schedule_start_time: string;
  schedule_end_time: string;
  admission_date: string;
  payment_frequency: number;
  contract_type: number;
  active: boolean;
}

export interface EmployeePost {
  name: string;
  phone: string;
  email: string;
  active: boolean;
  address: string;
  identification_card: string;
  departament_id: number;
  admission_date: string;
  contract_type_id: number;
  basic_salary: number;
  schedule_start_time: string;
  schedule_end_time: string;
  employee_status_id: number;
  payment_frequency_id: number;
}