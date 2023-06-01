import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  margin: 0 auto;
  flex-direction: row;
`;

export const Image = styled.Image`
  width: 80px;
  height: auto;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const InfoContainer = styled.View`
  flex: 1;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding: 10px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondaryText};
  margin-top: 10px;
`;
