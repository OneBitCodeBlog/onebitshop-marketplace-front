import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
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

const AddProduct = () => {
  const [category, setCategory] = useState("");
  const [address, setAddress] = useState("");
  const [images, setImages] = useState<ImagePickerAsset[]>([]);
  const [fields, setFields] = useState({
    title: "",
    price: "",
    description: "",
    images: [{}],
    category: "",
    addressId: "",
  });

  const handleSubmitProduct = () => {
    console.log(fields);
  };

  useEffect(() => {
    setFields({
      ...fields,
      images: images,
      category: category,
      addressId: address,
    });
  }, [images, category, address]);

  return (
    <Container contentContainerStyle={{ paddingBottom: 120 }}>
      <DefaultTitle title="CADASTRO DO ANÚNCIO" fontSize={20} />

      <InputContainer>
        <Input
          placeholder="Título"
          value={fields.title}
          onChangeText={(val) => {
            setFields({
              ...fields,
              title: val,
            });
          }}
        />
      </InputContainer>

      <InputContainer>
        <Input
          placeholder="Preço"
          keyboardType="numeric"
          value={fields.price}
          onChangeText={(val) => {
            setFields({
              ...fields,
              price: val,
            });
          }}
        />
      </InputContainer>

      <DescriptionContainer>
        <Input
          placeholder="Descrição"
          value={fields.description}
          onChangeText={(val) => {
            setFields({
              ...fields,
              description: val,
            });
          }}
        />
      </DescriptionContainer>

      <UploadInput images={images} setImages={setImages} />

      <DropDownComponent
        data={Category}
        placeholder="Selecione a categoria"
        setSelected={setCategory}
      />

      <DropDownComponent
        data={Address}
        placeholder="Selecione um endereço"
        setSelected={setAddress}
      />

      <DefaultButton
        buttonText="CADASTRAR E PUBLICAR"
        buttonType="primary"
        buttonHandle={handleSubmitProduct}
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
