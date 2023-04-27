import React, { useState } from "react";
import { InputContainer } from "../styled";
import { AddressText, Input } from "./styled";
import { Alert } from "react-native";
import DefaultButton from "../../../common/DefaultButton";
import DropDownComponent from "../../../common/DropDownComponent";

const FieldsAbled = () => {
  const [select, setSelect] = useState("");

  const Data = [
    { value: "Endereço de teste", disabled: true },
    { value: "Endereço de teste", disabled: true },
  ];

  return (
    <>
      <InputContainer>
        <Input value="Lucas Queiroga" />
      </InputContainer>
      <InputContainer>
        <Input value="lucasqueiroga@email.com" />
      </InputContainer>
      <InputContainer>
        <Input value="(81) 99999-9999" />
      </InputContainer>
      <DropDownComponent
        data={Data}
        placeholder="Seus endereços"
        setSelected={setSelect}
      />
      <InputContainer>
        <Input
          placeholder="Senha"
          placeholderTextColor="#C0C0C1"
          secureTextEntry
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Nova Senha"
          placeholderTextColor="#C0C0C1"
          secureTextEntry
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Confirmar Nova Senha"
          placeholderTextColor="#C0C0C1"
          secureTextEntry
        />
      </InputContainer>

      <AddressText
        onPress={() => {
          Alert.alert("Texto clicado");
        }}
      >
        Gerenciar Endereços
      </AddressText>

      <DefaultButton
        buttonText="Salvar Alterações"
        buttonHandle={() => {
          Alert.alert("Opções alteradas");
        }}
        buttonType="primary"
        marginVertical={10}
      />
    </>
  );
};

export default FieldsAbled;
