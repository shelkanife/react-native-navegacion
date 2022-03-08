import React from 'react'
import {View,Text,Button} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IAhorros from './resumenAhorros'
import IGastos from './resumenGastos'
import IIngresos from './resumenIngresos'

const Stack = createNativeStackNavigator()

const Inicio = ({navigation}) =>{
    return(

    <View style={{flex: 1}}>
        <Text>Pantalla de inicio</Text>
        <Button title='Resumen de Ahorros'
        onPress={() => navigation.navigate('IAhorros')}></Button>
        <Button title='Resumen de Gastos'
        onPress={()=>navigation.navigate('IGastos')}></Button>
        <Button title='Resumen de Ingresos'
        onPress={()=>navigation.navigate('IIngresos')}></Button>

    </View>
    
    )
}


const SInicio = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name="IInicio" component={Inicio} options={{ title:'Pantalla de inicio' }}/>             
            <Stack.Screen name="IAhorros" component={IAhorros} options={{ title:'Pantalla de resumen de ahorros' }}/>             
            <Stack.Screen name="IGastos" component={IGastos}  options={{ title:'Pantalla de resumen de gastos' }}/>
            <Stack.Screen name="IIngresos" component={IIngresos} options={{ title:'Pantalla de resumen de ingresos' }}/>
        </Stack.Navigator>
    )
}

export default SInicio