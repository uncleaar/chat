import { memo, ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "../../../shared/utils/constants";
import { AuthPage, MfaPage, WebCamPage } from "@/pages";
import { CoinsPage } from "@/pages/CoinsPage/CoinsPage";

export const AuthAppRoute = memo((): ReactElement => {
  return (
    <Routes>
      <Route element={<AuthPage />} path={ROUTES.AUTH} />
      <Route path="*" element={<Navigate to={ROUTES.AUTH} />} />
    </Routes>
  );
});

export const AppRoute = memo((): ReactElement => {
  return (
    <Routes>
      <Route element={<MfaPage />} path={ROUTES.INFO} />
      <Route element={<CoinsPage />} path={ROUTES.COINS} />
      <Route element={<AuthPage />} path={ROUTES.AUTH} />
      <Route element={<WebCamPage />} path={ROUTES.CAMERA} />
    </Routes>
  );
});
