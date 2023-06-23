import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RootStackParamList} from "../../types";


type HomePageRouteProp = RouteProp<RootStackParamList, 'Домашняя страница'>;
type HomePageNavigationProp = NavigationProp<RootStackParamList, 'Домашняя страница'>;

type HomePageProps = {
    route: HomePageRouteProp;
    navigation: HomePageNavigationProp;
};
const HomePage: React.FC<HomePageProps> = ({navigation}) => {
    const handleButtonPress = () => {
        navigation.navigate('Брокеры');
    };


    return (
        <View>
            <TouchableOpacity onPress={handleButtonPress}>
                <Image style={{marginLeft: '27%', marginTop: '45%', width: 170}}
                       source={require('../../assets/image/robot.png')}/>
            </TouchableOpacity>

        </View>
    );
};

export default HomePage


