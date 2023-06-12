import { useQuery } from 'react-query';
import { ITariffPlans } from '../api/tariffPlans.interfaces';
import { protectedFetch } from '../api/api';

export const GET_TARIFF_PLANS = () => 'tariffPlans';
export const getTariffPlans = async (): Promise<ITariffPlans[]> => {
  const response = await protectedFetch<ITariffPlans[]>('/admin/tariffs');

  return response;
};
export const useTariffPlans = () => {
  const query = useQuery(
    [GET_TARIFF_PLANS],
    async () => await getTariffPlans(),
    {}
  );

  return {
    query,
  };
};
