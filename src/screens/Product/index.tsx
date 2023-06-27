import React from "react";
import {
  Button,
  Container,
  DenounceSeller,
  InfoContainer,
  InteractionsContainer,
  Like,
  Price,
  Share,
  SubTitle,
  SubtitleContainer,
} from "./styled";
import BackIcon from "../../components/common/BackIcon";
import { Title } from "./styled";
import Carousel from "../../components/Product/Carousel";
import Description from "../../components/Product/Description";
import SellerInfo from "../../components/Product/SellerInfo";
import DefaultButton from "../../components/common/DefaultButton";
import { useNavigation } from "@react-navigation/native";
import { PropsNavigationStack, PropsStack } from "../../routes";
import useAuth from "../../hook/useAuth";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import getDate from "../../utils/getDate";

const like = require("../../../assets/icons/like.png");
const share = require("../../../assets/icons/share.png");

type Props = NativeStackScreenProps<PropsNavigationStack, "Product">;

const Product = ({ route }: Props) => {
  const navigation = useNavigation<PropsStack>();
  const { token } = useAuth();

  const { params } = route;

  return (
    <Container contentContainerStyle={{ paddingBottom: 50 }}>
      <BackIcon marginLeft={30} />

      <Title>{params.name}</Title>
      <SubtitleContainer>
        <SubTitle>Publicado em {getDate(params.createdAt)}</SubTitle>
        {/* <SubTitle>Recife, PE</SubTitle> */}
      </SubtitleContainer>

      <Carousel images={params.images} />

      <InfoContainer>
        <Price>R$ {params.price}</Price>

        <InteractionsContainer>
          <Button>
            <Like source={like} />
          </Button>

          <Button>
            <Share source={share} />
          </Button>
        </InteractionsContainer>
      </InfoContainer>

      <Description desc={params.description} />

      <SellerInfo name={params.seller.name} />

      <DefaultButton
        buttonText="FALE COM O VENDEDOR"
        buttonType={"primary"}
        marginVertical={0}
        buttonHandle={() => {}}
      />

      <DenounceSeller
        onPress={() => {
          !token
            ? navigation.navigate("Login")
            : navigation.navigate("Denounce");
        }}
      >
        Denunciar o vendedor!
      </DenounceSeller>
    </Container>
  );
};

export default Product;
