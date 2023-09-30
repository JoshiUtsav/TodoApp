import React, { useState } from "react";
import SignIn from "./auth/signin";
import SignUp from "./auth/signup";

const Login: React.FC = () => {
  const [account, toggleAccount] = useState("login");

  const toggleRegister = () => {
    account === "signup" ? toggleAccount("login") : toggleAccount("signup");
  };

  return (
    <>
      {account === "login" ? (
        <SignIn toggleRegister={toggleRegister} />
      ) : (
        <SignUp toggleRegister={toggleRegister} />
      )}
    </>
  );
};

export default Login;
