import { Text, View } from "react-native";
import React from "react";

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return <Text className="text-bold text-gray-700 text-lg">{text}</Text>;
};

export default Title;
