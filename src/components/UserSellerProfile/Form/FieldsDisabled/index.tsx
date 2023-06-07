import React from "react";
import {
  ArrowIconDisabled,
  DropDownDisabled,
  DropDownDisabledContainer,
  InputDisabled,
  PlaceholderDisabled,
} from "./styled";
import { User } from "../../../../entities/User";

const arrowIcon = require("../../../../../assets/icons/arrow-down.png");

interface Props {
  userInfo: User;
}

const FieldsDisabled = ({ userInfo }: Props) => {
  return (
    <>
      <InputDisabled>
        <PlaceholderDisabled>{userInfo.name}</PlaceholderDisabled>
      </InputDisabled>
      <InputDisabled>
        <PlaceholderDisabled>{userInfo.email}</PlaceholderDisabled>
      </InputDisabled>
      <InputDisabled>
        <PlaceholderDisabled>{userInfo.phone}</PlaceholderDisabled>
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
