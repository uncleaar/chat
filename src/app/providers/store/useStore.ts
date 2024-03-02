import { useContext } from "react";
import { StoreContext } from "./StoreContext";

export const useStore = () => {
  const { store, setStore } = useContext(StoreContext);

  return {
    setStore,
    ...(store.session.isLoginIn
      ? { id: store.session.id, isLoginIn: store.session.isLoginIn }
      : {}),
  };
};
