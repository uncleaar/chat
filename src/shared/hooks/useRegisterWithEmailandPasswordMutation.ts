import { useMutation } from "@tanstack/react-query";
import { registerWithEmailAndPassword } from "../api/registerWithEmailAndPassword";
export const useRegisterWithEmailandPasswordMutation = () => {
  return useMutation({
    mutationFn: (data: { email: string; password: string }) => {
      return registerWithEmailAndPassword(data);
    },
  });
};
