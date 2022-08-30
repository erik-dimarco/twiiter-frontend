import React, { FC, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../redux/store";
import { getUserDetails } from "../redux/features/user/userActions";

const MainNav: FC = () => {
  const { userToken, userInfo } = useSelector((state: RootState) => state.user);
  console.log("userToken", userToken);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("here");
    if (userToken) {
      console.log("here2");
      dispatch(getUserDetails());
    }
  }, [dispatch, userToken]);

  console.log("userInfo", userInfo);

  return (
    <NavigationContainer>
      {userToken ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNav;
