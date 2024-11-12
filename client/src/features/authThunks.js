import { createAsyncThunk } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

export const verifyToken = createAsyncThunk("auth/verifyToken", async () => {
  try {
    const token = localStorage.getItem("authToken");
    if (token) {
      const decodedToken = jwtDecode(token);
      const dateExpToken = new Date(decodedToken.exp * 1000);
      const currentDate = new Date();

      if (dateExpToken < currentDate) {
        return false;
      }
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
});
