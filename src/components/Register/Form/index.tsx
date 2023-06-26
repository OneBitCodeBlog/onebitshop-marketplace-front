import React, { SetStateAction } from "react";
import { Input, InputContainer, InputMask } from "./styled";

interface Fields {
  name: string;
  email: string;
  password: string;
  phone: string;
  confirmPassword: string;
}

interface Props {
  fields: Fields;
  setFields: React.Dispatch<SetStateAction<Fields>>;
}

const Form = ({ fields, setFields }: Props) => {
  return (
    <>
      <InputContainer>
        <Input
          placeholder="Nome e sobrenome"
          placeholderTextColor="#C0C0C1"
          value={fields.name}
          onChangeText={(val) => {
            setFields({
              ...fields,
              name: val,
            });
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Email"
          placeholderTextColor="#C0C0C1"
          value={fields.email}
          onChangeText={(val) => {
            setFields({
              ...fields,
              email: val,
            });
          }}
        />
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
          value={fields.phone}
          onChangeText={(val) => {
            setFields({
              ...fields,
              phone: val,
            });
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Senha"
          placeholderTextColor="#C0C0C1"
          secureTextEntry
          value={fields.password}
          onChangeText={(val) => {
            setFields({
              ...fields,
              password: val,
            });
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input
          placeholder="Confirmação de senha"
          placeholderTextColor="#C0C0C1"
          secureTextEntry
          value={fields.confirmPassword}
          onChangeText={(val) => {
            setFields({
              ...fields,
              confirmPassword: val,
            });
          }}
        />
      </InputContainer>
    </>
  );
};

export default Form;
