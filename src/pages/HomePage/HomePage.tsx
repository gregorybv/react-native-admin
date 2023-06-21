import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {useNavigation, NavigationProp, RouteProp} from '@react-navigation/native';
import {StackNavigationOptions} from "@react-navigation/stack";
import {RootStackParamList} from "../../types";

type HomePageRouteProp = RouteProp<RootStackParamList, 'Home'>;
type HomePageNavigationProp = NavigationProp<RootStackParamList, 'Home'>;

export type HomePageProps = {
    route: HomePageRouteProp;
    navigation: HomePageNavigationProp;
};

export const HomePage: React.FC<HomePageProps> = ({route, navigation}) => {
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

export const HomeScreenOptions: StackNavigationOptions = {
    headerTitle: () => (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../../assets/image/logo.svg')} style={{width: 24, height: 24, marginRight: 8}}/>
            <Text>Домашняя страница</Text>
        </View>
    ),
};

// export default {HomePage, HomeScreenOptions};
