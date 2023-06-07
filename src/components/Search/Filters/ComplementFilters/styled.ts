import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding-bottom: 35px;
  padding-top: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryText};
  text-align: center;
  margin-top: 10px;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 6%;
`;

export const PriceInputContainer = styled.View`
  width: 150px;
  height: 45px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 5px;
`;

export const LocationInputContainer = styled(PriceInputContainer)`
  width: 90%;
  margin: 10px auto;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primaryText};
  padding: 0px 10px;
`;

export const ButtonsContainer = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 10px;
`;

export const CleanButton = styled.TouchableOpacity`
  width: 170px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.secondaryButton};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const AplyButton = styled(CleanButton)`
  background-color: ${({ theme }) => theme.colors.primaryButton};
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryText};
`;
