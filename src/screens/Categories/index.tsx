import { View, Text } from "react-native";
import React from "react";
import { Container } from "./styled";
import DefaultTitle from "../../components/common/DefaultTitle";
import NavBar from "../../components/common/NavBar";
import CategoryList from "../../components/Categories/CategoryList";

const Categories = () => {
  return (
    <>
      <Container>
        <DefaultTitle title="TODAS AS CATEGORIAS" fontSize={20} />

        <CategoryList />
        <CategoryList />
        <CategoryList />
      </Container>
      <NavBar />
    </>
  );
};

export default Categories;
