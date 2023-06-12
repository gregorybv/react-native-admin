export interface ITariffPlans {
  id: number;
  order: number;
  name: string;
  comment: string;
  isActive: boolean;
  isPublic: boolean;
  userPermissions: number[];
}
