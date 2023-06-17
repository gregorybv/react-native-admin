import {createBrowserRouter, RouteObject} from 'react-router-dom';
import {CallbackPage} from './Callback';
import {login, userManager} from '@/api/userManager';
import React from 'react';
import {HomePage} from '@/pages/HomePage';
import {BrokersPage} from "@/pages/BrokersPage";
import {BrokerPage} from '@/pages/BrokerPage';
import {PageLayout} from '@/pages/PageLayout';

const authLoader = async () => {
    const user = await userManager.getUser();

    if (!user) {
        await login();
    }

    return null;
};

const protectedRoute = (route: RouteObject): RouteObject => {

    return {
        ...route,
        loader: authLoader,
    };
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <PageLayout/>,
        children: [
            protectedRoute({
                path: '',
                element: <HomePage/>,
            }),
            protectedRoute({
                path: 'brokers',
                element: <BrokersPage/>,
            }),
            protectedRoute({
                path: 'brokers/:id',
                element: <BrokerPage/>,
            }),
        ],
    },
    {
        path: '/callback',
        element: <CallbackPage/>,
    },
]);

export default router;
