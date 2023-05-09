import React from "react";
import { Container, ContentTxt, DeleteBtn, DeleteIcon } from "./styled";
import { Address } from "..";
import { Alert } from "react-native";

interface ItemProps {
  item: Address;
}

const deleteIcon = require("../../../../assets/icons/trash.png");

const AddressCard = ({ item }: ItemProps) => {
  return (
    <Container>
      <ContentTxt>{`Rua: ${item.street} - Nº ${item.number}\nUF: ${item.state}\nCEP: ${item.cep}`}</ContentTxt>
      <DeleteBtn
        onPress={() => {
          Alert.alert("Clicado!");
        }}
      >
        <DeleteIcon source={deleteIcon} />
      </DeleteBtn>
    </Container>
  );
};

export default AddressCard;
