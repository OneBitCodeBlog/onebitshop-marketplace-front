import styled from "styled-components/native";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding-top: ${statusBarHeight}px;
`;

export const InputContainer = styled.View`
  width: 90%;
  height: 150px;
  background-color: #3a3a3a;
  margin: 0 auto;
  margin-top: 30px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#C0C0C1",
})`
  width: 100%;
  padding-bottom: 80px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const Button = styled.TouchableOpacity`
  width: 90%;
  min-height: 40px;
  background-color: ${({ theme }) => theme.colors.denounceButton};
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 40px;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: bold;
`;
