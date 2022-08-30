import { useMutation } from "@apollo/client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../../gql/client";
import * as SecureStorage from "expo-secure-store";

import { LoginFormValues, RegisterFormValues } from "./userSlice";
import {
  Register as RegisterUser,
  Login as LoginUser,
  UserQuery,
} from "../../../gql/users.gql";
import { deleteToken, getToken } from "../../../utils/auth";

export const registerUser = createAsyncThunk(
  // action type string
  "user/register",
  // callback function
  async (
    { firstName, lastName, email, password }: RegisterFormValues,
    { rejectWithValue }
  ) => {
    try {
      const { data: registerResponse } = await client.mutate({
        mutation: RegisterUser,
        variables: { input: { firstName, lastName, email, password } },
      });

      if (registerResponse && registerResponse.register) {
        await SecureStorage.setItemAsync(
          "token",
          registerResponse.register.token
        );
        return registerResponse.register;
      }
    } catch (err) {
      const message = (err as any).message.replace("GraphQL error: ", "");
      rejectWithValue(message);
    }
  }
);

export const loginUser = createAsyncThunk(
  // action type string
  "user/login",
  // callback function
  async ({ email, password }: LoginFormValues, { rejectWithValue }) => {
    try {
      const { data: loginResponse } = await client.mutate({
        mutation: LoginUser,
        variables: { input: { email, password } },
      });

      if (loginResponse && loginResponse.login) {
        await SecureStorage.setItemAsync("token", loginResponse.login.token);
        return loginResponse.login.token;
      }
    } catch (err) {
      const message = (err as any).message.replace("GraphQL error: ", "");
      rejectWithValue(message);
    }
  }
);

export const getUserDetails = createAsyncThunk(
  // action type string
  "user/getUserDetails",
  // callback function
  async ({}, { rejectWithValue }) => {
    try {
      const response = await client.query({
        query: UserQuery,
        fetchPolicy: "no-cache",
      });

      console.log("userDetails", response.data.me);
      if (response?.data) {
        return response.data.me;
      }
    } catch (err) {
      const message = (err as any).message.replace("GraphQL error: ", "");
      rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk(
  // action type string
  "user/logout",
  // callback function
  async () => {
    await deleteToken();
  }
);

export const getTokenFromStorage = createAsyncThunk(
  // action type string
  "user/getTokenFromStorage",
  // callback function
  async () => await getToken()
);
