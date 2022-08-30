import React, { FC } from "react";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import { useAppDispatch } from "../redux/store";
import { Button } from "../components";
import { logout } from "../redux/features/user/userActions";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <SafeAreaView className="sticky z-10 flex-1 items-center mx-4">
      <View className="flex-row justify-around items-center">
        <Button title="Sign out" onPress={() => dispatch(logout())}></Button>
        {/* <View className="h-6 w-6">
          <SparklesIcon />
        </View> */}

        <Image
          className="h-8 w-8"
          source={require("../../assets/twitter-logo.png")}
        ></Image>
        {/* <Button title="Log out" onPress={signOut} /> */}
      </View>
    </SafeAreaView>
  );
};
export default Home;
