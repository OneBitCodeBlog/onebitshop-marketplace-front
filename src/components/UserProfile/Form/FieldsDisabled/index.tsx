import React from "react";
import {
  ArrowIconDisabled,
  DropDownDisabled,
  DropDownDisabledContainer,
  InputDisabled,
  PlaceholderDisabled,
} from "./styled";

const arrowIcon = require("../../../../../assets/icons/arrow-down.png");

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
      <DropDownDisabledContainer>
        <DropDownDisabled
          setSelected={() => {}}
          data={[]}
          placeholder="Seus endereços"
          arrowicon={<ArrowIconDisabled source={arrowIcon} />}
        />
      </DropDownDisabledContainer>
      <InputDisabled>
        <PlaceholderDisabled>Senha</PlaceholderDisabled>
      </InputDisabled>
    </>
  );
};

export default FieldsDisabled;
