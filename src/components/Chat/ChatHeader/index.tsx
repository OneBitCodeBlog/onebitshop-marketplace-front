import React, { useState } from "react";
import {
  Container,
  ModalButton,
  ModalContainer,
  ModalImage,
  ModalOverlay,
  ModalText,
  Row,
  UserName,
} from "./styled";
import BackIcon from "../../common/BackIcon";
import { Modal } from "react-native";
import { PropsStack } from "../../../routes";
import { useNavigation } from "@react-navigation/native";

const modalImg = require("../../../../assets/icons/dots.png");

const ChatHeader = ({ sellerName, product }: any) => {
  const navigation = useNavigation<PropsStack>();
  const [modalVisible, setModalVisible] = useState(false);

  const handleToggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleSellerProfile = () => {
    navigation.navigate("SellerProfile");
  };

  const handleFeedback = () => {
    navigation.navigate("Feedback");
  };

  const handleDenounce = () => {
    navigation.navigate("Feedback");
  };

  return (
    <Container>
      <Row>
        <BackIcon marginLeft={0} />

        <UserName>{sellerName}</UserName>

        <ModalButton onPress={handleToggleModal}>
          <ModalImage source={modalImg} />
        </ModalButton>

        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <ModalOverlay onPress={handleToggleModal}>
            <ModalContainer>
              <ModalText onPress={handleSellerProfile}>Ver Perfil</ModalText>
              <ModalText>Deletar Conversa</ModalText>
              <ModalText onPress={handleFeedback}>Avaliar</ModalText>
              <ModalText onPress={handleDenounce}>Denunciar</ModalText>
            </ModalContainer>
          </ModalOverlay>
        </Modal>
      </Row>
    </Container>
  );
};

export default ChatHeader;
