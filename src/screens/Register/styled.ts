import styled from "styled-components/native";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding-top: ${statusBarHeight + 20}px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryText};
  margin: 15px 0;
  text-align: center;
`;
