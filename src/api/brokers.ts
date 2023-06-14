import {protectedFetch} from './api';
import {IBroker, IBrokerCreateParameters, IBrokerUpdateParameters,} from './brokers.interfaces'
import {useMutation, useQuery, useQueryClient} from 'react-query';
import {notification} from 'antd';

export const getBrokers = async (): Promise<IBroker[]> => {
    return await protectedFetch<IBroker[]>('/admin/brokers', {
        method: 'GET',
    });
};

export const createBroker = async (
    parameters: IBrokerCreateParameters
): Promise<IBroker> => {
    return await protectedFetch<IBroker>('/admin/brokers', {
        method: 'POST',
        body: JSON.stringify(parameters),
    });
};

export const GET_BROKERS_QUERY_KEY = () => 'brokers';
export const useBrokers = () => {
    const client = useQueryClient();
    const createBrokerMutation = useMutation(
        `${GET_BROKERS_QUERY_KEY()}/create`,
        async (parameters: IBrokerCreateParameters) => {
            await client.cancelQueries(GET_BROKERS_QUERY_KEY());

            return await createBroker(parameters);
        },
        {
            onSuccess: async () => {
                await client.invalidateQueries([GET_BROKERS_QUERY_KEY()]);
            },
            onError: async () => {
                notification.error({
                    message: 'Брокер с таким названием уже существует',
                });
            },
        }
    );

    const query = useQuery(
        GET_BROKERS_QUERY_KEY(),
        async () => await getBrokers(),
        {}
    );

    return {
        query,
        createBrokerMutation,
    };
};

export const GET_BROKER_QUERY_KEY = (brokerId: number) => `broker/${brokerId}`;

export const useBroker = (brokerId: number) => {
    const client = useQueryClient();

    const query = useQuery(
        [GET_BROKER_QUERY_KEY(brokerId)],
        async () => await getBrokerById(brokerId),
        {}
    );

    const activateBrokerMutation = useMutation(
        `${GET_BROKER_QUERY_KEY(brokerId)}/activate`,
        async () => {
            await client.cancelQueries(GET_BROKER_QUERY_KEY(brokerId));
            await activateBrokerById(brokerId);
        },
        {
            onSuccess: async () => {
                await client.invalidateQueries([GET_BROKER_QUERY_KEY(brokerId)]);
                notification.success({
                    message: 'Брокер успешно активирован',
                });
            },
        }
    );

    const deactivateBrokerMutation = useMutation(
        `${GET_BROKER_QUERY_KEY(brokerId)}/deactivate`,
        async () => {
            await client.cancelQueries(GET_BROKER_QUERY_KEY(brokerId));
            await deactivateBrokerById(brokerId);
        },
        {
            onSuccess: async () => {
                await client.invalidateQueries([GET_BROKER_QUERY_KEY(brokerId)]);
                notification.success({
                    message: 'Брокер успешно деактивирован',
                });
            },
        }
    );

    const updateBrokerMutation = useMutation(
        `${GET_BROKER_QUERY_KEY(brokerId)}/update`,
        async (data: { code: string; fullName: string }) => {
            const {code, fullName} = data;
            await client.cancelQueries(GET_BROKER_QUERY_KEY(brokerId));
            await updateBrokerById({id: brokerId, code: code, fullName: fullName});
        },
        {
            onSuccess: async () => {
                await client.invalidateQueries([GET_BROKER_QUERY_KEY(brokerId)]);
                notification.success({
                    message: 'Брокер успешно обновлен',
                });
            },
        }
    );

    return {
        query,
        activateBrokerMutation,
        deactivateBrokerMutation,
        updateBrokerMutation,
    };
};

export const getBrokerById = async (brokerId: number): Promise<IBroker> => {
    return await protectedFetch<IBroker>(`/admin/brokers/${brokerId}`);
};

export const deactivateBrokerById = async (
    brokerId: number
): Promise<IBroker> => {
    return await protectedFetch<IBroker>(
        `/admin/brokers/deactivate/${brokerId}`,
        {
            method: 'DELETE',
        }
    );
};

export const activateBrokerById = async (
    brokerId: number
): Promise<IBroker> => {
    return await protectedFetch<IBroker>(
        `/admin/brokers/activate/${brokerId}`,
        {
            method: 'PATCH',
        }
    );
};

export const updateBrokerById = async (
    request: IBrokerUpdateParameters = {}
): Promise<IBroker> => {
    return await protectedFetch<IBroker>(
        `/admin/brokers/${request.id}`,
        {
            method: 'PATCH',
            body: JSON.stringify(request),
        }
    );
};
