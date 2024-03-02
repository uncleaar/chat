import { memo, ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../../../shared/utils/constants";
import { AuthPage, InfoPage } from "@/pages";

export const AppRoute = memo((): ReactElement => {
  return (
    <Routes>
      <Route element={<AuthPage />} path={ROUTES.AUTH} />
      <Route element={<InfoPage />} path={ROUTES.INFO} />
    </Routes>
  );
});
