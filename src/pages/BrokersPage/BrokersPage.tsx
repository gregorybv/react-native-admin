import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {DataTable} from 'react-native-paper';

interface ITableData {
    id: number;
    firstName: string;
    lastName: string;
    email: string | number;
}

const Row: React.FC<ITableData> = ({firstName, lastName, email}) => (
    <DataTable.Row>
        <DataTable.Cell>{firstName}</DataTable.Cell>
        <DataTable.Cell>{lastName}</DataTable.Cell>
        <DataTable.Cell>{email}</DataTable.Cell>
    </DataTable.Row>
);

const Header = () => (
    <DataTable.Header>
        <DataTable.Title>Название</DataTable.Title>
        <DataTable.Title>Логин</DataTable.Title>
        <DataTable.Title>Email</DataTable.Title>
    </DataTable.Header>
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
            <DataTable>
                <Header/>
                {tableData.map((item) => (
                    <TouchableOpacity key={item.id} onPress={() => handleUserPress(item)}>
                        <Row {...item} />
                    </TouchableOpacity>
                ))}
            </DataTable>
        </View>
    );
};

export default BrokersPage;
