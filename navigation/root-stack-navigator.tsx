import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useColorScheme } from "react-native";
import tw, { useDeviceContext } from "twrnc";
import Home from "../screens/home";
import Other from "../screens/other";

export const RootStack = createNativeStackNavigator();

const RootStackNavigator = () => {
  const scheme = useColorScheme();
  useDeviceContext(tw);

  return (
    <NavigationContainer key={scheme}>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Other" component={Other} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
