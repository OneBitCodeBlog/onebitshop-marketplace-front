import { View, Text } from "react-native";
import React from "react";
import { Input, InputContainer, InputMask } from "./styled";

const Form = () => {
  return (
    <>
      <InputContainer>
        <Input placeholder="Nome e sobrenome" placeholderTextColor="#C0C0C1" />
      </InputContainer>
      <InputContainer>
        <Input placeholder="Email" placeholderTextColor="#C0C0C1" />
      </InputContainer>
      <InputContainer>
        <InputMask
          type="cel-phone"
          options={{
            maskType: "BRL",
            withDDD: true,
            dddMask: "(99) ",
          }}
          placeholder="(XX) XXXXX-XXXX"
          placeholderTextColor="#C0C0C1"
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Senha"
          placeholderTextColor="#C0C0C1"
          secureTextEntry
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Confirmação de senha"
          placeholderTextColor="#C0C0C1"
          secureTextEntry
        />
      </InputContainer>
    </>
  );
};

export default Form;
