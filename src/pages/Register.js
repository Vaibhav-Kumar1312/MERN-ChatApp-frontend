import { Typography } from "@mui/material";
import AuthBox from "../components/AuthBox";
import RegisterPageDetails from "../components/RegisterPageDetails.js";
import AlertNotification from "../components/AlertNotification.js";
export default function RegisterPage() {
  return (
    <>
      <AlertNotification />
      <AuthBox>
        <Typography variant="h5" sx={{ color: "white" }}>
          Create An Account
        </Typography>
        <RegisterPageDetails />
      </AuthBox>
    </>
  );
}
