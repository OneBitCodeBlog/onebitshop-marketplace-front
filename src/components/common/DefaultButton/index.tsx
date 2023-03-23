import React from "react";
import { ButtonContainer, ButtonText } from "./styled";

type props = {
  buttonText: string;
  buttonType: string;
  marginVertical: number;
  buttonHandle: Function;
};

const DefaultButton = ({
  buttonText,
  buttonType,
  marginVertical,
  buttonHandle,
}: props) => {
  return (
    <ButtonContainer
      type={buttonType}
      marginVertical={marginVertical}
      onPress={() => {
        buttonHandle();
      }}
    >
      <ButtonText>{buttonText}</ButtonText>
    </ButtonContainer>
  );
};

export default DefaultButton;
