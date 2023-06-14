import {userManager} from './userManager';
import {useCallback, useMemo, useState} from 'react';

export const API_URL = import.meta.env.VITE_API_URL;
export const protectedFetch = async <T>(
    path: string,
    params: RequestInit = {},
    customApiUrl: string | undefined = undefined
): Promise<T> => {
    const user = await userManager.getUser();

    if (!user) {
        throw new Error('Unauthorized protected request');
    }

    const token = user.access_token;
    const res = await fetch(`${customApiUrl ?? API_URL}${path}`, {
        ...params,

        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            ...(params.headers ?? {}),
        },
    });

    if (res.status === 401) {
        await userManager.signinSilent();
        const user = await userManager.getUser();

        if (!user) {
            throw new Error('Authorization expired');
        }

        return await protectedFetch(path, params, customApiUrl);
    }

    if (res.status === 403 || res.status === 500) {
        throw new ApiError(res.status);
    }

    const data = await res.json();

    if ('error' in data) {
        throw new ApiError(res.status, data as IApiError);
    }

    return data as T;
};

export class ApiError extends Error {
    error?: IApiError;
    status: number;

    constructor(status: number, error?: IApiError) {
        super();
        this.status = status;
        this.error = error;
    }
}

export interface IPagination {
    limit: number;
    offset: number;
}

export interface IFindResponse<T> {
    data: T[];
    pagination: IPagination;
}

export interface IFindRequest<TParameters> {
    parameters?: TParameters | null | undefined;
    pagination?: IPagination | null | undefined;
}

export interface IApiError {
    code: number;
    error: string;
    errorDescription: string;
}

export const usePagination = (initial?: IPagination) => {
    const [offset, setOffset] = useState<number>(initial?.offset ?? 0);
    const [limit, setLimit] = useState<number>(initial?.offset ?? 10);
    const setLimitWithCheck = useCallback(
        (limit: number) => {
            if (limit < 1) {
                throw new Error('Limit can\'t be less then one');
            }

            setLimit(limit);
        },
        [setLimit]
    );
    const setOffsetWithCheck = useCallback(
        (offset: number) => {
            if (offset < 0) {
                throw new Error('Offset can\'t be less then one');
            }

            setOffset(offset);
        },
        [setOffset]
    );
    const pagination = useMemo<IPagination>(
        () => ({
            limit,
            offset,
        }),
        [offset, limit]
    );

    return {
        pagination,
        setOffset: setOffsetWithCheck,
        setLimit: setLimitWithCheck,
    };
};
