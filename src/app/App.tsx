import React, { Suspense } from "react";
import { AppRoute } from "./providers/router/AppRoute";

export const App = () => {
  return (
    <Suspense fallback={<p>loading</p>}>
      <AppRoute />
    </Suspense>
  );
};
