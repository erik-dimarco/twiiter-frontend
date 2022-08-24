import React, { FC } from "react";
import { Text, SafeAreaView, TouchableOpacity } from "react-native";
import { Button } from "../components";
import useAuth from "../hooks/useAuth";

const Home: FC = () => {
  const { signOut } = useAuth();
  return (
    <SafeAreaView>
      <Text className="text-md text-red-500 flex-1 justify-center items-center">
        Home
      </Text>
      <Button title="Log out" onPress={signOut} />
    </SafeAreaView>
  );
};

export default Home;
