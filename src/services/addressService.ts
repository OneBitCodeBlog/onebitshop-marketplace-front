import api from "./api";
import * as SecureStore from "expo-secure-store";

interface AddressParams {
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  state: string;
  cep: string;
}

const addressSerivice = {
  addAddress: async (params: AddressParams) => {
    const token = await SecureStore.getItemAsync("onebitshop-token");
    const res = await api.post("/addresses", params, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return res;
  },
  getAddress: async () => {
    const token = await SecureStore.getItemAsync("onebitshop-token");
    const res = await api.get("/addresses", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res;
  },
  deleteAddress: async (_id: string) => {
    const token = await SecureStore.getItemAsync("onebitshop-token");
    const res = await api.delete(`/addresses/${_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res;
  },
};

export default addressSerivice;
