import { View, Text } from "react-native";
import React, { useState } from "react";
import {
  Container,
  DescriptionContainer,
  Division,
  Input,
  InputContainer,
} from "./styled";
import DefaultTitle from "../../components/common/DefaultTitle";
import DropDownComponent from "../../components/common/DropDownComponent";
import DefaultButton from "../../components/common/DefaultButton";
import UploadInput from "../../components/AddProduct/UploadInput";
import { ImagePickerAsset } from "expo-image-picker";

const Address = [
  { value: "Endereço 1" },
  { value: "Endereço 2" },
  { value: "Endereço 3" },
  { value: "Endereço 4" },
];

const Categorie = [
  { value: "Categoria 1" },
  { value: "Categoria 2" },
  { value: "Categoria 3" },
  { value: "Categoria 4" },
  { value: "Categoria 4" },
  { value: "Categoria 4" },
  { value: "Categoria 4" },
  { value: "Categoria 4" },
];

const AddProduct = () => {
  const [categorie, setCategorie] = useState("");
  const [address, setAddress] = useState("");
  const [images, setImages] = useState<ImagePickerAsset[]>([]);

  return (
    <Container contentContainerStyle={{ paddingBottom: 120 }}>
      <DefaultTitle title="CADASTRO DO ANÚNCIO" fontSize={20} />

      <InputContainer>
        <Input placeholder="Título" />
      </InputContainer>

      <InputContainer>
        <Input placeholder="Preço" keyboardType="numeric" />
      </InputContainer>

      <DescriptionContainer>
        <Input placeholder="Descrição" />
      </DescriptionContainer>

      <UploadInput images={images} setImages={setImages} />

      <DropDownComponent
        data={Categorie}
        placeholder="Selecione a categoria"
        setSelected={setCategorie}
      />

      <DropDownComponent
        data={Address}
        placeholder="Selecione um endereço"
        setSelected={setAddress}
      />

      <DefaultButton
        buttonText="CADASTRAR E PUBLICAR"
        buttonType="primary"
        buttonHandle={() => {}}
        marginVertical={20}
      />

      <Division>Ou</Division>

      <DefaultButton
        buttonText="SALVAR COMO RASCUNHO"
        buttonType="secondary"
        buttonHandle={() => {}}
        marginVertical={20}
      />
    </Container>
  );
};

export default AddProduct;
