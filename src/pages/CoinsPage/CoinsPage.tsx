import { Layout } from "@/common/Layout/Layout";
import { useGetCoins } from "@/shared/hooks";

import { Coins } from "@/shared/widgets/coins/coins";


export const CoinsPage = () => {
  const { data, isLoading } = useGetCoins();

  if (!data && isLoading) return <p>loading</p>;

  return (
    <Layout>
      <Coins coins={data?.coins} />
    </Layout>
  );
};
