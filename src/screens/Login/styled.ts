import styled from "styled-components/native";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding-top: ${statusBarHeight + 20}px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 230px;
  height: 230px;
  margin: 0 auto;
`;

export const InputContainer = styled.View`
  width: 85%;
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

export const ForgetPassword = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: right;
  margin-right: 10%;
  color: ${({ theme }) => theme.colors.secondaryText};
`;
