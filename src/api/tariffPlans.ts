import {useQuery} from 'react-query';
import {ITariffPlans} from './tariffPlans.interfaces';
import {protectedFetch} from './api';

export const GET_TARIFF_PLANS = () => 'tariffPlans';
export const getTariffPlans = async (): Promise<ITariffPlans[]> => {
    return await protectedFetch<ITariffPlans[]>('/admin/tariffs');
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
