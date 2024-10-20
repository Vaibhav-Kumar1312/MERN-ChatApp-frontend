import { Button } from "@mui/material";

export default function CustomPrimaryButton({
  label,
  additionalStyles,
  disabled,
  onClick,
}) {
  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: "#5865f2",
        color: "white",
        textTransform: "none",
        fontSize: "16px",
        fontWeight: 500,
        width: "100%",
        height: "40px",
      }}
      style={additionalStyles ? additionalStyles : {}}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </Button>
  );
}
