import React from 'react'
import {View,Text,Button} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RDetalle from './detalle'

const Stack=createNativeStackNavigator()

const RInicio = ({navigation}) => {
    return(
        <View style={{flex:1}}>
            <Text>Pantalla "Recomendaciones (pendiente de subir)"</Text>
            <Button title='Detalle de recomendacion'
            onPress={() => navigation.navigate('RecommendationsDetails')}></Button>

        </View>
    )
}

const SRInicio = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Recommendations" component={RInicio} options={{ title:'Recomendaciones' }}/>
            <Stack.Screen name="RecommendationsDetails" component={RDetalle} options={{ title:'Detalle de Recomendaciones' }}/>
        </Stack.Navigator>
    )
}

export default SRInicio