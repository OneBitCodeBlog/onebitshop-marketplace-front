import { Product } from "./Product";

export interface Address {
  _id: string;
  cep: string;
  city: string;
  complement: string;
  district: string;
  number: string;
  state: string;
  street: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
  products: Product[];
  address: Address[];
  avarageRating: number | null;
  favorites: string[];
}
