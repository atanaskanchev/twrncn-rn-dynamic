import { StatusBar } from "expo-status-bar";
import RootStackNavigator from "./navigation/root-stack-navigator";

export default function App() {
  return (
    <>
      <RootStackNavigator />
      <StatusBar style="auto" />
    </>
  );
}
