import { styled } from "@mui/system";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import SideBar from "../components/Dashboard/SideBar.js";
import FriendsSideBar from "../components/Dashboard/FriendsSideBar.js";
import Messenger from "../components/Dashboard/Messenger.js";
import AppBar from "../components/Dashboard/AppBar.js";
import AlertNotification from "../components/AlertNotification.js";

import { logout } from "../utils/auth.js";
import { authActions } from "../store/auth-slice.js";
import { connectWithSocketServer } from "../realtimeCommunication/socketConnection.js";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

export default function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    const userDetails = localStorage.getItem("user");
    if (!userDetails) {
      logout();
    } else {
      console.log("useEffect function");
      dispatch(authActions.setUserDetails(JSON.parse(userDetails)));
      connectWithSocketServer(JSON.parse(userDetails));
    }
  }, [dispatch, connectWithSocketServer]);

  return (
    <>
      <AlertNotification />
      <Wrapper>
        <SideBar />
        <FriendsSideBar />
        <Messenger />
        <AppBar />
      </Wrapper>
    </>
  );
}
