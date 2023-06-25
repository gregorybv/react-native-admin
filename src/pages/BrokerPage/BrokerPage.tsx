import React from 'react';
import {View, Text} from 'react-native';
import {IBrokerPageProps} from "../../models/IBrokerPage";

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

