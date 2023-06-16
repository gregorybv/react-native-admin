import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createRouter, RouterProvider} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import {ConfigProvider} from 'antd';
import 'moment/locale/ru';

import router from "./src/Router";
import './styles/index.css';
import * as ReactDOM from "expo/build/launch/createRoot.native";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false}/>
        <ConfigProvider>
            <NavigationContainer>
                <RouterProvider router={createRouter(router)}>
                    <View style={{flex: 1}}>
                        {/* Your app components go here */}
                    </View>
                </RouterProvider>
            </NavigationContainer>
        </ConfigProvider>
    </QueryClientProvider>
);

