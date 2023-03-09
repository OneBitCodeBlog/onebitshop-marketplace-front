import React from "react";
import { Container, Input, InputContainer, Logo, Search } from "./styled";

const logo = require("../../../../../assets/images/horizontal-logo.png");
const search = require("../../../../../assets/icons/search.png");

const Header = () => {
  return (
    <Container>
      <Logo source={logo} />

      <InputContainer>
        <Input placeholder="Pesquisa" placeholderTextColor="#C0C0C1" />
        <Search source={search} />
      </InputContainer>
    </Container>
  );
};

export default Header;
