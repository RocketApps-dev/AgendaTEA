import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text } from "react-native";

function ExamplePage() {
  return (
    <>
      <Text>Auth Routes</Text>
    </>
  );
}

const Stack = createNativeStackNavigator();

export const AuthRoutes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={ExamplePage} />
    </Stack.Navigator>
  )
}