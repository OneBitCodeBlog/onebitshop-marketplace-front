import styled from "styled-components/native";

export const Container = styled.View`
  width: 90%;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.colors.background};
  margin: 0 auto;
  border-radius: 5px;
`;

export const PrincipalInfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const NamePhoneContainer = styled.View``;

export const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const Phone = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const DefaultText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const Hr = styled.View`
  width: 90%;
  height: 1px;
  background-color: #383838;
  margin: 0 auto;
  margin-top: 20px;
`;

export const Button = styled.TouchableOpacity``;
