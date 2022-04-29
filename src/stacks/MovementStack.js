import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MInicio from '../screens/movimientos/inicio';
import MDetalles from '../screens/movimientos/detalles';
import MRegistrar from '../screens/movimientos/registrar';


const Stack = createNativeStackNavigator()

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

const SMInicio = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen 
                name="Movements" 
                component={MInicio} 
                options={{...navigationOptions,title:'Movimientos' }}/>
            <Stack.Screen 
                name="MRegistrar" 
                component={MRegistrar} 
                options={{ headerShown:false }}/>
            <Stack.Screen 
                name="MDetalles" 
                component={MDetalles} 
                options={{ headerShown:false }}/>
        </Stack.Navigator>
    )
}

export default SMInicio