import React from "react";
import Header from "../../components/common/Header";
import NavBar from "../../components/common/NavBar";
import ProductList from "../../components/common/ProductList";
import { Container } from "./styled";

const Home = () => {
  return (
    <Container>
      <Header />
      <ProductList />
      <NavBar />
    </Container>
  );
};

export default Home;
