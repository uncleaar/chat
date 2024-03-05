import { useMutation } from "@tanstack/react-query";
import { registerWithEmailAndPassword } from "../requests";
export const useRegisterWithEmailandPasswordMutation = () => {
  return useMutation({
    mutationFn: (data: { email: string; password: string }) => {
      return registerWithEmailAndPassword(data);
    },
  });
};
