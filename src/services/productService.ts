import { Image } from "../entities/Product";
import * as SecureStore from "expo-secure-store";
import api from "./api";

interface AddProductsParams {
  name: string;
  price: string;
  description: string;
  category: string;
  addressId: string;
  images: Image[];
  published: string;
}

const productService = {
  addProduct: async (params: AddProductsParams) => {
    const token = await SecureStore.getItemAsync("onebitshop-token");

    const { name, price, description, category, addressId, images, published } =
      params;

    let formdata = new FormData();

    formdata.append("name", name);
    formdata.append("price", price);
    formdata.append("description", description);
    formdata.append("category", category);
    formdata.append("addressId", addressId);
    formdata.append("published", published);
    images.map((image) => {
      formdata.append("images", {
        // @ts-ignore
        name: image.filename,
        uri: image.uri,
        type: image.type,
      });
    });

    const res = await api.post("/products", formdata, {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    return res;
  },
};

export default productService;
