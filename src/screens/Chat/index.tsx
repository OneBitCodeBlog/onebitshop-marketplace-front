import React from "react";
import {
  Container,
  Input,
  InputContainer,
  SendButton,
  SendIcon,
} from "./styled";
import NavBar from "../../components/common/NavBar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PropsNavigationStack } from "../../routes";
import ChatHeader from "../../components/Chat/ChatHeader";
import MessageList from "../../components/Chat/MessageList";

type Props = NativeStackScreenProps<PropsNavigationStack, "Chat">;

const sendIcon = require("../../../assets/icons/send.png");

const Chat = ({ route }: Props) => {
  return (
    <Container>
      <ChatHeader
        sellerName={route.params.sellerName}
        sellerId={route.params.sellerId}
        product={route.params.product}
      />

      <MessageList messages={route.params.messages} />

      <InputContainer>
        <Input
          placeholder="Digite a sua mensagem!"
          placeholderTextColor="white"
          multiline
        />
        <SendButton onPress={() => {}}>
          <SendIcon source={sendIcon} />
        </SendButton>
      </InputContainer>

      <NavBar />
    </Container>
  );
};

export default Chat;
