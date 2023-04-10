import React, { useState } from "react";
import { Container, Input, InputContainer, Logo, Search } from "./styled";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../routes";

const logo = require("../../../../assets/images/horizontal-logo.png");
const search = require("../../../../assets/icons/search.png");

const Header = () => {
  const navigation = useNavigation<PropsStack>();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    navigation.navigate("Search", {
      query: searchValue,
    });
    setSearchValue("");
  };

  return (
    <Container>
      <Logo source={logo} />

      <InputContainer>
        <Input
          value={searchValue}
          onChangeText={setSearchValue}
          placeholder="Pesquisa"
          placeholderTextColor="#C0C0C1"
          onSubmitEditing={handleSearch}
        />
        <Search source={search} />
      </InputContainer>
    </Container>
  );
};

export default Header;
