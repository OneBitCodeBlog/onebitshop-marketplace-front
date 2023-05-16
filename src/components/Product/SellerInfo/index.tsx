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

const SellerInfo = () => {
  const navigation = useNavigation<PropsStack>();

  const Rate = 3;

  return (
    <Container>
      <SellerContainer>
        <Name>Lucas Queiroga</Name>

        {!Rate ? (
          <NoRate
            onPress={() => {
              navigation.navigate("Feedback");
            }}
          >
            Sem avaliação{"\n"}Clique e avalie!
          </NoRate>
        ) : (
          <Button
            onPress={() => {
              navigation.navigate("Feedback");
            }}
          >
            <AirbnbRating
              selectedColor="#5F96ED"
              showRating={false}
              isDisabled={true}
              size={16}
              defaultRating={Rate}
              starContainerStyle={{
                marginLeft: -20,
              }}
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
