import React from 'react';
import {View, TouchableOpacity, Button} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RootStackParamList} from "../../types";

type BrokersPageRouteProp = RouteProp<RootStackParamList, 'Брокеры'>;
type BrokersPageNavigationProp = NavigationProp<RootStackParamList, 'Брокеры'>;

type BrokersPageProps = {
    route: BrokersPageRouteProp;
    navigation: BrokersPageNavigationProp;
};
const BrokersPage: React.FC<BrokersPageProps> = ({navigation}) => {
    const handleButtonPress = () => {
        navigation.navigate('Страница брокера');
    };

    return (
        <View>
            {/*<Text>Домашняя страница</Text>*/}
            <TouchableOpacity onPress={handleButtonPress}>
                <Button onPress={handleButtonPress} title={'Перейти на страницу брокера'}></Button>
            </TouchableOpacity>
        </View>
    );
};

export default BrokersPage



