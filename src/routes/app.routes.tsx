import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Dashboard } from '../screens/Dashboard';
import { Register } from '../screens/Register';
import { useTheme } from 'styled-components';
import {MaterialIcons} from '@expo/vector-icons'
import { Platform } from 'react-native';


const {Navigator,Screen} = createBottomTabNavigator();

export function AppRoutes(){

  const theme = useTheme();

  return(
    <Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size }) => {

          if (route.name === 'Listagem') {
            return <MaterialIcons
              name='format-list-bulleted'
              size={size}
              color={color}
            />
          } else if (route.name === 'Cadastrar') {
            return <MaterialIcons
              name='attach-money'
              size={size}
              color={color}
            />
          } else if (route.name === 'Resumo') {
            return <MaterialIcons
              name='pie-chart'
              size={size}
              color={color}
            />
          }
        },
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'beside-icon',
        headerShown: false,
        tabBarStyle:{
          paddingVertical: Platform.OS ==='ios' ? 20 : 0,
        }
      })}
    >
      <Screen
        name="Listagem" 
        component={Dashboard}
        />
      <Screen 
        name="Cadastrar"
        component={Register}/>
      <Screen 
        name="Resumo" 
        component={Register}/>
    </Navigator>
  )
}