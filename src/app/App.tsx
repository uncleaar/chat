import React, { Suspense } from "react";
import { AppRoute } from "./providers/router/AppRoute";

import "./styles/globals.css";
import { useStore } from "./providers/store";

export const App = () => {
  const { id } = useStore();

  console.log(id, "is");
  return (
    <Suspense fallback={<p>loading</p>}>
      <AppRoute />
    </Suspense>
  );
};
