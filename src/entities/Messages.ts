import { Product, Seller } from "./Product";

export interface Messages {
  _id?: string;
  content: string;
  receiver: string;
  sender: string;
}

export interface Buyer {
  _id: string;
  email: string;
  name: string;
  phone: string;
}

export interface Chats {
  _id: string;
  buyer: Buyer;
  messages: Messages[];
  product: Product;
  seller: Seller;
  updatedAt: string;
}
