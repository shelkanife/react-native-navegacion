import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import ScreenInicio from './ScreenInicio';
import IAhorros from './resumenAhorros';
import IGastos from './resumenGastos';
import IIngresos from './resumenIngresos';

import {getHeaderOptions} from '../../utils/header-utils';

const Stack = createNativeStackNavigator();

const StackInicio = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen
        name="Home"
        component={ScreenInicio}
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

export default StackInicio;
