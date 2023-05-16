import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding-left: 30px;
  margin: 15px 0px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: bold;
`;

export const SeeMore = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: bold;
  padding-right: 30px;
`;
