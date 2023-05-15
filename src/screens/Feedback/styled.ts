import styled from "styled-components/native";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding-top: ${statusBarHeight}px;
`;

export const FeedbackText = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primaryText};
  text-align: center;
  margin: 40px 0px;
`;
