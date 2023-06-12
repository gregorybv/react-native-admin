export interface IBroker {
  id: number;
  code: string | null;
  fullName: string;
  isActive: boolean;
  tariffPlans: number[];
}

export interface IBrokerCreateParameters {
  fullName: string;
  code: string;
  isActive: boolean;
}

export interface IBrokerUpdateParameters {
  id?: number;
  code?: string;
  fullName?: string;
}
