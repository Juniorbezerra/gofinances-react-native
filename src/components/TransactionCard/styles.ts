import styled from "styled-components/native";
import {Feather} from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize";


interface TransactionProps{
  type: 'positive'| 'negative';
}

export const Container = styled.View`
  width: 100%;
  padding: 17px 24px;
  border-radius: 5px;
  background-color: ${({theme})=> theme.colors.shape};
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme})=> theme.fonts.regular};
  color: ${({theme})=> theme.colors.title};
`;

export const Amount = styled.Text<TransactionProps>`
  font-size: ${RFValue(20)}px;
  font-family: ${({theme})=> theme.fonts.regular};
  color: ${({theme, type})=> type == 'positive' ? theme.colors.success : theme.colors.attention};
  margin-top: 2px;
`;

export const Footer = styled.View`
  margin-top: 19px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CategoryName = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme})=> theme.fonts.regular};
  color: ${({theme})=> theme.colors.text};
  margin-left: 17px;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({theme})=> theme.colors.text};
`;

export const Date = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme})=> theme.fonts.regular};
  color: ${({theme})=> theme.colors.text};
`;

