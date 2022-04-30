import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';

function ExamplePage() {
  return (
    <>
      <Text>Public Routes</Text>
    </>
  );
}

const Stack = createNativeStackNavigator();

export const PublicRoutes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={ExamplePage} />
    </Stack.Navigator>
  );
};
