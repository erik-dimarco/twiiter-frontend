import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";

import { Button, Input } from "../components";
import { RootState, useAppDispatch } from "../redux/store";
import { loginUser } from "../redux/features/user/userActions";
import { useSelector } from "react-redux";
import { LoginFormValues } from "../redux/features/user/userSlice";

type LoginProps = NativeStackScreenProps<RootStackParamList, "Login">;

const Login: FC<LoginProps> = ({ navigation }: LoginProps) => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const { loading, error } = useSelector((state: RootState) => state.user);
  console.log("loading", loading);

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      {/* {error && <Error>{error}</Error>} */}
      <Text className="text-xl text-gray-700 mb-4">Log in</Text>
      <Input placeholder="Email" onChangeText={(email) => setEmail(email)} />
      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={(password) => setPassword(password)}
      />
      <Button
        title="Log in"
        onPress={() => dispatch(loginUser({ email, password }))}
        disabled={loading}
      />
      <View className="flex flex-row my-4">
        <Text className="text-sm text-gray-700 mr-1">
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text className="text-sm text-blue-500 font-medium">
            Join Twitter
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
