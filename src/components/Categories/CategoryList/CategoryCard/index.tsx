import React from "react";
import {
  Container,
  Image,
  LikeButton,
  Price,
  SellerLikeContainer,
  SellerName,
  TextContainer,
  Title,
} from "./styled";
import { LikeIcon } from "../../../common/ProductList/styled";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../../routes";

import { Product } from "../../../../entities/Product";

interface ProductProps {
  product: Product;
}

const likeIcon = require("../../../../../assets/icons/like.png");

const CategoryCard = ({ product }: ProductProps) => {
  const navigation = useNavigation<PropsStack>();

  return (
    <Container
      onPress={() => {
        navigation.navigate("Product", {
          ...product,
        });
      }}
    >
      <Image source={{ uri: product.images[0].url }} />
      <TextContainer>
        <Title>{product.name}</Title>
        <Price>R$ {product.price}</Price>

        <SellerLikeContainer>
          <SellerName>Lucas Queiroga</SellerName>

          <LikeButton>
            <LikeIcon source={likeIcon} />
          </LikeButton>
        </SellerLikeContainer>
      </TextContainer>
    </Container>
  );
};

export default CategoryCard;
