import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  border: 1px dashed ${({ theme }) => theme.colors.borderColor};
  border-radius: 5px;
  margin: 10px auto;
  padding: 0 15px;
  background-color: ${({ theme }) => theme.colors.background};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Icon = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 30px;
  height: 30px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const ImageContainer = styled.View`
  width: 85%;
  margin: 0 auto;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Image = styled.Image`
  width: 60px;
  height: 50px;
  margin: 10px 0;
  margin-right: 10px;
  border-radius: 5px;
`;
