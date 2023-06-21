import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import {createStackNavigator} from "@react-navigation/stack";
import {HomePage} from "@/pages/HomePage/HomePage";
import {BrokersPage} from "@/pages/BrokersPage/BrokersPage";
import {BrokerPage} from "@/pages/BrokerPage/BrokerPage";
import {PageLayout} from "@/pages/PageLayout/PageLayout";
import {CallbackPage} from "@/pages/CallbackPage/CallbackPage";
import {login, userManager} from '@/api/userManager';
import {RouteObject} from "react-router-dom";

const Stack = createStackNavigator();
const queryClient = new QueryClient();

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

export const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false}/>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Root"
                        component={PageLayout}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="Home"
                        component={HomePage}
                    />
                    <Stack.Screen
                        name="Brokers"
                        component={BrokersPage}
                    />
                    <Stack.Screen
                        name="Broker"
                        component={BrokerPage}
                    />
                    <Stack.Screen
                        name="Callback"
                        component={CallbackPage}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </QueryClientProvider>
    );
}
