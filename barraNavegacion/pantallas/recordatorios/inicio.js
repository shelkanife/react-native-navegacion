import React from 'react'
import {View,Text,Button} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ReRegistrar from './registrar'
import ReDetalles from './detalle'

const Stack=createNativeStackNavigator()

const ReInicio = ({navigation}) => {
    return(
        <View>
            <Text>Pantalla "Recordatorios"</Text>
            <Button title='Registrar recordatorio'
            onPress={() => navigation.navigate('ReRegistrar')}></Button>
            <Button title='Detalle recordatorio'
            onPress={() => navigation.navigate('ReDetalles')}></Button>
        </View>
    )
}

const SReInicio = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name="ReInicio" component={ReInicio} options={{ title:'Pantalla de Recordatorios' }}/>
            <Stack.Screen name="ReRegistrar" component={ReRegistrar} options={{ title:'Pantalla de Registrar Recordatorio' }}/>
            <Stack.Screen name="ReDetalles" component={ReDetalles} options={{ title:'Pantalla de Detalle de Recordatorio' }}/>
        </Stack.Navigator>
    )
}

export default SReInicio