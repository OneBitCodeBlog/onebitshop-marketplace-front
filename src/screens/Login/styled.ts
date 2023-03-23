import styled from "styled-components/native";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.View`
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
