import React from "react";
import {
  Button,
  Container,
  Name,
  NoRate,
  SeeProfile,
  SellerContainer,
} from "./styled";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../../routes";
import { AirbnbRating } from "react-native-ratings";
import useAuth from "../../../hook/useAuth";

interface Props {
  name: string;
}

const SellerInfo = ({ name }: Props) => {
  const navigation = useNavigation<PropsStack>();
  const { token } = useAuth();

  const Rate = null;

  return (
    <Container>
      <SellerContainer>
        <Name>{name}</Name>

        {!Rate ? (
          <NoRate
            onPress={() => {
              !token
                ? navigation.navigate("Login")
                : navigation.navigate("Feedback");
            }}
          >
            Sem avaliação{"\n"}Clique e avalie!
          </NoRate>
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
            />
          </Button>
        )}
      </SellerContainer>

      <SeeProfile
        onPress={() => {
          navigation.navigate("SellerProfile");
        }}
      >
        Ver Perfil
      </SeeProfile>
    </Container>
  );
};

export default SellerInfo;
