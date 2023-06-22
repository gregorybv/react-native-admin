import React from 'react';
import {View, TouchableOpacity, Button, Text, FlatList, StyleSheet} from 'react-native';

interface ITableData {
    firstName: string;
    lastName: string;
    email: string | number
}

const Row: React.FC<ITableData> = ({firstName, lastName, email}) => (
    <View style={styles.row}>
        <Text style={styles.cell}>{firstName}</Text>
        <Text style={styles.cell}>{lastName}</Text>
        <Text style={styles.cell}>{email}</Text>
    </View>
);

const Header = () => (
    <View style={styles.row}>
        <Text style={styles.header}>First Name</Text>
        <Text style={styles.header}>Last Name</Text>
        <Text style={styles.header}>Email</Text>
    </View>
);


interface BrokersPageProps {
    navigation: any;
}

const BrokersPage: React.FC<BrokersPageProps> = ({navigation}) => {
    const handleButtonPress = () => {
        navigation.navigate('Страница брокера');
    };

    const tableData: ITableData[] = [
        {firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com'},
        {firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com'},
        {firstName: 'Bob', lastName: 'Johnson', email: 'bob.johnson@example.com'},
        {firstName: 'Bob', lastName: 'Johnson', email: 'bob.johnson@example.com'},
        {firstName: 'Bob', lastName: 'Johnson', email: 'bob.johnson@example.com'},
        {firstName: 'Bob', lastName: 'Johnson', email: 'bob.johnson@example.com'},
        {firstName: 'Bob', lastName: 'Johnson', email: 'bob.johnson@example.com'},
        {firstName: 'Bob', lastName: 'Johnson', email: 'bob.johnson@example.com'},
    ];

    return (
        <View>
            <TouchableOpacity onPress={handleButtonPress}>
                <Button onPress={handleButtonPress} title={'Перейти на страницу брокера'}></Button>
            </TouchableOpacity>
            <FlatList
                data={tableData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => <Row {...item} />}
                ListHeaderComponent={Header}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    cell: {
        flex: 1,
    },
    header: {
        fontWeight: 'bold',
        flex: 1,
    },
});

export default BrokersPage;
