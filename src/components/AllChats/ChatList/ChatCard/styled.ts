import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 90%;
  margin: 10px auto;
  flex-direction: row;
`;

export const Image = styled.Image`
  width: 120px;
  height: 140px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const InfoContainer = styled.View`
  flex: 1;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding: 10px;
`;

export const Price = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.secondaryText};
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: bold;
`;

export const SellerTrashContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 22px;
`;

export const SellerContainer = styled.View``;

export const PublishedText = styled.Text`
  font-size: 10px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const SellerName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const TrashButton = styled.TouchableOpacity``;

export const TrashImage = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 24px;
`;
