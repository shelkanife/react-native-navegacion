import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import HomeScreen from '../screens/inicio/HomeScreen';
import SummaryScreen from '../screens/inicio/SummaryScreen';

import {colors, getHeaderOptions} from '../styles/global';

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
        name="Income"
        options={{
          ...getHeaderOptions(colors.ingresos),
          title: 'Ingresos',
        }}>
        {() => <SummaryScreen type="ingresos" />}
      </Stack.Screen>
      <Stack.Screen
        name="Outcome"
        options={{
          ...getHeaderOptions(colors.gastos),
          title: 'Gastos',
        }}>
        {() => <SummaryScreen type="gastos" />}
      </Stack.Screen>
      <Stack.Screen
        name="Saving"
        options={{
          ...getHeaderOptions(colors.ahorros),
          title: 'Ahorros',
        }}>
        {() => <SummaryScreen type="ahorros" />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeStack;
