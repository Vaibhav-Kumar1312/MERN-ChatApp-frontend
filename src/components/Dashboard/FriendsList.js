import { styled } from "@mui/system";
import FriendsListItem from "./FriendsListItem";
// import { TroubleshootOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { friendsActions } from "../../store/friends-slice";

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});

const DUMMY_FRNDS = [
  { id: 1, username: "aaaaa", isOnline: false },
  { id: 2, username: "bbbbb", isOnline: true },
  { id: 3, username: "ccccc", isOnline: false },
  { id: 4, username: "ddddd", isOnline: false },
];

// function checkOnlineUsers(frndList = [], onlineUsers = []) {
//   frndList.forEach((f) => {
//     const isUserOnline = onlineUsers.find((user) => user.userId === f.id);
//     f.isOnline = isUserOnline ? true : false;
//   });
//   return frndList;
// }

export default function FriendsList() {
  const friendsList = useSelector((state) => state.friends.friends);
  // const onlineUsers = useSelector((state) => state.friends.onlineUsers);
  // const frndList = useState([]);
  // console.log(friendsList);
  // console.log(onlineUsers);

  // useEffect(() => {
  //   // reduxFriendsList.forEach((f) => {
  //   //   const isUserOnline = onlineUsers.find((user) => user.userId === f.id);
  //   //   isOnline = isUserOnline ? true : false;
  //   //   frndList.push({ f, isOnline });
  //   // });
  //   const nl = [];
  //   friendsList.forEach((f) => {
  //     const isUserOnline = onlineUsers.find((user) => user.userId === f.id);
  //     const isOnline = isUserOnline ? true : false;
  //     nl.push({ ...f, isOnline });
  //   });
  //   dispatch(friendsActions.setFreinds(nl));
  // }, [dispatch]);

  return (
    <MainContainer>
      {friendsList.map((item) => {
        return (
          <FriendsListItem
            username={item.username}
            id={item.id}
            key={item.id}
            isOnline={item.isOnline}
          />
        );
      })}
    </MainContainer>
  );
}
