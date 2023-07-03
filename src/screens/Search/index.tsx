import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Container, NoResult } from "./styled";
import Header from "../../components/common/Header";
import NavBar from "../../components/common/NavBar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PropsNavigationStack } from "../../routes";
import ProductList from "../../components/common/ProductList";
import { Product } from "../../entities/Product";
import searchService from "../../services/searchService";
import Loader from "../Loader";
import Filters from "../../components/Search/Filters";

type Props = NativeStackScreenProps<PropsNavigationStack, "Search">;

const Search = ({ route }: Props) => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const query = route?.params.query;

  const handleSearch = async () => {
    const { data } = await searchService.getSearched(query);

    setData(data.products);
    setLoading(false);
  };

  useEffect(() => {
    handleSearch();
  }, [query]);

  return (
    <Container>
      <Header />

      <Filters />

      {!loading ? (
        data.length <= 0 ? (
          <NoResult>
            Sua pesquisa não trouxe nenhum{"\n"}produto, tente novamente mais
            tarde!
          </NoResult>
        ) : (
          <ProductList handleGetProducts={handleSearch} products={data} />
        )
      ) : (
        <Loader />
      )}

      <NavBar />
    </Container>
  );
};

export default Search;
