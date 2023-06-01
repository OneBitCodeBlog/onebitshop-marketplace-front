import React from "react";
import { Container } from "./styled";
import NavBar from "../../components/common/NavBar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PropsNavigationStack } from "../../routes";
import ChatHeader from "../../components/Chat/ChatHeader";
import MessageList from "../../components/Chat/MessageList";

type Props = NativeStackScreenProps<PropsNavigationStack, "Chat">;

const Chat = ({ route }: Props) => {
  return (
    <Container>
      <ChatHeader
        sellerName={route.params.chatInfo.seller}
        product={route.params.chatInfo.product}
      />

      <MessageList messages={route.params.chatInfo.messages} />

      <NavBar />
    </Container>
  );
};

export default Chat;
