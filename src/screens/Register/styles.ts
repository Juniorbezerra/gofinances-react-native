import styled from "styled-components/native";

export const Container =  styled.View`
  flex: 1;
  background-color: ${({theme})=> theme.colors.background};
`;

export const Form = styled.View`
  flex:1;
  justify-content: space-between;
  width: 100%;
  padding: 24px;
`;

export const Fields = styled.View``;

export const TransactionsTypes = styled.View`
  margin-top:8px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;
