import { View, Text } from "react-native";
import React from "react";
import { Container, SeeMore, Title, TitleContainer } from "./styled";

const CategoryList = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Pets</Title>
        <SeeMore>Ver mais</SeeMore>
      </TitleContainer>
    </Container>
  );
};

export default CategoryList;
