import React, { useEffect } from "react";

import type { StoreContextProps } from "./StoreContext";
import { StoreContext } from "./StoreContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

interface StoreProviderProps {
  children: React.ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const [store, setStore] = React.useState<StoreContextProps["store"]>({
    session: {
      isLoginIn: false,
      id: null,
    },
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setStore({
          ...store,
          session: {
            isLoginIn: true,
            id: uid,
          },
        });
      } else {
        console.log("user is logged out");
      }
    });
  }, []);

  const value = React.useMemo(
    () => ({
      store,
      setStore,
    }),
    [store]
  );

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
