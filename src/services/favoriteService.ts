import api from "./api";
import * as SecureStore from "expo-secure-store";

const favoriteService = {
  getFavorites: async () => {
    const token = await SecureStore.getItemAsync("onebitshop-token");

    const res = await api.get("/favorites", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res;
  },
  setFavorite: async (_id: string) => {
    const token = await SecureStore.getItemAsync("onebitshop-token");

    const res = await api.post(
      "/favorites",
      { _id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res;
  },
  delFavorite: async (_id: string) => {
    const token = await SecureStore.getItemAsync("onebitshop-token");

    const res = await api.delete(`/favorites/${_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res;
  },
};

export default favoriteService;
