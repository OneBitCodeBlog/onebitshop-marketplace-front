import styled from "styled-components/native";

export const SenderMsgContainer = styled.View`
  width: 200px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.background};
  margin-left: 40%;
  margin-top: 10px;
`;

export const SenderMsg = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: bold;
`;

export const ReciverMsgContainer = styled(SenderMsgContainer)`
  background-color: #3a3a3a;
  margin-left: 30px;
`;

export const ReciverMsg = styled(SenderMsg)``;
