import io from "socket.io-client";
import { friendsActions } from "../store/friends-slice";
// import { useDispatch } from "react-redux";
import store from "../store/store";

let socket = null;
export const connectWithSocketServer = (userDetails) => {
  const JWTtoken = userDetails.token;
  socket = io("http://localhost:8000", {
    auth: { token: JWTtoken },
  });

  socket.on("connect", () => {
    console.log("Succesfully connected to socket server on client");
    console.log(socket.id);
  });
  socket.on("friend-invitation", (data) => {
    const { pendingInvitation } = data;
    // console.log("invitation got it");
    // console.log(pendingInvitation);
    store.dispatch(
      friendsActions.handlePendingFriendsInvitation(pendingInvitation)
    );
  });

  socket.on("friend-list", (data) => {
    const { friends } = data;
    console.log(friends);
    store.dispatch(friendsActions.setFreinds(friends));
  });

  socket.on("online-users", (data) => {
    const { onlineUsers } = data;
    console.log(data, "online users updated");
    store.dispatch(friendsActions.setOnlineUsers(onlineUsers));
  });
};
