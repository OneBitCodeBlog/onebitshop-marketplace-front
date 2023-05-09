import { View, Text } from "react-native";
import React from "react";
import { Container } from "./styled";
import DefaultTitle from "../../components/common/DefaultTitle";

const AddAddress = () => {
  return (
    <Container>
      <DefaultTitle title="CADASTRAR ENDEREÇO" fontSize={20} />
    </Container>
  );
};

export default AddAddress;
