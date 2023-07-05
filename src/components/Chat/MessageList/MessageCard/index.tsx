import React, { useEffect, useState } from "react";
import {
  ReciverMsg,
  ReciverMsgContainer,
  SenderMsg,
  SenderMsgContainer,
} from "./styled";
import { Messages } from "../../../../entities/Messages";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  item: Messages;
}

const MessageCard = ({ item }: Props) => {
  const [senderId, setSenderId] = useState("");

  const handleGetUser = async () => {
    const user = await AsyncStorage.getItem("user");
    const { _id } = JSON.parse(user || "");

    setSenderId(_id);
  };

  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <>
      {item.sender === senderId ? (
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
