import React from 'react';
import {View, Text} from 'react-native';

interface IBrokerPageProps {
    route: any;
}

const BrokerPage: React.FC<IBrokerPageProps> = ({route}) => {
    const {firstName, lastName, email} = route.params;

    return (
        <View>
            <Text>Название: {firstName}</Text>
            <Text>Логин: {lastName}</Text>
            <Text>Email: {email}</Text>
        </View>
    );
};

export default BrokerPage;

