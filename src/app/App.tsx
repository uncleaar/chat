import React, { Suspense } from "react";
import { AppRoute } from "./providers/router/AppRoute";

import "./styles/globals.css";

export const App = () => {
  return (
    <Suspense fallback={<p>loading</p>}>
      <AppRoute />
    </Suspense>
  );
};
