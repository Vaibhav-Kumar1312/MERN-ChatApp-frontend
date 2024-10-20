import { Box, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Avatar from "../Avatar.js";
import InvitationDecisionBtn from "./InvitationDecisionBtn.js";
import {
  acceptFriendInvitation,
  rejectFriendInvitation,
} from "../../store/friends-slice.js";

export default function PendingInvitationsListItems({ id, username, email }) {
  const dispatch = useDispatch();
  const [btnDisabled, setBtnDisabled] = useState(false);
  function handleAccept() {
    dispatch(acceptFriendInvitation({ id }));
    setBtnDisabled(true);
  }
  function handleReject() {
    dispatch(rejectFriendInvitation({ id }));
    setBtnDisabled(true);
  }
  return (
    <Tooltip title={email}>
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "42px",
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Avatar username={username} />
          <Typography
            sx={{
              marginLeft: "7px",
              fontWeight: 700,
              color: "#8e9297",
              flexGrow: 1,
            }}
            variant="subtitle1"
          >
            {username}
          </Typography>
          <InvitationDecisionBtn
            disabled={btnDisabled}
            accept={handleAccept}
            reject={handleReject}
          />
        </Box>
      </div>
    </Tooltip>
  );
}
