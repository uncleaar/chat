import { useMutation } from "@tanstack/react-query";
import { logInWithEmailAndPassword } from "../api";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/constants";

export const useLogInWithEmailAndPasswordMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: { email: string; password: string }) => {
      return logInWithEmailAndPassword(data);
    },
    onSuccess: () => {
      navigate(ROUTES.COINS);
    },
  });
};
