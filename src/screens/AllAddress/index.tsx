import React from "react";
import { Container } from "./styled";
import DefaultTitle from "../../components/common/DefaultTitle";
import NavBar from "../../components/common/NavBar";

const AllAddress = () => {
  return (
    <>
      <Container>
        <DefaultTitle title="TODOS OS ENDEREÇOS" fontSize={18} />
      </Container>
      <NavBar />
    </>
  );
};

export default AllAddress;
