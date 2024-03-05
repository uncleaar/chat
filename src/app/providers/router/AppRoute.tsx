import { memo, ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "../../../shared/utils/constants";
import { AuthPage, MfaPage } from "@/pages";
import { CoinsPage } from "@/pages/CoinsPage/CoinsPage";

export const AppRoute = memo((): ReactElement => {
  return (
    <Routes>
      <Route element={<MfaPage />} path={ROUTES.INFO} />
      <Route element={<AuthPage />} path={ROUTES.AUTH} />
      <Route element={<CoinsPage />} path={ROUTES.COINS} />
      <Route path="*" element={<Navigate to={ROUTES.INFO} />} />
    </Routes>
  );
});
