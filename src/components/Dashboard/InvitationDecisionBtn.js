import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import { Box, IconButton } from "@mui/material";

export default function InvitationDecisionBtn({ disabled, accept, reject }) {
  return (
    <Box sx={{ display: "flex" }}>
      <IconButton
        style={{ color: "white" }}
        disabled={disabled}
        onClick={accept}
      >
        <CheckIcon />
      </IconButton>
      <IconButton
        style={{ color: "white" }}
        disabled={disabled}
        onClick={reject}
      >
        <ClearIcon />
      </IconButton>
    </Box>
  );
}
