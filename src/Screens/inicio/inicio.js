import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { Button } from 'react-native'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { signOut } from 'firebase/auth';
import { auth } from '../../Components/Auth';

import SignIn from '../Sign/SingIn'
import IAhorros from './resumenAhorros'
import IGastos from './resumenGastos'
import IIngresos from './resumenIngresos'

const Stack = createNativeStackNavigator()

const Inicio = ({navegation}) =>{
    const userEmail=auth.currentUser?.email
    const navigation=useNavigation()
    return(

    <View style={{flex: 1}}>
            <Text>Pantalla de inicio</Text>
            <Text>{ userEmail }</Text>
            <Button title='Resumen de Ahorros'
                onPress={() => navigation.navigate('Saving')}></Button>
            <Button title='Resumen de Gastos'
                onPress={() => navigation.navigate('Outcome')}></Button>
            <Button title='Resumen de Ingresos'
                onPress={() => navigation.navigate('Income')}></Button>
            <Button
                title="SIGN OUT"
                onPress={() => {
                    signOut(auth)
                        .then(() => {
                            navigation.replace("SignIn")
                        })
                        .catch(error => console.log(error))
                }} />
    </View>
    )
}


const SInicio = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Home" component={Inicio} options={{ title:'Inicio' }} />             
            <Stack.Screen name="Saving" component={IAhorros} options={{ title:'Resumen de ahorros' }}/>             
            <Stack.Screen name="Outcome" component={IGastos}  options={{ title:'Resumen de gastos' }}/>
            <Stack.Screen name="Income" component={IIngresos} options={{ title:'Resumen de ingresos' }}/>
            <Stack.Screen name='SignIn' component={SignIn} />
        </Stack.Navigator>
    )
}


export default SInicio