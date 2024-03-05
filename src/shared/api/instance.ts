import axios from "axios";
export const BASE_URL = "https://api.coinranking.com/v2";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    options: {
      Authorization: "Bearer " + import.meta.env.VITE_API_COINRANKING,
    },
  },
});
