import React from "react";
import { InputDisabled, PlaceholderDisabled } from "./styled";
import DropDownComponent from "../../../common/DropDownComponent";

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
      <DropDownComponent />
      <InputDisabled>
        <PlaceholderDisabled>Senha</PlaceholderDisabled>
      </InputDisabled>
    </>
  );
};

export default FieldsDisabled;
