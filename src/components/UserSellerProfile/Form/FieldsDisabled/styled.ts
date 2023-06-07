import styled from "styled-components/native";
import { InputContainer } from "../styled";
import {
  ArrowIcon,
  DropDown,
  DropDownContainer,
} from "../../../common/DropDownComponent/styled";

export const InputDisabled = styled(InputContainer)`
  background-color: transparent;
`;

export const PlaceholderDisabled = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const DropDownDisabledContainer = styled(DropDownContainer).attrs({
  pointerEvents: "none",
})``;

export const DropDownDisabled = styled(DropDown).attrs({
  boxStyles: {
    minWidth: "100%",
    backgroundColor: "transparent",
    borderRadius: 5,
    paddingLeft: 10,
  },
  inputStyled: {
    color: "#C0C0C1",
    fontWeight: "bold",
    fontSize: 18,
  },
})``;

export const ArrowIconDisabled = styled(ArrowIcon)``;
