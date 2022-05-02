import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PInicio from '../screens/presupuestos/inicio';
import PRegistrar from '../screens/presupuestos/registrar';
import PDetalle from '../screens/presupuestos/detalle';

const Stack = createNativeStackNavigator();

const navigationOptions = {
    headerTintColor: '#ffffff',
    headerStyle: {
      backgroundColor: '#1E63CB',
      borderBottomColor: '#ffffff',
    },
    headerTitleStyle: {
      fontSize: 20,
    },
    headerTitleAlign: 'center',
  };
  
  const SPInicio = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Budget"
          component={PInicio}
          options={{...navigationOptions, title: 'Presupuestos'}}
        />
        <Stack.Screen
          name="RegisterBudget"
          component={PRegistrar}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailsBudget"
          component={PDetalle}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };

export default SPInicio;
