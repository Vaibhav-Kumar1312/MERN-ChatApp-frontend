import { createSlice } from "@reduxjs/toolkit";
import { alertActions } from "./alert-slice";
import * as api from "../api.js";

const initialState = {
  friends: [],
  pendingFriendsInvitation: [],
  onlineUsers: [],
};

const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    setFreinds(state, action) {
      console.log(action.payload);
      state.friends = action.payload;
    },
    handlePendingFriendsInvitation(state, action) {
      // console.log(action.payload);
      state.pendingFriendsInvitation = action.payload;
    },
    setOnlineUsers(state, action) {
      // console.log(action.payload);
      const onlineUsers = action.payload;
      const nwLst = [];
      state.friends.forEach((f) => {
        const isUserOnline = onlineUsers.find((user) => user.userId === f.id);
        const isOnline = isUserOnline ? true : false;
        nwLst.push({ ...f, isOnline });
      });
      state.friends = nwLst;
    },
  },
});

export const friendsActions = friendsSlice.actions;

export const sendFriendInvitation = (data, closeDialogHandler) => {
  return async (dispatch) => {
    console.log("friend slice");
    const res = await api.sendFriendInvitation(data);
    if (res.error) {
      dispatch(alertActions.openAlert(res?.err?.response?.data));
      closeDialogHandler();
      return;
    } else {
      dispatch(alertActions.openAlert("Invitation has been sent"));
      closeDialogHandler();
    }
  };
};

export const acceptFriendInvitation = (data) => {
  return async (dispatch) => {
    const res = await api.acceptFriendInvitation(data);
    if (res.error) {
      dispatch(alertActions.openAlert(res?.err?.response?.data));
      return;
    } else {
      dispatch(alertActions.openAlert("Invitation accepted"));
    }
  };
};

export const rejectFriendInvitation = (data) => {
  return async (dispatch) => {
    const res = await api.rejectFriendInvitation(data);
    if (res.error) {
      dispatch(alertActions.openAlert(res?.err?.response?.data));
      return;
    } else {
      dispatch(alertActions.openAlert("Invitation rejected"));
    }
  };
};

export default friendsSlice;
