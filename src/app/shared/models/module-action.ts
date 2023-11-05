export interface ModuleAction {
  name: string;
  description: string;
  resources: Resource[];
}

interface Resource {
  name: string;
  description: string;
  actions: Action[];
}

interface Action {
  id: number;
  name: string;
  active: boolean;
}
