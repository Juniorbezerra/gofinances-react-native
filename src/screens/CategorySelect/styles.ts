import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import {Feather} from '@expo/vector-icons';

interface CategoryProps {
  isActive: boolean;
}

export const Container = styled.View`
  flex:1;
  background-color: ${({theme})=> theme.colors.background};
`;

export const Category = styled.TouchableOpacity<CategoryProps>`
  background-color: ${({isActive, theme}) => isActive ? theme.colors.secondary_light : theme.colors.background };
  width: 100%;
  padding: ${RFValue(15)}px;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: 16px;
`;

export const Name = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({theme})=> theme.colors.text};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;