import { Button, Input, InputContainer, InputLabel } from "@/components";

import styles from "./SignUpForm.module.scss";
export const SignUpForm = () => {
  return (
    <form className={styles.form}>
      <InputContainer>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input id="email" type="email" />
      </InputContainer>

      <section className={styles.section}>
        <InputContainer>
          <InputLabel htmlFor="firstName">First name</InputLabel>
          <Input id="firstName" type="text" />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="lastName">Last name</InputLabel>
          <Input id="lastName" type="text" />
        </InputContainer>
      </section>

      <InputContainer>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input id="password" type="password" />
      </InputContainer>

      <Button $primary>Create account</Button>
    </form>
  );
};
