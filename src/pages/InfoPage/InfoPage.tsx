import { useStore } from "@/app/providers/store";
import { INITIAL_STORE } from "@/app/providers/store/StoreContext";
import { useLogoutMutation } from "@/shared/hooks";
import { Button } from "@mantine/core";

export const InfoPage = () => {
  const logout = useLogoutMutation();
  const { setStore } = useStore();

  return (
    <div>
      <Button
        onClick={() => {
          logout.mutate();
          setStore(INITIAL_STORE);
        }}
      >
        logout
      </Button>
    </div>
  );
};
