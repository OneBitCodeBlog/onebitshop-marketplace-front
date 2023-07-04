import api from "./api";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
};

export default profileService;
