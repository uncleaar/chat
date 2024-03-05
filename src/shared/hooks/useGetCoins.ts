import { useQuery } from "@tanstack/react-query";
import { getCoints } from "../api/getCoins";

export const useGetCoins = () => {
  return useQuery({
    queryKey: ["coins"],
    queryFn: () => getCoints(),
  });
};
