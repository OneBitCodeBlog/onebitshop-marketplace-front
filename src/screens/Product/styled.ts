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

export const InfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 30px;
  align-items: center;
`;

export const Price = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const InteractionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  margin-left: 15px;
`;

export const Share = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 24px;
  margin-right: 15px;
`;

export const DenounceSeller = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondaryText};
  margin-top: 20px;
`;
