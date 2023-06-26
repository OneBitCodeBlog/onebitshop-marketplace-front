import React, { SetStateAction } from "react";
import { Container, ContentTxt, DeleteBtn, DeleteIcon } from "./styled";
import { Alert } from "react-native";

import { Address } from "../../../entities/User";
import addressService from "../../../services/addressService";

interface ItemProps {
  item: Address;
  address: Address[];
  setAddress: React.Dispatch<SetStateAction<Array<Address>>>;
}

const deleteIcon = require("../../../../assets/icons/trash.png");

const AddressCard = ({ item, address, setAddress }: ItemProps) => {
  const handleDeleteAddress = async () => {
    Alert.alert(
      "Você tem certeza?",
      "Ao fazer isso você deletará permanentemente o end.",
      [
        {
          text: "Sim",
          onPress: () => {
            addressService.deleteAddress(item._id);

            const filteredAddress = address.filter(
              (address) => address._id !== item._id
            );

            setAddress(filteredAddress);
          },
        },
        {
          text: "Não",
        },
      ]
    );
  };

  return (
    <Container>
      <ContentTxt>{`Rua: ${item.street} - Nº ${item.number}\nUF: ${item.state}\nCEP: ${item.cep}`}</ContentTxt>
      <DeleteBtn onPress={handleDeleteAddress}>
        <DeleteIcon source={deleteIcon} />
      </DeleteBtn>
    </Container>
  );
};

export default AddressCard;
