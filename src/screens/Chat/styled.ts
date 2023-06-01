import styled from "styled-components/native";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding-top: ${statusBarHeight}px;
`;

export const InputContainer = styled.View`
  width: 85%;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.background};
  margin: 0 auto;
  margin-bottom: 20%;
  padding: 5px 10px;
  flex-direction: row;
  align-items: center;
`;

export const SendButton = styled.TouchableOpacity``;

export const SendIcon = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 30px;
  height: 30px;
`;

export const Input = styled.TextInput`
  flex: 1;
  max-height: 80px;
  color: ${({ theme }) => theme.colors.primaryText};
  padding-right: 10px;
  font-size: 16px;
`;
