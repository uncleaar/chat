import { memo, ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../../../shared/utils/constants";
import { AuthPage, MfaPage } from "@/pages";
import { useStore } from "../store";

export const AppRoute = memo((): ReactElement => {
  const { id, isLoginIn } = useStore();

  console.log(isLoginIn, "is");
  console.log(id, "id");
  return (
    <Routes>
      <Route element={<AuthPage />} path={ROUTES.AUTH} />
      <Route element={<MfaPage />} path={ROUTES.INFO} />
    </Routes>
  );
});
