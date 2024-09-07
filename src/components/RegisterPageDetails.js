import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { register } from "../store/auth-slice.js";
import InputWithLabel from "./InputWithLabel";
import CustomPrimaryButton from "./CustomPrimaryButton";
import RedirectInfo from "./RedirectInfo";

export default function RegisterPageDetails() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isPasswdValid = password.length > 5 && password.length < 12;
    const emailPttrn = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isEmailValid = emailPttrn.test(email);
    const valid = isPasswdValid && isEmailValid;
    setIsFormValid(valid);
  }, [email, password, setIsFormValid]);

  function handleRegister() {
    const registerDetails = { email, username, password };
    dispatch(register(registerDetails, nav));
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
        label="Username"
        value={username}
        setValue={setUsername}
        type="text"
        placeholder="Enter Your Username"
      />
      <InputWithLabel
        label="Password"
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="Enter Your Password"
      />
      <CustomPrimaryButton
        label="Register"
        disabled={!isFormValid}
        additionalStyles={{ marginTop: "30px" }}
        onClick={handleRegister}
      />
      <RedirectInfo
        text=""
        redirectText="Already have an Account ?"
        addStyles={{ marginTop: "5px" }}
        redirectLink="/login"
      />
    </>
  );
}
