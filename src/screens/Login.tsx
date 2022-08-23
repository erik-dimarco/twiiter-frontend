import { useMutation } from "@apollo/client";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { Button, Input } from "../components";
import { Login as LoginUser } from "../gql/users.gql";

type LoginProps = NativeStackScreenProps<RootStackParamList, "Login">;

const Login: FC<LoginProps> = ({ navigation }: LoginProps) => {
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

    console.log(data);
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
      <Button title="Sign Up" onPress={handleLogin} />
      <View className="flex flex-row my-4">
        <Text className="text-sm text-gray-700 mr-1">
          Don't have an account?
        </Text>
        <TouchableOpacity>
          <Text className="text-sm text-blue-500 font-medium">
            Join Twitter
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
