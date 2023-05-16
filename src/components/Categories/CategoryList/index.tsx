import React from "react";
import { Container, SeeMore, Title, TitleContainer } from "./styled";
import { Categorie, Product } from "../../../screens/Categories";
import { FlatList, ListRenderItem } from "react-native";
import CategorieCard from "./CategorieCard";

const CategoryList = ({ categorie }: Categorie) => {
  const renderItem: ListRenderItem<Product> = ({ item }) => {
    return <CategorieCard product={item} key={item.id} />;
  };

  return (
    <Container>
      <TitleContainer>
        <Title>{categorie._id}</Title>
        <SeeMore>Ver mais</SeeMore>
      </TitleContainer>

      <FlatList
        data={categorie.product}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};

export default CategoryList;
