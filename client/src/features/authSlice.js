import { createSlice } from "@reduxjs/toolkit";
import { verifyToken } from "./authThunks";

const initialState = {
  token: "",
  user: "",
  authenticated: true,
};

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      state.authenticated = true;
    },
    logout: (state) => {
      state.token = "";
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(verifyToken.fulfilled, (state, action) => {
      state.authenticated = action.payload;
    });
  },
});

export const { login, logout, setUser } = authSlice.actions;
export default authSlice.reducer;
