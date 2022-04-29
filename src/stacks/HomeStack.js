import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import HomeScreen from '../screens/inicio/HomeScreen';
import SummaryScreen from '../screens/inicio/SummaryScreen';
import MDetalles from '../screens/movimientos/detalles';

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
          ...getHeaderOptions(colors.income),
          title: 'Ingresos',
        }}>
        {() => <SummaryScreen key={1} type="income" />}
      </Stack.Screen>
      <Stack.Screen
        name="Expense"
        options={{
          ...getHeaderOptions(colors.expense),
          title: 'Gastos',
        }}>
        {() => <SummaryScreen key={2} type="expense" />}
      </Stack.Screen>
      <Stack.Screen
        name="Saving"
        options={{
          ...getHeaderOptions(colors.savings),
          title: 'Ahorros',
        }}>
        {() => <SummaryScreen key={3} type="savings" />}
      </Stack.Screen>
      <Stack.Screen
        name="MDetalles"
        component={MDetalles}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
