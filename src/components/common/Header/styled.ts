import styled from "styled-components/native";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: 100px;
  padding: 0px 20px;
  padding-top: ${statusBarHeight}px;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 100px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  width: 65%;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 5px;
  justify-content: flex-end;
  align-items: center;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding: 2px 10px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const Search = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 18px;
  margin-right: 10px;
`;
