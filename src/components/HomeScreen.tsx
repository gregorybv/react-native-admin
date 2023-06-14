import React from 'react';
import {View, Text, Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BrokersPage} from "../pages/BrokersPage/BrokersPage";
import {Link} from "react-router-native";

type RootStackParamList = {
    Profile: undefined;
};

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export const HomeScreen: React.FC<ProfileScreenProps> = ({navigation}) => {
    return (
        <View>
            <Text>Brokers Page</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate<RootStackParamList, 'Profile'>}
            />
            <Link to='/brokers'>
                <BrokersPage/>
            </Link>
        </View>
    );
};


