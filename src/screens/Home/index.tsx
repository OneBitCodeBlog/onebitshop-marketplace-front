import React, { useEffect, useState } from "react";
import Header from "../../components/common/Header";
import NavBar from "../../components/common/NavBar";
import ProductList from "../../components/common/ProductList";
import { Container } from "./styled";
import { Product } from "../../entities/Product";
import productService from "../../services/productService";
import Loader from "../Loader";
import { useFocusEffect } from "@react-navigation/native";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(100);
  const [products, setProducts] = useState<Product[]>([]);

  const handleGetProducts = async () => {
    if (page === total) {
      return;
    }

    const productsData = await productService.getAllProducts(page);

    setProducts([...products, ...productsData.products]);
    setTotal(productsData.total);

    setLoading(false);

    setPage(page + 1);
  };

  useFocusEffect(
    React.useCallback(() => {
      handleGetProducts();
    }, [])
  );

  return (
    <Container>
      <Header />
      {!loading ? (
        <ProductList
          products={products}
          handleGetProducts={handleGetProducts}
        />
      ) : (
        <Loader />
      )}
      <NavBar />
    </Container>
  );
};

export default Home;
