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
import { Product } from "../../../../screens/Categories";
import { LikeIcon } from "../../../common/ProductList/styled";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../../routes";

interface ProductProps {
  product: Product;
}

const likeIcon = require("../../../../../assets/icons/like.png");

const CategoryCard = ({ product }: ProductProps) => {
  const navigation = useNavigation<PropsStack>();

  return (
    <Container
      onPress={() => {
        navigation.navigate("Product");
      }}
    >
      <Image source={{ uri: product.productImage }} />
      <TextContainer>
        <Title>{product.title}</Title>
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
