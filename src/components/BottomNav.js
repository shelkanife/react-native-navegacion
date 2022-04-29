import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
// import { NavigationContainer } from '@react-navigation/native';

import HomeStack from '../stacks/HomeStack';
import SMInicio from '../stacks/MovementStack';
import SPInicio from '../screens/presupuestos/inicio';
import SRInicio from '../screens/recomendaciones/inicio';
import SReInicio from '../screens/recordatorios/inicio';

const nombrePantallas = {
  i: 'Inicio',
  m: 'Movimientos',
  p: 'Presupuestos',
  r: 'Recomendaciones',
  re: 'Notificaciones',
};

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName={nombrePantallas.i}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let icono;
          let ruta = route.name;

          switch (ruta) {
            case nombrePantallas.i:
              icono = 'home';
              break;
            case nombrePantallas.m:
              icono = 'swap-vertical';
              break;
            case nombrePantallas.p:
              icono = 'logo-usd';
              break;
            case nombrePantallas.r:
              icono = 'wallet';
              break;
            case nombrePantallas.re:
              icono = 'notifications';
              break;
          }

          return <Ionicons name={icono} size={size} color={color} />;
        },
        tabBarHideOnKeyboard:true,
        headerShown: false,
        activeTintColor: '#1E63CB',
        inactiveTintColor: 'grey',
        labelStyle: {paddingBottom: 10, fontSize: 10},
        style: {padding: 10, height: 70},
      })}>
      <Tab.Screen name={nombrePantallas.i} component={HomeStack} />
      <Tab.Screen name={nombrePantallas.m} component={SMInicio} />
      <Tab.Screen name={nombrePantallas.p} component={SPInicio} />
      <Tab.Screen name={nombrePantallas.r} component={SRInicio} />
      <Tab.Screen name={nombrePantallas.re} component={SReInicio} />
    </Tab.Navigator>
  );
};

export default BottomNav;
