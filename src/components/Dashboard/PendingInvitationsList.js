import { styled } from "@mui/system";
import PendingInvitationsListItems from "./PendingInvitationListItems.js";
import { useSelector } from "react-redux";

const DUMMY_INVI = [
  { _id: 1, senderId: { username: "Jhon", email: "jhn@gmail.com" } },
  { _id: 2, senderId: { username: "Doe", email: "Doe@gmail.com" } },
];

const MainContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
});

export default function PendingInvitationsList() {
  const pendingFriendsInvitation = useSelector(
    (state) => state.friends.pendingFriendsInvitation
  );
  // console.log(pendingFriendsInvitation);
  return (
    <MainContainer>
      {pendingFriendsInvitation.map((item) => {
        return (
          <PendingInvitationsListItems
            key={item._id}
            id={item._id}
            username={item.senderId.username}
            email={item.senderId.email}
          />
        );
      })}
    </MainContainer>
  );
}
