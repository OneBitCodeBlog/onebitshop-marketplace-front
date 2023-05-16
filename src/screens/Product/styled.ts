import styled from "styled-components/native";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding-top: ${statusBarHeight}px;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.primaryText};
  margin: 0px 30px;
  font-weight: bold;
`;

export const SubtitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 30px;
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;
