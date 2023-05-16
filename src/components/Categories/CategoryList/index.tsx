import React from "react";
import { Container, SeeMore, Title, TitleContainer } from "./styled";
import { Categorie, Product } from "../../../screens/Categories";
import { FlatList, ListRenderItem } from "react-native";
import CategoryCard from "./CategoryCard";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../routes";

const CategoryList = ({ categorie }: Categorie) => {
  const navigation = useNavigation<PropsStack>();

  const renderItem: ListRenderItem<Product> = ({ item }) => {
    return <CategoryCard product={item} key={item.id} />;
  };

  return (
    <Container>
      <TitleContainer>
        <Title>{categorie._id}</Title>
        <SeeMore
          onPress={() => {
            navigation.navigate("Category", {
              _id: categorie._id,
              products: categorie.product,
            });
          }}
        >
          Ver mais
        </SeeMore>
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
