import styled from "styled-components/native";
import Constants from "expo-constants";
import { TextInputMask } from "react-native-masked-text";

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding-top: ${statusBarHeight}px;
`;

export const InputContainer = styled.View`
  width: 90%;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 5px;
  margin: 10px auto;
  padding-left: 10px;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const InputMask = styled(TextInputMask)`
  flex: 1;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primaryText};
`;
