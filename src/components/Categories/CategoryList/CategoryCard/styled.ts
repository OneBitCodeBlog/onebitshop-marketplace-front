import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 240px;
  min-height: 230px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 5px;
  margin-right: 20px;
`;

export const Image = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 100%;
  height: 130px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

export const TextContainer = styled.View`
  margin: 8px 12px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: bold;
`;

export const Price = styled.Text`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const SellerLikeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
`;

export const SellerName = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primaryText};
`;
