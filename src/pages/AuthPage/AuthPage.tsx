import { useState } from "react";
import { SignUpForm } from "./ui/SignUpForm/SignUpForm";
import { SignInForm } from "./ui/SignInForm/SignInForm";
import { Button } from "@mantine/core";
import styles from "./AuthPage.module.scss";
import { useLoginWithGoogleMutation } from "@/shared/hooks";

export type Form = "sign-in" | "sign-up";

export const AuthPage = () => {
  const [isType, setIsType] = useState<Form>("sign-in");

  const loginWithGoogle = useLoginWithGoogleMutation();

  const toggleFormType = () => {
    setIsType(isType === "sign-in" ? "sign-up" : "sign-in");
  };

  return (
    <div className={styles.auth}>
      {isType === "sign-in" ? (
        <SignInForm />
      ) : (
        <SignUpForm setIsType={setIsType} />
      )}

      <Button variant="text" onClick={toggleFormType}>
        {isType === "sign-up" ? "already have account" : "create new account"}
      </Button>

      <Button
        mt={20}
        color="green"
        variant="outline"
        onClick={() => loginWithGoogle.mutate()}
      >
        Login with google
      </Button>
    </div>
  );
};
