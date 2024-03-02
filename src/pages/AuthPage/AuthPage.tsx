import { useState } from "react";
import { SignUpForm } from "./ui/SignUpForm/SignUpForm";
import { SignInForm } from "./ui/SignInForm/SignInForm";
import { Button } from "@mantine/core";
import styles from "./AuthPage.module.scss";

export const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className={styles.auth}>
      {!isSignUp && <SignInForm />}
      {isSignUp && <SignUpForm />}
      <Button variant="text" onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? "already have account" : "create new account"}
      </Button>
    </div>
  );
};
