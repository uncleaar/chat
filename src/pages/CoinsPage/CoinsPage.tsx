import { useGetCoins } from "@/shared/hooks/useGetCoins";
import React from "react";

export const CoinsPage = () => {
  const { data, isLoading } = useGetCoins();

  if (isLoading) return <p>loading</p>;

  console.log(data, "data");

  return <div>coins</div>;
};
