import styled from "styled-components/native";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding-top: ${statusBarHeight}px;
`;

export const NoAdd = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryText};
  text-align: center;
  margin-top: 50%;
  margin-bottom: 5%;
`;

export const CreateAddBtn = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.primaryButton};
  margin: 0 auto;
  border-radius: 5px;
`;

export const CreateAddBtnTxt = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const ListHeight = styled.View`
  min-height: 460px;
  max-height: 460px;
  margin-bottom: 30px;
`;
