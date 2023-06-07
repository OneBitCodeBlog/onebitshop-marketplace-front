import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  min-height: 300px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  justify-content: center;
  align-items: center;
`;
