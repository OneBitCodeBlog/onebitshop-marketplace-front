import { Address } from "./User";

export interface Image {
  filename: string;
  url: string;
  uri: string;
  type: string;
}

export interface Seller {
  _id: string;
  email: string;
  name: string;
  phone: string;
  rating: string;
}

export interface Product {
  _id: string;
  seller: Seller;
  price: string;
  name: string;
  description: string;
  images: Image[];
  category: string;
  address: Address;
  createdAt: string;
  publishedData: string;
}
