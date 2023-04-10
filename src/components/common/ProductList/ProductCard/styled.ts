import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 90%;
  min-height: 140px;
  margin: 10px auto;
  flex-direction: row;
`;

export const ProductImage = styled.Image`
  width: 120px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const ProductInfoContainer = styled.View`
  flex: 1;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding: 10px;
  justify-content: space-between;
`;

export const ProductPriceTitleContainer = styled.View``;

export const ProductPrice = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.secondaryText};
  margin-bottom: 10px;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: bold;
`;

export const InfoLikeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SellerInfoContainer = styled.View``;

export const PublishedText = styled.Text`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const SellerName = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: bold;
`;

export const LikeButton = styled.TouchableOpacity``;

export const LikeIcon = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 30px;
`;
