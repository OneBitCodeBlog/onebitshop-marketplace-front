import styled from "styled-components/native";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding-top: ${statusBarHeight}px;
`;

export const AdsContainer = styled.View`
  margin: 20px 0px;
`;

export const DenounceText = styled.Text`
  font-size: 18px;
  text-align: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;
