import { createSlice } from "@reduxjs/toolkit";
import { alertActions } from "./alert-slice.js";
import * as api from "../api.js";

const initialState = {
  userDetails: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserDetails(state, action) {
      state = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export const login = (userData, nav) => {
  return async (dispatch) => {
    const res = await api.login(userData);
    console.log("server response", res);
    if (res.error) {
      dispatch(alertActions.openAlert(res?.err?.response?.data));
      return;
    }
    const { userDetails } = res?.data;
    localStorage.setItem("user", JSON.stringify(userDetails));
    dispatch(authActions.setUserDetails(userDetails)); // check if the user is stored in store
    nav("/dashboard");
  };
};

export const register = (userData, nav) => {
  return async (dispatch) => {
    const res = await api.register(userData);
    console.log("server response", res);
    if (res.error) {
      // console.log(res?.err?.response?.data);
      dispatch(alertActions.openAlert(res?.err?.response?.data));
      return;
    }
    const { userDetails } = res?.data;
    console.log(userDetails);
    localStorage.setItem("user", JSON.stringify(userDetails));
    dispatch(authActions.setUserDetails(userDetails)); // check if the user is stored in store
    nav("/dashboard");
  };
};

export default authSlice;
