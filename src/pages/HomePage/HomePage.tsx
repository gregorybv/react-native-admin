import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RootStackParamList} from "../../types";
import {StackNavigationOptions} from "@react-navigation/stack";

type HomePageRouteProp = RouteProp<RootStackParamList, 'Home'>;
type HomePageNavigationProp = NavigationProp<RootStackParamList, 'Home'>;

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
            <Text>HomePage</Text>
            <TouchableOpacity onPress={handleButtonPress}>
                <Text>Перейти на вторую страницу</Text>
            </TouchableOpacity>
        </View>
    );
};

const HomeScreenOptions: StackNavigationOptions = {
    headerTitle: () => (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../../assets/image/logo.svg')} style={{width: 24, height: 24, marginRight: 8}}/>
            <Text>Домашняя страница</Text>
        </View>
    ),
};

export {HomePage, HomeScreenOptions};
