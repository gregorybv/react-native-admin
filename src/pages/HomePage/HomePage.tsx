import React from 'react';
import {Text, View, TouchableOpacity, Image, Button} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RootStackParamList} from "../../types";

type HomePageRouteProp = RouteProp<RootStackParamList, 'Домашняя страница'>;
type HomePageNavigationProp = NavigationProp<RootStackParamList, 'Домашняя страница'>;

type HomePageProps = {
    route: HomePageRouteProp;
    navigation: HomePageNavigationProp;
};
const HomePage: React.FC<HomePageProps> = ({route, navigation}) => {
    const handleButtonPress = () => {
        navigation.navigate('BrokersPage');
    };

    return (
        <View>
            {/*<Text>Домашняя страница</Text>*/}
            <TouchableOpacity onPress={handleButtonPress}>
                <Button onPress={handleButtonPress} title={'Перейти на вторую страницу'}></Button>
            </TouchableOpacity>
        </View>
    );
};

export default HomePage


