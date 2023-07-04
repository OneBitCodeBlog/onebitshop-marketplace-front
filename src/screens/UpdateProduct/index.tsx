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
import { PropsNavigationStack, PropsStack } from "../../routes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image } from "../../entities/Product";

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

type Props = NativeStackScreenProps<PropsNavigationStack, "UpdateProduct">;

const UpdateProduct = ({ route }: Props) => {
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

    if (res.status === 401) return;

    const addressObj = res.data.find(
      (address: Address) => address._id === route.params.addressId
    );

    if (addressObj) {
      setAddressId(`${addressObj.street} Nº ${addressObj.number}`);
    }

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
      _id: route.params._id,
      ...fields,
      published: post,
    };

    const { status } = await productService.updateProduct(params);
    console.log({ status });
    if (status === 204) {
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

  useEffect(() => {
    setFields({
      name: route.params.name,
      price: route.params.price,
      description: route.params.description,
      images: route.params.images,
      category: route.params.category,
      addressId: route.params.addressId,
    });

    const convertedImages = route.params.images.map((image: Image) => ({
      assetId: image.filename,
      uri: image.url,
      width: 200,
      height: 200,
    }));

    setImages(convertedImages);
    setCategory(route.params.category);
  }, []);

  return (
    <Container contentContainerStyle={{ paddingBottom: 120 }}>
      <DefaultTitle title="ATUALIZAÇÃO DO ANÚNCIO" fontSize={20} />

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
          value={parseInt(fields.price).toString()}
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
        placeholder={fields.category}
        setSelected={setCategory}
        saveMethod="value"
      />

      <DropDownComponent
        data={address}
        placeholder={addressId}
        setSelected={setAddressId}
        saveMethod="key"
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

export default UpdateProduct;
