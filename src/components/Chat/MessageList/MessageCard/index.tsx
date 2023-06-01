import { View, Text } from "react-native";
import React from "react";
import {
  ReciverMsg,
  ReciverMsgContainer,
  SenderMsg,
  SenderMsgContainer,
} from "./styled";

const MessageCard = ({ item }: any) => {
  return (
    <>
      {item.reciver === "seller" ? (
        <SenderMsgContainer>
          <SenderMsg>{item.content}</SenderMsg>
        </SenderMsgContainer>
      ) : (
        <ReciverMsgContainer>
          <ReciverMsg>{item.content}</ReciverMsg>
        </ReciverMsgContainer>
      )}
    </>
  );
};

export default MessageCard;
