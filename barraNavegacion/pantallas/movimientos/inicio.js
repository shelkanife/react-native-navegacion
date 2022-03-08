import React from 'react'
import {View,Text,Button} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MDetalles from './detalles'
import MRegistrar from './registrar'

const Stack = createNativeStackNavigator()

const MInicio = ({navigation}) => {
    return(
        <View style={{flex:1}}>
            <Text>Pantalla "Movimientos"</Text>
            <Button title='Formulario registrar movimiento'
            onPress={() => navigation.navigate('MRegistrar')}></Button>
            <Button title='Detalle moviemiento'
            onPress={() => navigation.navigate('MDetalles')}></Button>

        </View>
    )
}



const SMInicio = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name="MInicio" component={MInicio} options={{ title:'Pantalla de Movimientos' }}/>
            <Stack.Screen name="MRegistrar" component={MRegistrar} options={{ title:'Pantalla de Formulario registrar movimiento' }}/>
            <Stack.Screen name="MDetalles" component={MDetalles} options={{ title:'Pantalla de Detalle de moviento' }}/>
        </Stack.Navigator>
    )
}

export default SMInicio