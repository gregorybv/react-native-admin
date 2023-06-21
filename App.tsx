import {StyleSheet, Text, View, Image} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator, StackScreenProps} from "@react-navigation/stack";
import {HomePage, HomeScreenOptions, HomePageProps} from "./src/pages/HomePage/HomePage";
import BrokersPage from "./src/pages/BrokersPage/BrokersPage";
import brokerPage from "./src/pages/BrokerPage/BrokerPage";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Домашняя страница' component={HomePage} options={HomeScreenOptions}/>
                <Stack.Screen name='BrokersPage' component={BrokersPage}/>
                <Stack.Screen name='Страница брокера' component={brokerPage}/>
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

