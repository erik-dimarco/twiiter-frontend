import React, { FC } from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";

type ButtonProps = {
  title: string;
  onPress: () => void;
};

const Button: FC<ButtonProps> = ({ title, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text className="my-4 px-16 py-3 rounded-md shadow-md bg-blue-500 transition duration-150 ease-in-out text-white font-semibold text-base">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
