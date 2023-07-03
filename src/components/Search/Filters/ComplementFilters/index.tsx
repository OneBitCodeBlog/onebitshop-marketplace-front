import { View, Text } from "react-native";
import React, { useState } from "react";
import {
  AplyButton,
  ButtonText,
  ButtonsContainer,
  CleanButton,
  Container,
  Input,
  LocationInputContainer,
  PriceContainer,
  PriceInputContainer,
  Title,
} from "./styled";
import DropDownComponent from "../../../common/DropDownComponent";

const Category = [
  { value: "Eletrônicos" },
  { value: "Eletrodomésticos" },
  { value: "Moda e Acessórios" },
  { value: "Pets" },
  { value: "Brinquedos e Jogos" },
  { value: "Casa e Jardim" },
  { value: "Esporte e Lazer" },
  { value: "Automóveis e Veículos" },
];

const ComplementFilters = () => {
  const [category, setCategory] = useState("");

  return (
    <Container>
      <Title>VALOR</Title>
      <PriceContainer>
        <PriceInputContainer>
          <Input
            placeholder="Mínimo"
            placeholderTextColor="white"
            keyboardType="numeric"
            style={{ textAlign: "center" }}
          />
        </PriceInputContainer>
        <PriceInputContainer>
          <Input
            placeholder="Máximo"
            placeholderTextColor="white"
            keyboardType="numeric"
            style={{ textAlign: "center" }}
          />
        </PriceInputContainer>
      </PriceContainer>
      <Title>Localização</Title>
      <LocationInputContainer>
        <Input
          placeholder="Bairro, Cidade e/ou Estado (Um por vez)"
          placeholderTextColor="white"
        />
      </LocationInputContainer>
      <Title>Categoria</Title>
      <DropDownComponent
        data={Category}
        placeholder="Selecione a categoria"
        setSelected={setCategory}
        saveMethod="value"
      />
      <ButtonsContainer>
        <CleanButton onPress={() => {}}>
          <ButtonText>Limpar</ButtonText>
        </CleanButton>
        <AplyButton onPress={() => {}}>
          <ButtonText>Aplicar</ButtonText>
        </AplyButton>
      </ButtonsContainer>
    </Container>
  );
};

export default ComplementFilters;
