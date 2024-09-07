import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import InputWithLabel from "../InputWithLabel";
import { Typography } from "@mui/material";
import CustomPrimaryButton from "../CustomPrimaryButton";
import { sendFriendInvitation } from "../../store/friends-slice";

export default function AddFriendDialog({ isOpen, closeHandler }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [isMailValid, setIsMailValid] = useState();

  function handleClose() {
    closeHandler();
    setEmail("");
  }

  function handleSendInvitation() {
    dispatch(sendFriendInvitation({ targetEmail: email }, handleClose));
  }

  useEffect(() => {
    const emailPttrn = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isEmailValid = emailPttrn.test(email);
    setIsMailValid(!isEmailValid);
  }, [email, setIsMailValid]);

  return (
    <div>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>
          <Typography>Invite a Friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>Enter E-mail address to Invite them</Typography>
          </DialogContentText>
          <InputWithLabel
            label="E-mail"
            type="text"
            value={email}
            setValue={setEmail}
            placeholder="Enter Email"
          />
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton
            onClick={handleSendInvitation}
            disabled={isMailValid}
            label="Send"
            additionalStyles={{
              marginLeft: "15px",
              marginRight: "15px",
              marginBottom: "10px",
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}
