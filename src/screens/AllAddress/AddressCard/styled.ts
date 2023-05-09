import styled from "styled-components/native";

export const Container = styled.View`
  width: 90%;
  min-height: 80px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 5px;
  margin: 10px auto;
  padding: 10px;
`;

export const ContentTxt = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const DeleteBtn = styled.TouchableOpacity`
  position: absolute;
  bottom: 15px;
  right: 15px;
`;

export const DeleteIcon = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 35px;
  height: 36px;
`;
