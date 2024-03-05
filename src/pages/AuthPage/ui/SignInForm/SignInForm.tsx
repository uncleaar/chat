import { Controller, useForm } from "react-hook-form";
import styles from "./SignInForm.module.scss";
import { Button, Flex, Input } from "@mantine/core";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLogInWithEmailAndPasswordMutation } from "@/shared/hooks";
import { loginSchema } from "@/shared/utils/validation";
import { IconAt, IconPassword } from "@tabler/icons-react";
import { FormValues } from "../SignUpForm/SignUpForm";

export const SignInForm = () => {
  const { handleSubmit, control } = useForm<FormValues>({
    resolver: yupResolver(loginSchema),
  });

  const logInWithEmailAndPassword = useLogInWithEmailAndPasswordMutation();

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(async ({ password, email }) => {
        logInWithEmailAndPassword.mutate({ email, password });
      })}
    >
      <Flex direction="column" gap="md" w="20rem">
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              data-testid="email"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Email"
              leftSection={<IconAt />}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              data-testid="password"
              onChange={onChange}
              type="password"
              onBlur={onBlur}
              value={value}
              placeholder="Password"
              leftSection={<IconPassword />}
              autoComplete="current-password"
            />
          )}
        />
      </Flex>
      <Button variant="default" type="submit">
        Sign in
      </Button>
    </form>
  );
};
