import { useMutation } from "@tanstack/react-query";
import { logInWithEmailAndPassword } from "../api";
export const useLogInWithEmailAndPasswordMutation = () => {
  return useMutation({
    mutationFn: (data: { email: string; password: string }) => {
      return logInWithEmailAndPassword(data);
    },
  });
};
