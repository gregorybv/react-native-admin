// import React from 'react';
// import {View, TouchableOpacity, Image} from 'react-native';
// import {NavigationProp, RouteProp} from '@react-navigation/native';
// import {RootStackParamList} from "../../types";
//
//
// type HomePageRouteProp = RouteProp<RootStackParamList, 'Домашняя страница'>;
// type HomePageNavigationProp = NavigationProp<RootStackParamList, 'Домашняя страница'>;
//
// type HomePageProps = {
//     route: HomePageRouteProp;
//     navigation: HomePageNavigationProp;
// };
// const HomePage: React.FC<HomePageProps> = ({navigation}) => {
//     const handleButtonPress = () => {
//         navigation.navigate('Брокеры');
//     };
//
//
//     return (
//         <View>
//             <TouchableOpacity onPress={handleButtonPress}>
//                 <Image style={{marginLeft: '27%', marginTop: '45%', width: 170}}
//                        source={require('../../assets/image/robot.png')}/>
//             </TouchableOpacity>
//
//         </View>
//     );
// };
//
// export default HomePage
//
//

import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Avatar, Caption} from 'react-native-paper';

interface HomePageProps {
    navigation: any;
}

const HomePage: React.FC<HomePageProps> = ({navigation}) => {
    const handleButtonPress = () => {
        navigation.navigate('Брокеры');
    };

    return (
        <View style={{alignItems: 'center', marginTop: '35%'}}>
            <TouchableOpacity onPress={handleButtonPress}>
                <Avatar.Image size={170} source={require('../../assets/image/robot.png')}/>
            </TouchableOpacity>
            <View style={{
                position: 'absolute',
                top: '-5%',
                left: '15%',
                backgroundColor: '#fff',
                padding: 10,
                borderRadius: 10
            }}>
                <Text style={{fontSize: 20}}>Hello!</Text>
            </View>
        </View>
    );
};

export default HomePage;
