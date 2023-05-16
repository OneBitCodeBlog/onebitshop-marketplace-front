import { View, FlatList, ListRenderItem } from "react-native";
import React from "react";
import { Product } from "../../../screens/Categories";

interface Props {
  products: Product[];
}

const CategoryList = ({ products }: Props) => {
  const renderItem: ListRenderItem<Product> = () => {
    return (
      <>
        <View></View>
      </>
    );
  };

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CategoryList;
