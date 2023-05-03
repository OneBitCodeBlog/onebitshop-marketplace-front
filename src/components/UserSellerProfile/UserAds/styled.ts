import styled from "styled-components/native";

export const Container = styled.View`
  width: 90%;
  margin: 0 auto;
`;

export const TotalAds = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const NoAds = styled(TotalAds)`
  text-align: center;
  font-size: 20px;
  margin: 30px 0px;
`;

export const Card = styled.TouchableOpacity`
  width: 100%;
  margin: 10px 0;
  flex-direction: row;
`;

export const Image = styled.Image`
  width: 120px;
  height: 140px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const InfoContainer = styled.View`
  width: 65%;
  height: 140px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding: 10px;
  justify-content: space-between;
`;

export const PriceTitleContainer = styled.View``;

export const Title = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: bold;
`;

export const Price = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const PublishedText = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const InfoIconContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const IconButton = styled.TouchableOpacity``;

export const Icon = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 24px;
`;
