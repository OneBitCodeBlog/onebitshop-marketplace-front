import React, { useEffect, useState } from "react";
import { Container, SeeMore, Title, TitleContainer } from "./styled";
import { Category } from "../../../screens/Categories";
import { FlatList, ListRenderItem } from "react-native";
import CategoryCard from "./CategoryCard";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../routes";

import { Product } from "../../../entities/Product";
import useAuth from "../../../hook/useAuth";
import favoriteService from "../../../services/favoriteService";

interface Props {
  category: Category;
}

const CategoryList = ({ category }: Props) => {
  const navigation = useNavigation<PropsStack>();
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

  const renderItem: ListRenderItem<Product> = ({ item }) => {
    return (
      <CategoryCard product={item} key={item._id} favorite={isFavorite(item)} />
    );
  };

  useEffect(() => {
    handleGetFavorites();
  }, []);

  return (
    <Container>
      <TitleContainer>
        <Title>{category._id}</Title>
        <SeeMore
          onPress={() => {
            navigation.navigate("Category", {
              _id: category._id,
              products: category.products,
            });
          }}
        >
          Ver mais
        </SeeMore>
      </TitleContainer>

      <FlatList
        data={category.products}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};

export default CategoryList;
