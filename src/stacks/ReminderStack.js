import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReInicio from '../screens/recordatorios/inicio';
import ReRegistrar from '../screens/recordatorios/registrar';
import ReDetalles from '../screens/recordatorios/detalle';

const Stack=createNativeStackNavigator()

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

const SReInicio = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen 
                name="Reminders" 
                component={ReInicio} 
                options={{...navigationOptions,title:'Recordatorios' }}/>
            <Stack.Screen 
                name="RegisterReminder" 
                component={ReRegistrar} 
                options={{ headerShown:false }}/>
            <Stack.Screen 
                name="ReminderDetails" 
                component={ReDetalles} 
                options={{ headerShown:false }}/>
        </Stack.Navigator>
    )
}

export default SReInicio