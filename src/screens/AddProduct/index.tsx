import { View, Text } from "react-native";
import React from "react";
import { Container } from "./styled";
import DefaultTitle from "../../components/common/DefaultTitle";

const AddProduct = () => {
  return (
    <Container>
      <DefaultTitle title="CADASTRO DO ANÚNCIO" fontSize={20} />
    </Container>
  );
};

export default AddProduct;
