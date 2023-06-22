import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './src/types';
import HomePage from './src/pages/HomePage/HomePage';
import BrokersPage from './src/pages/BrokersPage/BrokersPage';
import BrokerPage from './src/pages/BrokerPage/BrokerPage';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Домашняя страница' component={HomePage}/>
                <Stack.Screen name='Страница брокеров' component={BrokersPage}/>
                <Stack.Screen name='Страница брокера' component={BrokerPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


