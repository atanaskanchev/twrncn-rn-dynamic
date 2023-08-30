import { StatusBar } from "expo-status-bar";
import tw, { useDeviceContext } from "twrnc";
import RootStackNavigator from "./navigation/root-stack-navigator";

export default function App() {
  useDeviceContext(tw);

  return (
    <>
      <RootStackNavigator />
      <StatusBar style="auto" />
    </>
  );
}
