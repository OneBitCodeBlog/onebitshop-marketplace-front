import React from "react";
import { Container } from "./styled";
import NavBar from "../../components/common/NavBar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PropsNavigationStack } from "../../routes";

type Props = NativeStackScreenProps<PropsNavigationStack, "Chat">;

const Chat = ({ route }: Props) => {
  return (
    <Container>
      <NavBar />
    </Container>
  );
};

export default Chat;
