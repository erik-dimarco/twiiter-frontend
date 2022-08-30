import * as SecureStore from "expo-secure-store";

export const getToken = async () => {
  return await SecureStore.getItemAsync("token");
};

export const deleteToken = async () => {
  return await SecureStore.deleteItemAsync("token");
};
