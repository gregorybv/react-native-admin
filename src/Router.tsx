import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {login, userManager} from "./api/userManager";
import {CallbackPage} from "./pages/CallbackPage/CallbackPage";
import {HomePage} from "./pages/HomePage/HomePage";
import {BrokersPage} from "./pages/BrokersPage/BrokersPage";
import {BrokerPage} from "./pages/BrokerPage/BrokerPage";
import {PageLayout} from "./pages/PageLayout/PageLayout";

const Stack = createStackNavigator();

const authLoader = async () => {
    const user = await userManager.getUser();

    if (!user) {
        await login();
    }

    return null;
};

const protectedRoute = (route) => {
    return {
        ...route,
        loader: authLoader,
    };
};

const router = () => {
    useEffect(() => {
        authLoader();
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={PageLayout}
                    options={{headerShown: false}}
                >
                    {() => (
                        <>
                            <Stack.Screen
                                name="Home"
                                component={HomePage}
                                options={{headerShown: false}}
                            />
                            <Stack.Screen
                                name="Brokers"
                                component={BrokersPage}
                                options={{headerShown: false}}
                            />
                            <Stack.Screen
                                name="Broker"
                                component={BrokerPage}
                                options={{headerShown: false}}
                            />
                        </>
                    )}
                </Stack.Screen>
                <Stack.Screen
                    name="Callback"
                    component={CallbackPage}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default router;
