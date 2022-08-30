import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  registerUser,
  loginUser,
  getUserDetails,
  logout,
  getTokenFromStorage,
} from "./userActions";

export interface State {
  loading: boolean;
  userInfo: Partial<User> | null;
  userToken: string | null;
  error: string | null;
  success: boolean;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

export interface UserData {
  me: User;
}

export interface RegisterFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  token: string;
  user: User;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

const initialState: State = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      registerUser.fulfilled,
      (state, { payload }: PayloadAction<RegisterResponse>) => {
        state.loading = false;
        state.success = true;
        state.userInfo = payload.user;
        state.userToken = payload.token;
      }
    );
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      state.loading = false;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      loginUser.fulfilled,
      (state, { payload }: PayloadAction<string>) => {
        state.loading = false;
        state.success = true;
        state.userToken = payload;
      }
    );
    builder.addCase(loginUser.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getUserDetails.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getUserDetails.fulfilled,
      (state, { payload }: PayloadAction<User>) => {
        state.loading = false;
        state.success = true;
        state.userInfo = payload;
      }
    );
    builder.addCase(getUserDetails.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
      state.userInfo = null;
      state.userToken = null;
    });
    builder.addCase(getTokenFromStorage.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getTokenFromStorage.fulfilled,
      (state, { payload }: PayloadAction<any>) => {
        state.loading = false;
        state.error = null;
        state.userInfo = null;
        state.userToken = payload;
      }
    );
  },
});
export default userSlice.reducer;
