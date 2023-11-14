export interface ModuleAction {
  name: string;
  description: string;
  resources: Resource[];
}

export interface Resource {
  name: string;
  description: string;
  actions: Action[];
}

export interface Action {
  id: number;
  name: string;
  active: boolean;
}
