import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Profile: undefined;
};

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Broker Page</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

