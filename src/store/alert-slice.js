import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showAlertMsg: false,
  alertMsgContent: null,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    openAlert(state, action) {
      state.showAlertMsg = true;
      state.alertMsgContent = action.payload;
    },
    closeAlert(state) {
      state.showAlertMsg = false;
      state.alertMsgContent = null;
    },
  },
});

export const alertActions = alertSlice.actions;

export default alertSlice;
