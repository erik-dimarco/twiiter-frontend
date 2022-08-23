import React, { FC } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

type InputProps = {
  placeholder: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
};

const Input: FC<InputProps> = ({
  placeholder,
  onChangeText,
  secureTextEntry,
}: InputProps) => {
  return (
    <View className="w-[90%] shadow-sm rounded-md my-2 self-center bg-gray-50 border border-gray-400">
      <TextInput
        className="p-6 flex text-gray-700 text-base"
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry || false}
      />
    </View>
  );
};

export default Input;
