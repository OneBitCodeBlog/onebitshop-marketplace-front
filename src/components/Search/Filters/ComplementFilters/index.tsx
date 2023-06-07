import { View, Text } from "react-native";
import React, { SetStateAction, useContext, useState } from "react";
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
import { QueryContext } from "../../../../contexts/QueryContext";

interface Props {
  setShowFilters: React.Dispatch<SetStateAction<boolean>>;
}

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

const ComplementFilters = ({ setShowFilters }: Props) => {
  const [fields, setFields] = useState({
    minPrice: "",
    maxPrice: "",
  });
  const [category, setCategory] = useState("");
  const queryContext = useContext(QueryContext);
  const handleMinPrice = () => {
    queryContext.addFilters(`minPrice=${fields.minPrice}`);
  };

  const handleMaxPrice = () => {
    queryContext.addFilters(`maxPrice=${fields.maxPrice}`);
  };

  const handleSearchFiltered = () => {
    if (fields.minPrice) {
      handleMinPrice();
    }
    if (fields.maxPrice) {
      handleMaxPrice();
    }

    setShowFilters(false);
  };

  return (
    <Container>
      <Title>VALOR</Title>
      <PriceContainer>
        <PriceInputContainer>
          <Input
            placeholder="Mínimo"
            placeholderTextColor="white"
            keyboardType="numeric"
            value={fields.minPrice}
            onChangeText={(val) => {
              setFields({
                ...fields,
                minPrice: val,
              });
            }}
            style={{ textAlign: "center" }}
          />
        </PriceInputContainer>
        <PriceInputContainer>
          <Input
            placeholder="Máximo"
            placeholderTextColor="white"
            keyboardType="numeric"
            value={fields.maxPrice}
            onChangeText={(val) => {
              setFields({
                ...fields,
                maxPrice: val,
              });
            }}
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
        <AplyButton onPress={handleSearchFiltered}>
          <ButtonText>Aplicar</ButtonText>
        </AplyButton>
      </ButtonsContainer>
    </Container>
  );
};

export default ComplementFilters;
