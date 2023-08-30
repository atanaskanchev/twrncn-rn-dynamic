import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import tw, { useDeviceContext } from "twrnc";

export default function App() {
  useDeviceContext(tw);

  return (
    <NavigationContainer>
      <View style={tw`bg-red-500 flex-1 dark:bg-blue-500`}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}
