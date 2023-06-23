// import React from 'react';
// import {Text, View, StyleSheet, ImageBackground} from "react-native";
// import {Button} from '@react-native-material/core'
//
// const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
//
// const BrokerPage = () => {
//     return (
//         <View style={styles.container}>
//             <ImageBackground source={image} resizeMode="cover" style={styles.image}>
//                 <Text style={styles.text}>Broker info</Text>
//                 <Button title="Click Me" style={{alignSelf: "center", marginTop: 40}}/>
//             </ImageBackground>
//         </View>
//     );
// };
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     image: {
//         flex: 1,
//         justifyContent: 'center',
//     },
//     text: {
//         color: 'white',
//         fontSize: 42,
//         lineHeight: 84,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         backgroundColor: '#000000c0',
//     },
// });
//
// export default BrokerPage;


import React from 'react';
import {View, Text} from 'react-native';

interface IBrokerPageProps {
    route: any;
}

const BrokerPage: React.FC<IBrokerPageProps> = ({route}) => {
    const {firstName, lastName, email} = route.params;

    return (
        <View>
            <Text>First Name: {firstName}</Text>
            <Text>Last Name: {lastName}</Text>
            <Text>Email: {email}</Text>
        </View>
    );
};

export default BrokerPage;

