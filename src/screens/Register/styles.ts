import styled from "styled-components/native";

export const Container =  styled.View`
  flex: 1;
  background-color: ${({theme})=> theme.colors.background};
`;

export const Form = styled.View`
  flex:1;
  width: 100%;
  padding: 24px;
`;