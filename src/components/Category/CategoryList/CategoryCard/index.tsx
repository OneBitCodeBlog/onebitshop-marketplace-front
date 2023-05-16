import React from "react";
import { Product } from "../../../../screens/Categories";
import {
  Button,
  Container,
  Image,
  InfoContainer,
  Like,
  LikeContainer,
  Price,
  PublishedText,
  Title,
} from "./styled";

interface Props {
  product: Product;
}

const likeImg = require("../../../../../assets/icons/like.png");

const CategoryCard = ({ product }: Props) => {
  return (
    <Container activeOpacity={0.85} onPress={() => {}}>
      <Image source={{ uri: product.productImage }} />
      <InfoContainer>
        <Price>R$ {product.price}</Price>
        <Title numberOfLines={2}>{product.title}</Title>

        <LikeContainer>
          <PublishedText>
            Publicado em{"\n"}
            {product.publishedData}
          </PublishedText>

          <Button onPress={() => {}} activeOpacity={0.85}>
            <Like source={likeImg} />
          </Button>
        </LikeContainer>
      </InfoContainer>
    </Container>
  );
};

export default CategoryCard;
