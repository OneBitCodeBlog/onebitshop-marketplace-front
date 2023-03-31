import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Stack = createNativeStackNavigator();

type PropsNavigationStack = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
};

export type PropsStack = NativeStackNavigationProp<PropsNavigationStack>;

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
