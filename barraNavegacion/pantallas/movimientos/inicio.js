import React from 'react'
import {View,Text,Button} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ActionButton from 'react-native-action-button';

import MDetalles from './detalles'
import MRegistrar from './registrar'

const Stack = createNativeStackNavigator()

const MInicio = ({navigation}) => {
    return(
        <View style={{flex:1}}>
            <Text>Pantalla "Movimientos"</Text>
            
            <Button title='Detalle moviemiento'
            onPress={() => navigation.navigate('MDetalles')}></Button>

            <ActionButton buttonColor="#1E63CB"
            onPress={() => navigation.navigate('MRegistrar')}
            />
        </View>
    )
}



const SMInicio = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name="MInicio" component={MInicio} options={{ title:'Movimientos' }}/>
            <Stack.Screen name="MRegistrar" component={MRegistrar} options={{ title:'Registrar movimiento' }}/>
            <Stack.Screen name="MDetalles" component={MDetalles} options={{ title:'Detalle de moviento' }}/>
        </Stack.Navigator>
    )
}

export default SMInicio