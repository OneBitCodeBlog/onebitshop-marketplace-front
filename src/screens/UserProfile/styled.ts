import styled from "styled-components/native";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding-top: ${statusBarHeight}px;
`;

export const LogOutBtn = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.denounceButton};
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const LogOutText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const DeleteAcc = styled.Text`
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.denounceButton};
`;

export const AddressText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryText};
`;
