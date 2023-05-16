import React from "react";
import { Container, SubTitle, SubtitleContainer } from "./styled";
import BackIcon from "../../components/common/BackIcon";
import { Title } from "./styled";

const Product = () => {
  return (
    <Container>
      <BackIcon marginLeft={30} />

      <Title>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
        tenetur?
      </Title>
      <SubtitleContainer>
        <SubTitle>Publicado em 10/04/23</SubTitle>
        <SubTitle>Recife, PE</SubTitle>
      </SubtitleContainer>
    </Container>
  );
};

export default Product;
