import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/home";

export const RootStack = createNativeStackNavigator();

const RootStackNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={Home} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
