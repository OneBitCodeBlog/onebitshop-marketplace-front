import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const NoResult = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 60%;
  color: white;
`;
