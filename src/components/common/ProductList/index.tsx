import React from "react";
import { FlatList, ListRenderItem } from "react-native";
import ProductCard from "./ProductCard";

import { Product } from "../../../entities/Product";

export interface ProductsListProps {
  products: Product[];
  handleGetProducts: Function;
}

const ProductList = ({ products, handleGetProducts }: ProductsListProps) => {
  const renderItem: ListRenderItem<Product> = ({ item }) => (
    <ProductCard data={item} />
  );

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
