import React, { FC, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AsyncStorage } from "react-native";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

const MainNav: FC = () => {
  const { token } = useAuth();

  return (
    <NavigationContainer>
      {token !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNav;
