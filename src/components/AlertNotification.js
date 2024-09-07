import { useDispatch, useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

import { alertActions } from "../store/alert-slice";

export default function AlertNotification() {
  const dispatch = useDispatch();
  const alertMsgContent = useSelector((state) => state.alert.alertMsgContent);
  const showAlertMsg = useSelector((state) => state.alert.showAlertMsg);
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={showAlertMsg}
      onClose={() => dispatch(alertActions.closeAlert())}
      autoHideDuration={6000}
    >
      <Alert severity="info">{alertMsgContent}</Alert>
    </Snackbar>
  );
}
