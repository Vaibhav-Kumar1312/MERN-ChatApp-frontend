import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";

const RedirectText = styled("span")({
  color: "#00aff4",
  fontWeight: 500,
  cursor: "pointer",
  textDecoration: "none",
});

export default function RedirectInfo({
  text,
  addStyles,
  redirectText,
  redirectLink,
}) {
  return (
    <Typography
      style={addStyles ? addStyles : {}}
      variant="subtitle2"
      sx={{ color: "#72767d", textAlign: "center" }}
    >
      {text}
      <Link
        style={{
          color: "#00aff4",
          fontWeight: 500,
          cursor: "pointer",
          textDecoration: "none",
        }}
        to={redirectLink}
      >
        {redirectText}
      </Link>
    </Typography>
  );
}
