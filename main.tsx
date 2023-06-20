import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RouterProvider} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import {ConfigProvider} from 'antd';
import 'moment/locale/ru';

import router from "./src/Router";
import './styles/index.css';
// @ts-ignore
import * as ReactDOM from 'expo/build/launch/createRoot.native';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false}/>
        <ConfigProvider>
            <NavigationContainer>
                <RouterProvider router={router}/>
            </NavigationContainer>
        </ConfigProvider>
    </QueryClientProvider>
);

