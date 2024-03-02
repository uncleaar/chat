import { Controller, useForm } from "react-hook-form";
import styles from "./SignUpForm.module.scss";
import { Button, Flex, Input } from "@mantine/core";
import { IconAt, IconPassword } from "@tabler/icons-react";

import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/shared/utils/validation";
import { useRegisterWithEmailandPasswordMutation } from "@/shared/hooks/useRegisterWithEmailandPasswordMutation";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/shared/utils/constants";

export interface FormValues {
  email: string;
  password: string;
}

export const SignUpForm = () => {
  const navigate = useNavigate();

  const { handleSubmit, control } = useForm<FormValues>({
    resolver: yupResolver(loginSchema),
  });

  const registerWithEmailAndPassword =
    useRegisterWithEmailandPasswordMutation();

  if (registerWithEmailAndPassword.status === "success") {
    navigate(ROUTES.INFO);
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(async ({ password, email }) =>
        registerWithEmailAndPassword.mutate({ email, password })
      )}
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
        Sign up
      </Button>
    </form>
  );
};
