import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin: 20px 0;
`;

export const EditBtnContainer = styled.View`
  width: 90%;
  align-items: flex-end;
  margin: 0 auto;
  margin-bottom: 10px;
`;

export const EditBtn = styled.TouchableOpacity``;

export const BtnImg = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 35px;
  height: 35px;
`;

export const InputContainer = styled.View`
  width: 90%;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 5px;
  margin: 10px auto;
  padding-left: 10px;
  justify-content: center;
`;
