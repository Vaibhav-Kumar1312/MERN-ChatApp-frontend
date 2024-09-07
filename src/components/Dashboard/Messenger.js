import React from "react";
import { styled } from "@mui/system";

const MainContainer = styled("div")({
  flexGrow: 1,
  marginTop: "48px",
  backgroundColor: "#36393f",
  display: "flex",
});

export default function Messenger() {
  return <MainContainer></MainContainer>;
}
