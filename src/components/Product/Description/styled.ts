import styled from "styled-components/native";

export const DescriptionTxt = styled.Text`
  font-size: 16px;
  margin: 10px 30px;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const ReadMoreLess = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondaryText};
  text-align: center;
  font-weight: bold;
`;
