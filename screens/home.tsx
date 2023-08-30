import { Text, View, useColorScheme } from "react-native";
import tw from "twrnc";

const Home = () => {
  const scheme = useColorScheme();
  return (
    <View
      style={tw`bg-red-500 flex-1 dark:bg-blue-500 justify-center items-center`}
    >
      <Text style={tw`text-3xl`}>{`Current colour scheme: ${scheme}`}</Text>
    </View>
  );
};

export default Home;
