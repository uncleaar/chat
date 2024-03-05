import React, { Suspense } from "react";
import { AppRoute } from "./providers/router/AppRoute";

import "./styles/globals.css";
import { useAuthState } from "@/shared/firebase/hooks/useAuthState";

export const App = () => {
  const { data } = useAuthState();

  console.log(data, "datasdasda");
  return (
    <Suspense fallback={<p>loading</p>}>
      <AppRoute />
    </Suspense>
  );
};
