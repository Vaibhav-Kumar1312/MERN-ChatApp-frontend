import React from "react";
import { styled } from "@mui/system";
import AddFriendButton from "./AddFriendBtn.js";
import FriendsTitle from "./FrndsTitle.js";
import FriendsList from "./FriendsList.js";
import PendingInvitationsList from "./PendingInvitationsList.js";

const MainContainer = styled("div")({
  width: "224px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2F3136",
});

export default function FriendsSideBar() {
  return (
    <MainContainer>
      <AddFriendButton />
      <FriendsTitle title="Private Messages" />
      <FriendsList />
      <FriendsTitle title="Invitations" />
      <PendingInvitationsList />
    </MainContainer>
  );
}
