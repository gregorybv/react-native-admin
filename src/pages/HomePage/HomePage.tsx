import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Avatar} from 'react-native-paper';
import {HomePageProps} from "../../models/IHomePageProps";

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
