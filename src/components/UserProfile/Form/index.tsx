import { Alert } from "react-native";
import React from "react";
import { BtnImg, Container, EditBtn, EditBtnContainer } from "./styled";
import FieldsDisabled from "./FieldsDisabled";

const btnImg = require("../../../../assets/icons/edit.png");

const Form = () => {
  return (
    <Container>
      <EditBtnContainer>
        <EditBtn
          onPress={() => {
            Alert.alert("Modificado");
          }}
        >
          <BtnImg source={btnImg} />
        </EditBtn>
      </EditBtnContainer>

      <FieldsDisabled />
    </Container>
  );
};

export default Form;
