import React, { FC } from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";

type ButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

const Button: FC<ButtonProps> = ({ title, onPress, disabled }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Text
        className={`${
          disabled ? "bg-gray-600" : ""
        } my-4 px-16 py-3 rounded-md shadow-md bg-blue-500 transition duration-150 ease-in-out text-white font-semibold text-base`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
