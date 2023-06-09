import api from "./api";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface updateProfile {
  name: string;
  email: string;
  phone: string;
}

interface SellerProps {
  sellerId: string;
}

const profileService = {
  getUserProfile: async () => {
    const token = await SecureStore.getItemAsync("onebitshop-token");
    const user = await AsyncStorage.getItem("user");

    const { _id } = JSON.parse(user || "");

    const res = await api.get(`/users/${_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res;
  },
  updateUserProfile: async (params: updateProfile) => {
    const token = await SecureStore.getItemAsync("onebitshop-token");

    const res = await api.put(`/profile`, params, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res;
  },
  getSellerProfile: async ({ sellerId }: SellerProps) => {
    const token = await SecureStore.getItemAsync("onebitshop-token");

    const res = await api.get(`/users/${sellerId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res;
  },
};

export default profileService;
