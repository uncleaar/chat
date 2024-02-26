import { memo, ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthPage } from "../../../pages/AuthPage/AuthPage";
import { ROUTES } from "../../../utils/constants";

export const AppRoute = memo((): ReactElement => {
  return (
    <Routes>
      <Route element={<AuthPage />} path={ROUTES.AUTH} />
    </Routes>
  );
});
