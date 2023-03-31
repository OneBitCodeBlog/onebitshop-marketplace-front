import React from "react";
import { Container, Title } from "./styled";
import BackIcon from "../../components/common/BackIcon";
import Form from "../../components/Register/Form";

const Register = () => {
  return (
    <Container>
      <BackIcon marginLeft={20} />
      <Title>CRIAR UMA CONTA</Title>
      <Form />
    </Container>
  );
};

export default Register;
