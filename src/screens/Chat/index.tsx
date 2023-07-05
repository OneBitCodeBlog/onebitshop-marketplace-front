import React, { useEffect, useState } from "react";
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
import { Socket, io } from "socket.io-client";

import * as SecureStore from "expo-secure-store";
import { Messages } from "../../entities/Messages";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = NativeStackScreenProps<PropsNavigationStack, "Chat">;

const sendIcon = require("../../../assets/icons/send.png");

let socket: Socket | null = null;

const connectSocket = async () => {
  const token = await SecureStore.getItemAsync("onebitshop-token");

  socket = io("ws://192.168.0.10:3000", {
    auth: {
      token,
    },
  });
};

connectSocket();

const Chat = ({ route }: Props) => {
  const [content, setContent] = useState("");
  const [receiver, setReceiver] = useState("");
  const [sender, setSender] = useState("");
  const [messagesList, setMessageList] = useState<Messages[]>([]);

  const handleGetUsers = async () => {
    const user = await AsyncStorage.getItem("user");
    const { _id } = JSON.parse(user || "");

    if (route.params.buyerId === _id) {
      setSender(route.params.buyerId);
      setReceiver(route.params.sellerId);
    } else {
      setSender(route.params.sellerId);
      setReceiver(route.params.buyerId);
    }
  };

  const handleSendMessage = async () => {
    const message = {
      content,
      receiver,
      sender,
    };

    const conversationId = route.params._id;

    socket?.emit("message_sent", {
      conversationId,
      message,
    });

    setContent("");
  };

  useEffect(() => {
    setMessageList(route.params.messages);
    handleGetUsers();
  }, []);

  useEffect(() => {
    socket?.on("new_message", (newMessage) => {
      console.log(newMessage);
      setMessageList((recentState) => [newMessage.message, ...recentState]);
    });

    return () => {
      socket?.off("new_message");
    };
  }, [socket]);

  return (
    <Container>
      <ChatHeader
        sellerName={route.params.sellerName}
        sellerId={route.params.sellerId}
        product={route.params.product}
      />

      <MessageList messages={messagesList} />

      <InputContainer>
        <Input
          placeholder="Digite a sua mensagem!"
          placeholderTextColor="white"
          multiline
          value={content}
          onChangeText={(val) => {
            setContent(val);
          }}
        />
        <SendButton onPress={handleSendMessage}>
          <SendIcon source={sendIcon} />
        </SendButton>
      </InputContainer>

      <NavBar />
    </Container>
  );
};

export default Chat;
