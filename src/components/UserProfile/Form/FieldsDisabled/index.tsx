import React from "react";
import { InputDisabled, PlaceholderDisabled } from "./styled";

const FieldsDisabled = () => {
  return (
    <>
      <InputDisabled>
        <PlaceholderDisabled>Lucas Queiroga</PlaceholderDisabled>
      </InputDisabled>
      <InputDisabled>
        <PlaceholderDisabled>lucasqueiroga@email.com</PlaceholderDisabled>
      </InputDisabled>
      <InputDisabled>
        <PlaceholderDisabled>(81) 99999-9999</PlaceholderDisabled>
      </InputDisabled>
      <InputDisabled>
        <PlaceholderDisabled>DROPDOWN</PlaceholderDisabled>
      </InputDisabled>
      <InputDisabled>
        <PlaceholderDisabled>Senha</PlaceholderDisabled>
      </InputDisabled>
    </>
  );
};

export default FieldsDisabled;
