import React from 'react';
import {View, TouchableOpacity, Button} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {RootStackParamList} from "../../types";
import {Icon, IconComponentProvider} from '@react-native-material/core'
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

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
            {/*<Text>Домашняя страница</Text>*/}
            <TouchableOpacity onPress={handleButtonPress}>
                <Button onPress={handleButtonPress} title={'Перейти на страницу брокеров'}></Button>
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                    <Icon name="robot" style={{marginLeft: '12%', marginTop: '15%'}} size={290} color="grey"/>
                </IconComponentProvider>
            </TouchableOpacity>
        </View>
    );
};

export default HomePage


