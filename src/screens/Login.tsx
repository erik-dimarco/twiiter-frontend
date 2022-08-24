import { useMutation } from "@apollo/client";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FC, useContext } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { AsyncStorage } from "react-native";
import { Button, Input } from "../components";
import { Login as LoginUser } from "../gql/users.gql";
import useAuth from "../hooks/useAuth";

type LoginProps = NativeStackScreenProps<RootStackParamList, "Login">;

const Login: FC<LoginProps> = ({ navigation }: LoginProps) => {
  const { token, setToken } = useAuth();
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [loginUser] = useMutation(LoginUser);

  const handleLogin = async () => {
    const { data } = await loginUser({
      variables: {
        input: {
          email,
          password,
        },
      },
    });

    if (data && data.login) {
      setToken(data.login.token);
    }
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="text-xl text-gray-700 mb-4">Log in</Text>
      <Input placeholder="Email" onChangeText={(email) => setEmail(email)} />
      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={(password) => setPassword(password)}
      />
      <Button title="Log in" onPress={handleLogin} />
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
