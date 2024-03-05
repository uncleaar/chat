import { api } from "./instance";

interface Stats {
  total: number;
  totalCoins: number;
  totalMarkets: number;
  totalExchanges: number;
  totalMarketCap: string;
}

interface Coin {
  name: string;
  price: number;
  rank: number;
}

interface Coins {
  stats: Stats;
  coins: Coin[];
}

export const getCoints = (): Promise<Coins> =>
  api.get("/coins").then((coins) => coins.data.data);
