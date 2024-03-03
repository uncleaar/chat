import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { loginWithGoogle } from "../api/loginWithGoogle";
import { ROUTES } from "../utils/constants";
import { useStore } from "@/app/providers/store";

export const useLoginWithGoogleMutation = () => {
  const navigate = useNavigate();
  const { setStore } = useStore();
  return useMutation({
    mutationFn: () => loginWithGoogle(),
    onSuccess: (data) => {
      setStore({ session: { isLoginIn: true, id: data.providerId } });
      navigate(ROUTES.INFO);
    },
  });
};
