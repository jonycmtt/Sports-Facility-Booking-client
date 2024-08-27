import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type TUser = {
  user: {
    name: string;
    email: string;
    phone?: string;
    role: string;
    address?: string;
    profilePic: string;
  };
  iat: number;
  exp: number;
};

type TAuthState = {
  user: null | TUser;
  token: null | string;
};

const initialState: TAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(action.payload);
      const { loginUser, token } = action.payload;
      state.user = loginUser;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;
