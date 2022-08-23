import React from "react";
import { Home } from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Register" component={Home} />
    </Stack.Navigator>
  );
};

export default AppStack;
