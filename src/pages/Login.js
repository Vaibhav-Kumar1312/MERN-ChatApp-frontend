import AuthBox from "../components/AuthBox";
import LoginPageInputs from "../components/LoginPageInputs";
import { Typography } from "@mui/material";

export default function LoginPage() {
  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white" }}>
        Login into your account
      </Typography>
      <LoginPageInputs />
    </AuthBox>
  );
}
