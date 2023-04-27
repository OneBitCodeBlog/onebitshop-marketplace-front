import React from "react";
import {
  Card,
  Container,
  Image,
  InfoContainer,
  InfoTrashContainer,
  NoAds,
  Price,
  PriceTitleContainer,
  PublishedText,
  Title,
  TotalAds,
  TrashButton,
  TrashIcon,
} from "./styled";

const trashIcon = require("../../../../assets/icons/trash.png");

interface Product {
  id: string;
  productImage: string;
  price: string;
  title: string;
  publishedData: string;
}

interface ProductProps {
  product: Product[];
}

const UserAds = ({ product }: ProductProps) => {
  return (
    <Container>
      <TotalAds>Você tem {product.length} anúncios</TotalAds>

      {product.length > 0 ? (
        product.map((product) => (
          <Card key={product.id} activeOpacity={0.85} onPress={() => {}}>
            <Image
              source={{
                uri: product.productImage,
              }}
            />

            <InfoContainer>
              <PriceTitleContainer>
                <Price>R$ {product.price}</Price>
                <Title numberOfLines={2}>{product.title}</Title>
              </PriceTitleContainer>

              <InfoTrashContainer>
                <PublishedText>
                  Publicado em {product.publishedData}
                </PublishedText>

                <TrashButton activeOpacity={0.85} onPress={() => {}}>
                  <TrashIcon source={trashIcon} />
                </TrashButton>
              </InfoTrashContainer>
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
