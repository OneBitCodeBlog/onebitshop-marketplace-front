import { View, Text } from "react-native";
import React from "react";
import { Container, Logo } from "./styled";
import BackIcon from "../../components/common/BackIcon";

const logo = require("../../../assets/images/logo.png");

const Login = () => {
  return (
    <Container>
      <BackIcon marginLeft={30} />
      <Logo source={logo} />
    </Container>
  );
};

export default Login;
