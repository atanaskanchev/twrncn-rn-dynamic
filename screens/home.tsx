import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

const Home = () => {
  // const scheme = useColorScheme();
  // useDeviceContext(tw);

  const { navigate } = useNavigation();

  return (
    <View
      style={tw`bg-red-500 flex-1 dark:bg-blue-500 justify-center items-center`}
    >
      <Text style={tw`text-3xl`}>Home</Text>
      {/* <Text style={tw`text-3xl`}>{`Current colour scheme: ${scheme}`}</Text> */}
      <TouchableOpacity
        style={tw`bg-yellow-500 p-3`}
        onPress={() => navigate("Other")}
      >
        <Text>"Go to other screen"</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
