import { api } from "./instance";

interface Stats {
  total: number;
  totalCoins: number;
  totalMarkets: number;
  totalExchanges: number;
  totalMarketCap: string;
}

export interface Coin {
  name: string;
  price: number;
  rank: number;
  iconUrl: string;
  uuid: string;
}

interface Coins {
  stats: Stats;
  coins: Coin[];
}

export const getCoints = (): Promise<Coins> =>
  api.get("/coins").then((coins) => coins.data.data);
