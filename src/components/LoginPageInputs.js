import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// import { styled } from "@mui/material";
import { login } from "../store/auth-slice.js";
import InputWithLabel from "./InputWithLabel";
import CustomPrimaryButton from "./CustomPrimaryButton";
import RedirectInfo from "./RedirectInfo";

export default function LoginPageInputs() {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isPasswdValid = password.length > 5 && password.length < 12;
    const emailPttrn = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isEmailValid = emailPttrn.test(email);
    const valid = isPasswdValid && isEmailValid;
    setIsFormValid(valid);
  }, [email, password, setIsFormValid]);

  function handleLogin() {
    const loginDetails = { email, password };
    dispatch(login(loginDetails, nav));
  }

  return (
    <>
      <InputWithLabel
        label="E-mail"
        value={email}
        setValue={setEmail}
        type="text"
        placeholder="Enter Your E-mail"
      />
      <InputWithLabel
        label="Password"
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="Enter Password"
      />
      <CustomPrimaryButton
        label="Log-In"
        disabled={!isFormValid}
        additionalStyles={{ marginTop: "30px" }}
        onClick={handleLogin}
      />
      <RedirectInfo
        text="Need an Account "
        redirectText="Create an Account"
        addStyles={{ marginTop: "10px" }}
        redirectLink="/register"
      />
    </>
  );
}
