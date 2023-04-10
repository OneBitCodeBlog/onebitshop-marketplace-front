import { View, Text } from "react-native";
import React from "react";
import { Container } from "./styled";
import Header from "../../components/common/Header";
import NavBar from "../../components/common/NavBar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PropsNavigationStack } from "../../routes";
import ProductList from "../../components/common/ProductList";

type Props = NativeStackScreenProps<PropsNavigationStack, "Search">;

const Search = ({ route }: Props) => {
  const query = route?.params.query;

  return (
    <Container>
      <Header />
      <ProductList />
      <NavBar />
    </Container>
  );
};

export default Search;
