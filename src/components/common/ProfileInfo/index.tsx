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

const ProfileInfo = () => {
  const navigation = useNavigation<PropsStack>();
  const { token } = useAuth();

  const Rate = null;

  return (
    <>
      <Container>
        <PrincipalInfoContainer>
          <NamePhoneContainer>
            <Name>Lucas Queiroga</Name>
            <Phone>(81) 99999-9999</Phone>
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
        <DefaultText>Usuário desde 20/04/23</DefaultText>
        <DefaultText>04 anúncios ativos</DefaultText>
      </Container>
      <Hr />
    </>
  );
};

export default ProfileInfo;
