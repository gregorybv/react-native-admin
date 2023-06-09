import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './src/models/types';
import HomePage from './src/pages/HomePage/HomePage';
import BrokersPage from './src/pages/BrokersPage/BrokersPage';
import BrokerPage from './src/pages/BrokerPage/BrokerPage';

const Stack = createStackNavigator<RootStackParamList>();

function App() {
    return (

        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: styles.header,
                    headerTitleStyle: styles.headerTitle,
                }}
            >
                <Stack.Screen name="Домашняя страница" component={HomePage}/>
                <Stack.Screen name="Брокеры" component={BrokersPage}/>
                <Stack.Screen name="Страница брокера" component={BrokerPage}/>
            </Stack.Navigator>
        </NavigationContainer>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#B8FCD8'
    },
    header: {
        backgroundColor: '#333',
    },
    headerTitle: {
        color: 'white',
    },
});

export default App;
