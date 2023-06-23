import React from 'react';
import {View, TouchableOpacity, Button, Text, FlatList, StyleSheet} from 'react-native';

interface ITableData {
    id: number;
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
    const handleUserPress = (broker: ITableData) => {
        navigation.navigate('Страница брокера', broker);
    };

    const tableData: ITableData[] = [
        {id: 0, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com'},
        {id: 1, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com'},
        {id: 2, firstName: 'Bob', lastName: 'Johnson', email: 'bob.johnson@example.com'},
        {id: 3, firstName: 'Tom', lastName: 'Johnson', email: 'bob.johnson@example.com'},
        {id: 4, firstName: 'Jack', lastName: 'Johnson', email: 'bob.johnson@example.com'},
        {id: 5, firstName: 'Piter', lastName: 'Johnson', email: 'bob.johnson@example.com'},
        {id: 6, firstName: 'Merry', lastName: 'Johnson', email: 'bob.johnson@example.com'},
        {id: 7, firstName: 'Bred', lastName: 'Johnson', email: 'bob.johnson@example.com'},
    ];

    return (
        <View>

            <FlatList
                data={tableData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => handleUserPress(item)}>
                        <Row {...item} />
                    </TouchableOpacity>
                )}
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
