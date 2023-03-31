import styled from "styled-components/native";
import { TextInputMask } from "react-native-masked-text";

export const InputContainer = styled.View`
  width: 90%;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 20px;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primaryText};
  padding-left: 10px;
`;

export const InputMask = styled(TextInputMask)`
  flex: 1;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primaryText};
  padding-left: 10px;
`;
