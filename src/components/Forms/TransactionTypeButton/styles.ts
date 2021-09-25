import {RFValue } from "react-native-responsive-fontsize";
import styled, {css} from "styled-components/native";
import {Feather} from '@expo/vector-icons'
import { RectButton } from "react-native-gesture-handler";

interface IconProps {
  type: 'up' | 'down';
}

interface ContainerProps {
  isActive: boolean;
  type: 'up' | 'down';
}

export const Container = styled.View<ContainerProps>`
  width: 48%;
  height: ${RFValue(56)}px;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.colors.text};
  border-width: ${({ isActive }) => isActive ? 0 : 1.5}px;
  border-style: solid;
  
  ${({ isActive, type }) => isActive && type === 'up' && css`
    background-color: ${({ theme }) => theme.colors.success_light};
  `};
  ${({ isActive, type }) => isActive && type === 'down' && css`
    background-color: ${({ theme }) => theme.colors.attention_light};
  `};
`;

export const Button = styled(RectButton)`
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;
  color: ${({ theme, type }) =>
    type === 'up' ? theme.colors.success : theme.colors.attention
  }
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme})=>theme.fonts.regular};
`;