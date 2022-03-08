import React from 'react'
import {View,Text,Button} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PDetalle from './detalle'
import PRegistrar from './registrar'

const Stack=createNativeStackNavigator()

const PInicio = ({navigation}) => {
    return(
        <View style={{flex:1}}>
            <Text>Pantalla "Presupuestos"</Text>
            <Button title='Registrar presupuesto'
            onPress={() => navigation.navigate('PRegistrar')}></Button>
            <Button title='Detalle de presupuesto'
            onPress={() => navigation.navigate('PDetalles')}></Button>

        </View>
    )
}

const SPInicio = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name="PInicio" component={PInicio} options={{ title:'Pantalla de Presupuestos' }}/>
            <Stack.Screen name="PRegistrar" component={PRegistrar} options={{ title:'Pantalla de Registrar presupuesto' }}/>
            <Stack.Screen name="PDetalles" component={PDetalle} options={{ title:'Pantalla de Detalle de presupuesto' }}/>
        </Stack.Navigator>
    )
}

export default SPInicio