import { Alert } from "react-native";
import React, { useState } from "react";
import { BtnImg, Container, EditBtn, EditBtnContainer } from "./styled";
import FieldsDisabled from "./FieldsDisabled";
import FieldsAbled from "./FieldsAbled";
import { User } from "../../../entities/User";

const btnImg = require("../../../../assets/icons/edit.png");

interface Props {
  userInfo: User;
}

const Form = ({ userInfo }: Props) => {
  const [editable, setEditable] = useState(false);

  const handleToggleEditable = () => {
    setEditable(!editable);
  };

  return (
    <Container>
      <EditBtnContainer>
        <EditBtn onPress={handleToggleEditable}>
          <BtnImg source={btnImg} />
        </EditBtn>
      </EditBtnContainer>

      {!editable ? (
        <FieldsDisabled userInfo={userInfo} />
      ) : (
        <FieldsAbled userInfo={userInfo} />
      )}
    </Container>
  );
};

export default Form;
