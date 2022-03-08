import React from 'react'
import {View,Text,Button} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RDetalle from './detalle'

const Stack=createNativeStackNavigator()

const RInicio = ({navigation}) => {
    return(
        <View style={{flex:1}}>
            <Text>Pantalla "Recomendaciones"</Text>
            <Button title='Detalle de recomendacion'
            onPress={() => navigation.navigate('RDetalles')}></Button>

        </View>
    )
}

const SRInicio = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name="RInicio" component={RInicio} options={{ title:'Pantalla de Recomendaciones' }}/>
            <Stack.Screen name="RDetalles" component={RDetalle} options={{ title:'Pantalla de Detalle de Recomendaciones' }}/>
        </Stack.Navigator>
    )
}

export default SRInicio