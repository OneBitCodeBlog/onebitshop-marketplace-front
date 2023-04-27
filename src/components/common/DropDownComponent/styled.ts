import { SelectList } from "react-native-dropdown-select-list";
import styled from "styled-components/native";

export const DropDownContainer = styled.View`
  width: 90%;
  margin: 10px auto;
`;

export const DropDown = styled(SelectList).attrs({
  boxStyles: {
    maxWidth: "100%",
    minWidth: "100%",
    backgroundColor: "#171717",
    borderRadius: 5,
    paddingLeft: 10,
  },
  inputStyles: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  dropdownStyles: {
    borderRadius: 5,
  },
  dropdownTextStyles: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  disabledItemStyles: {
    backgroundColor: "transparent",
  },
})``;

export const ArrowIcon = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 26px;
  height: 26px;
`;
