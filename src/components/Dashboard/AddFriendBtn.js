import { useState } from "react";
import CustomPrimaryButton from "../CustomPrimaryButton.js";
import AddFriendDialog from "./AddFriendDialog.js";

const additionalStyles = {
  marginTop: "10px",
  marginLeft: "5px",
  width: "80%",
  height: "30px",
  background: "#3ba55d",
};

export default function AddFriendButton() {
  const [isDialogOpen, setIsOpen] = useState(false);
  function handleOpenAddFrndDialog() {
    setIsOpen(true);
  }
  function handlecloseAddFrndDialog() {
    setIsOpen(false);
  }
  return (
    <>
      <CustomPrimaryButton
        additionalStyles={additionalStyles}
        label="Add Friend"
        onClick={handleOpenAddFrndDialog}
      />
      <AddFriendDialog
        isOpen={isDialogOpen}
        closeHandler={handlecloseAddFrndDialog}
      />
    </>
  );
}
