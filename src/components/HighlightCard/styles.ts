import styled, {css} from "styled-components/native";
import {Feather} from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize";

interface TypeProps {
  type: 'up'| 'down' | 'total';
}

export const Container = styled.View<TypeProps>`
  width: ${RFValue(300)}px;
  background-color: ${({theme, type}) => type === "total" ? theme.colors.secondary : theme.colors.shape};
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  border-radius: 5px;
  margin-right: 16px;
`;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const Title = styled.Text<TypeProps>`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme, type}) => type === "total" ? theme.colors.shape : theme.colors.text_dark};
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;
  ${({type}) => type === 'up' && css`
    color: ${({theme}) => theme.colors.success};
  `};

  ${({type}) => type === 'down' && css`
    color: ${({theme}) => theme.colors.attention};
  `};

  ${({type}) => type === 'total' && css`
    color: ${({theme}) => theme.colors.shape};
  `};
`;

export const Footer = styled.View`
  margin-top: 38px;
`;

export const Amount = styled.Text<TypeProps>`
  font-size: ${RFValue(32)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme, type}) => type === "total" ? theme.colors.shape : theme.colors.text_dark};
`;

export const LastTransaction = styled.Text<TypeProps>`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme, type}) => type === 'total' ? theme.colors.shape : theme.colors.text};
  margin-top: -15px;
`;