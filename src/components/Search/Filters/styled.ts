import styled from "styled-components/native";

export const Container = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const OrderText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const Bold = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const ModalOverlay = styled.TouchableOpacity`
  flex: 1;
`;

export const ModalContainer = styled.View`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 5px;
  margin-left: 26%;
  margin-top: 25%;
  justify-content: center;
`;

export const ModalText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin: 5px;
  margin-left: 8px;
`;

export const FiltersContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const FiltersIcon = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 18px;
  margin-right: 5px;
`;

export const FiltersText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;
