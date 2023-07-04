import React, { useEffect, useState } from "react";
import { FlatList, ListRenderItem } from "react-native";
import ProductCard from "./ProductCard";

import { Product } from "../../../entities/Product";
import useAuth from "../../../hook/useAuth";
import favoriteService from "../../../services/favoriteService";

export interface ProductsListProps {
  products: Product[];
  handleGetProducts: Function;
}

const ProductList = ({ products, handleGetProducts }: ProductsListProps) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const { token } = useAuth();

  const handleGetFavorites = async () => {
    if (!token) return;

    const res = await favoriteService.getFavorites();

    const isLiked = res.data.map((val: Product) => {
      return val._id;
    });

    setFavorites(isLiked);
  };

  const isFavorite = (product: Product) => {
    return !!favorites.find((favorite) =>
      product._id === favorite ? true : false
    );
  };

  const renderItem: ListRenderItem<Product> = ({ item }) => (
    <ProductCard data={item} favorite={isFavorite(item)} />
  );

  useEffect(() => {
    handleGetFavorites();
  }, []);

  return (
    <FlatList
      data={products}
      keyExtractor={(item: Product) => item._id}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 80 }}
      onEndReached={() => {
        handleGetProducts();
      }}
    />
  );
};

export default ProductList;
