import { View, Text, Alert } from "react-native";
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
import addressService from "../../services/addressService";
import { Address } from "../../entities/User";
import productService from "../../services/productService";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes";

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
  const navigation = useNavigation<PropsStack>();
  const [category, setCategory] = useState("");
  const [addressId, setAddressId] = useState("");
  const [address, setAddress] = useState([]);
  const [images, setImages] = useState<ImagePickerAsset[]>([]);
  const [fields, setFields] = useState({
    name: "",
    price: "",
    description: "",
    images: [{}],
    category: "",
    addressId: "",
  });

  const handleGetAddress = async () => {
    const res = await addressService.getAddress();

    const value = res.data.map((address: Address) => {
      return {
        key: address._id,
        value: `${address.street} Nº ${address.number}`,
      };
    });

    setAddress(value);
  };

  const handleSubmitProduct = async (post: string) => {
    if (
      Object.values(fields).some((value) => !value || !fields.images.length)
    ) {
      Alert.alert("Um dos seus campos está vazio");

      return;
    }

    const params = {
      ...fields,
      images: images.map(({ uri }) => ({
        filename: uri.substring(uri.lastIndexOf("/") + 1),
        uri,
        url: "",
        type: `image/${uri.split(".").slice(-1).toString()}`,
      })),
      published: post,
    };

    const { status } = await productService.addProduct(params);

    if (status === 201) {
      Alert.alert("Seu produto foi cadastado com sucesso!");

      navigation.navigate("Home");
    }
  };

  useEffect(() => {
    setFields({
      ...fields,
      images: images,
      category: category,
      addressId: addressId,
    });
  }, [images, category, addressId]);

  useEffect(() => {
    handleGetAddress();
  }, []);

  return (
    <Container contentContainerStyle={{ paddingBottom: 120 }}>
      <DefaultTitle title="CADASTRO DO ANÚNCIO" fontSize={20} />

      <InputContainer>
        <Input
          placeholder="Título"
          value={fields.name}
          onChangeText={(val) => {
            setFields({
              ...fields,
              name: val,
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
        data={address}
        placeholder="Selecione um endereço"
        setSelected={setAddressId}
      />

      <DefaultButton
        buttonText="CADASTRAR E PUBLICAR"
        buttonType="primary"
        buttonHandle={() => {
          handleSubmitProduct("true");
        }}
        marginVertical={20}
      />

      <Division>Ou</Division>

      <DefaultButton
        buttonText="SALVAR COMO RASCUNHO"
        buttonType="secondary"
        buttonHandle={() => {
          handleSubmitProduct("false");
        }}
        marginVertical={20}
      />
    </Container>
  );
};

export default AddProduct;
