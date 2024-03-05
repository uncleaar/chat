import { Controller, useForm } from "react-hook-form";
import styles from "./SignUpForm.module.scss";
import { Button, Flex, Input } from "@mantine/core";
import { IconAt, IconPassword } from "@tabler/icons-react";

import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/shared/utils/validation";
import { useRegisterWithEmailandPasswordMutation } from "@/shared/firebase/hooks/useRegisterWithEmailandPasswordMutation";

import { FC } from "react";
import { Form } from "../../AuthPage";

export interface FormValues {
  email: string;
  password: string;
}

interface SignUpFormProps {
  setIsType: (type: Form) => void;
}

export const SignUpForm: FC<SignUpFormProps> = ({ setIsType }) => {
  const { handleSubmit, control } = useForm<FormValues>({
    resolver: yupResolver(loginSchema),
  });

  const registerWithEmailAndPassword =
    useRegisterWithEmailandPasswordMutation();

  if (registerWithEmailAndPassword.status === "success") {
    setIsType("sign-in");
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
              type="password"
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
