import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

const Other = () => {
  // const scheme = useColorScheme();
  const { navigate } = useNavigation();

  return (
    <View
      style={tw`bg-red-500 flex-1 dark:bg-blue-500 justify-center items-center`}
    >
      <Text style={tw`text-3xl`}>Other</Text>
      {/* <Text style={tw`text-3xl`}>{`Current colour scheme: ${scheme}`}</Text> */}
      <TouchableOpacity
        style={tw`bg-yellow-500 p-3`}
        onPress={() => navigate("Home")}
      >
        <Text>"Go to home screen"</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Other;
