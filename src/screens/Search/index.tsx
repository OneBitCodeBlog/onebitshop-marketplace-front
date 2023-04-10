import { View, Text } from "react-native";
import React from "react";
import { Container } from "./styled";
import Header from "../../components/common/Header";
import NavBar from "../../components/common/NavBar";

const Search = () => {
  return (
    <Container>
      <Header />
      <NavBar />
    </Container>
  );
};

export default Search;
