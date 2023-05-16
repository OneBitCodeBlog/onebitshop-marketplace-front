import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 30px;
`;

export const SellerContainer = styled.View``;

export const Name = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity``;

export const SeeProfile = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const NoRate = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;
