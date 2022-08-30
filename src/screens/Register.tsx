import { Input } from "../components";
import React, { FC } from "react";
import { View, Text } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Button from "../components/Button";
import { SafeAreaView } from "react-native";

// import Error from '../components/Error'
import { registerUser } from "../redux/features/user/userActions";
import { RootState, useAppDispatch } from "../redux/store";
import { useSelector } from "react-redux";

type RegisterProps = NativeStackScreenProps<RootStackParamList, "Register">;

export type UserRegistrationInput = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const Register: FC<RegisterProps> = ({ navigation }: RegisterProps) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();

  const { loading, error } = useSelector((state: RootState) => state.user);

  const handleRegistration = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): Promise<void> => {
    dispatch(registerUser({ firstName, lastName, email, password }));
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      {/* {error && <Error>{error}</Error>} */}
      <Text className="text-xl text-gray-700 mb-4">Join Twitter</Text>
      <Input
        placeholder="First Name"
        onChangeText={(firstName) => setFirstName(firstName)}
      />
      <Input
        placeholder="Last Name"
        onChangeText={(lastName) => setLastName(lastName)}
      />
      <Input placeholder="Email" onChangeText={(email) => setEmail(email)} />
      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={(password) => setPassword(password)}
      />
      <Button
        title="Sign Up"
        onPress={() => handleRegistration(firstName, lastName, email, password)}
        disabled={loading}
      />
      <View className="flex flex-row my-4">
        <Text className="text-sm text-gray-700 mr-1">
          Already Have an Account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text className="text-sm text-blue-500 font-medium">Login Here</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;
