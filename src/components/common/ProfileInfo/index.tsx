import { View, Text } from "react-native";
import React from "react";
import {
  Button,
  Container,
  DefaultText,
  Hr,
  Name,
  NamePhoneContainer,
  Phone,
  PrincipalInfoContainer,
} from "./styled";
import { AirbnbRating } from "react-native-ratings";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../routes";
import useAuth from "../../../hook/useAuth";
import { User } from "../../../entities/User";
import getDate from "../../../utils/getDate";

interface Props {
  userInfo: User;
}

const ProfileInfo = ({ userInfo }: Props) => {
  const navigation = useNavigation<PropsStack>();
  const { token } = useAuth();
  console.log(userInfo);
  const Rate = userInfo.avarageRating;

  return (
    <>
      <Container>
        <PrincipalInfoContainer>
          <NamePhoneContainer>
            <Name>{userInfo.name}</Name>
            <Phone>{userInfo.phone}</Phone>
          </NamePhoneContainer>

          {!Rate ? (
            <DefaultText
              onPress={() => {
                !token
                  ? navigation.navigate("Login")
                  : navigation.navigate("Feedback");
              }}
            >
              Sem Avaliações{"\n"}Clique e avalie!
            </DefaultText>
          ) : (
            <Button
              onPress={() => {
                !token
                  ? navigation.navigate("Login")
                  : navigation.navigate("Feedback");
              }}
            >
              <AirbnbRating
                selectedColor="#5F96ED"
                showRating={false}
                isDisabled={true}
                size={16}
                defaultRating={Rate}
                starContainerStyle={{
                  paddingTop: 4,
                }}
              />
            </Button>
          )}
        </PrincipalInfoContainer>
        <DefaultText>Usuário desde {getDate(userInfo.createdAt)}</DefaultText>
        <DefaultText>
          {userInfo.products.length.toString().padStart(2, "0")} anúncios ativos
        </DefaultText>
      </Container>
      <Hr />
    </>
  );
};

export default ProfileInfo;
