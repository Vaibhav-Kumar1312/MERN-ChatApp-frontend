import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import alertSlice from "./alert-slice";
import friendsSlice from "./friends-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    alert: alertSlice.reducer,
    friends: friendsSlice.reducer,
  },
});

export default store;
