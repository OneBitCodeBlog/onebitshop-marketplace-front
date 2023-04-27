import styled from "styled-components/native";
import { InputContainer } from "../styled";

export const InputDisabled = styled(InputContainer)`
  background-color: transparent;
`;

export const PlaceholderDisabled = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondaryText};
`;
