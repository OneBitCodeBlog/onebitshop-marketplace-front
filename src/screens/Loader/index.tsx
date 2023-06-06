import React from "react";
import { ActivityIndicator } from "react-native";
import { Container } from "./styled";

const Loader = () => {
  return (
    <Container>
      <ActivityIndicator size="large" />
    </Container>
  );
};

export default Loader;
