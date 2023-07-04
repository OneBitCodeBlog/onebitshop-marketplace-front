import React from "react";
import {
  Card,
  Container,
  Image,
  InfoContainer,
  InfoIconContainer,
  NoAds,
  Price,
  PriceTitleContainer,
  PublishedText,
  Title,
  TotalAds,
  IconButton,
  Icon,
} from "./styled";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../routes";

import { Product } from "../../../entities/Product";
import getDate from "../../../utils/getDate";
import productService from "../../../services/productService";
import { Alert } from "react-native";

const trashIcon = require("../../../../assets/icons/trash.png");
const favoriteIcon = require("../../../../assets/icons/like.png");

interface ProductProps {
  product: Product[];
  seller: boolean;
}

const UserAds = ({ product, seller }: ProductProps) => {
  const navigation = useNavigation<PropsStack>();

  const handleDeleteProduct = async (_id: string) => {
    const params = {
      _id,
    };

    const res = await productService.deleteProduct(params);

    if (res.status === 204) {
      Alert.alert("Produto deletado com sucesso");

      navigation.navigate("Home");
    }
  };

  return (
    <Container>
      <TotalAds>Você tem {product.length} anúncios</TotalAds>

      {product.length > 0 ? (
        product.map((product) => (
          <Card
            key={product._id}
            activeOpacity={0.85}
            onPress={() => {
              navigation.navigate("UpdateProduct", {
                _id: product._id,
                name: product.name,
                price: product.price,
                description: product.description,
                images: product.images,
                category: product.category,
                addressId: product.address._id,
                published: product.publishedData,
              });
            }}
          >
            <Image
              source={{
                uri: product.images[0].url,
              }}
            />

            <InfoContainer>
              <PriceTitleContainer>
                <Price>R$ {product.price}</Price>
                <Title numberOfLines={2}>{product.name}</Title>
              </PriceTitleContainer>

              {!seller ? (
                <InfoIconContainer>
                  <PublishedText>
                    Publicado em {getDate(product.createdAt)}
                  </PublishedText>

                  <IconButton
                    activeOpacity={0.85}
                    onPress={() => {
                      Alert.alert(
                        "Você tem certeza?",
                        "Ao fazer isso você deleterá permanentemente o produto",
                        [
                          {
                            text: "Sim",
                            onPress: () => {
                              handleDeleteProduct(product._id);
                            },
                          },
                          {
                            text: "Não",
                          },
                        ]
                      );
                    }}
                  >
                    <Icon source={trashIcon} />
                  </IconButton>
                </InfoIconContainer>
              ) : (
                <InfoIconContainer>
                  <PublishedText>
                    Publicado em {getDate(product.createdAt)}
                  </PublishedText>

                  <IconButton activeOpacity={0.85} onPress={() => {}}>
                    <Icon source={favoriteIcon} />
                  </IconButton>
                </InfoIconContainer>
              )}
            </InfoContainer>
          </Card>
        ))
      ) : (
        <NoAds>Por enquanto você não tem anúncios</NoAds>
      )}
    </Container>
  );
};

export default UserAds;
