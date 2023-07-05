import React from "react";
import {
  Container,
  Image,
  InfoContainer,
  Price,
  PublishedText,
  SellerContainer,
  SellerName,
  Title,
  TrashButton,
  TrashImage,
  SellerTrashContainer,
} from "./styled";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../../routes";
import { Chats } from "../../../../entities/Messages";
import getDate from "../../../../utils/getDate";

const trashIcon = require("../../../../../assets/icons/trash.png");

interface Props {
  data: Chats;
}

const ChatCard = ({ data }: Props) => {
  const navigation = useNavigation<PropsStack>();

  return (
    <Container
      onPress={() => {
        navigation.navigate("Chat", {
          _id: data._id,
          product: data.product,
          sellerName: data.seller.name,
          sellerId: data.seller._id,
          buyerId: data.buyer._id,
          messages: data.messages,
        });
      }}
    >
      <Image source={{ uri: data.product.images[0].url }} />
      <InfoContainer>
        <Price>R$ {data.product.price}</Price>
        <Title numberOfLines={2}>{data.product.name}</Title>
        <SellerTrashContainer>
          <SellerContainer>
            <PublishedText>
              Publicado em {getDate(data.product.createdAt)} por:
            </PublishedText>
            <SellerName>{data.seller.name}</SellerName>
          </SellerContainer>
          <TrashButton onPress={() => {}}>
            <TrashImage source={trashIcon} />
          </TrashButton>
        </SellerTrashContainer>
      </InfoContainer>
    </Container>
  );
};

export default ChatCard;
