import React from "react";
import { Button, ButtonText, Container, Input, InputContainer } from "./styled";
import DefaultTitle from "../../components/common/DefaultTitle";
import ProfileInfo from "../../components/common/ProfileInfo";
import NavBar from "../../components/common/NavBar";
import { useNavigation } from "@react-navigation/native";
import { PropsStack } from "../../routes";
import { Alert } from "react-native";

const Denounce = () => {
  const navigation = useNavigation<PropsStack>();

  return (
    <Container>
      <DefaultTitle title="DENUNCIAR" fontSize={20} />

      <ProfileInfo />

      <InputContainer>
        <Input
          multiline
          placeholder="Confirme que você deseja denunciar o perfil acima e escrava aqui a sua denuncia!"
        />
      </InputContainer>

      <Button
        onPress={() => {
          navigation.goBack();
          Alert.alert("Sua denuncia foi enviada com sucesso!");
        }}
      >
        <ButtonText>DENUNCIAR</ButtonText>
      </Button>

      <NavBar />
    </Container>
  );
};

export default Denounce;
