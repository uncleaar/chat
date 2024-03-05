import { useMutation } from "@tanstack/react-query";
import { logout } from "../requests";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
export const useLogoutMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      navigate(ROUTES.AUTH);
    },
  });
};
