import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import HomeScreen from '../screens/inicio/HomeScreen';
import IAhorros from '../screens/inicio/resumenAhorros';
import IGastos from '../screens/inicio/resumenGastos';
import IIngresos from '../screens/inicio/resumenIngresos';

import {getHeaderOptions} from '../styles/global';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          ...getHeaderOptions(),
          title: 'Mis Finanzas',
        }}
        screnName="Inicio"
      />
      <Stack.Screen
        name="Saving"
        component={IAhorros}
        options={{title: 'Resumen de ahorros'}}
      />
      <Stack.Screen
        name="Outcome"
        component={IGastos}
        options={{title: 'Resumen de gastos'}}
      />
      <Stack.Screen
        name="Income"
        component={IIngresos}
        options={{title: 'Resumen de ingresos'}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
