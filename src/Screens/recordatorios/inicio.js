import React from 'react'
import {View,Text,Button} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ActionButton from 'react-native-action-button';
import ReRegistrar from './registrar'
import ReDetalles from './detalle'

const Stack=createNativeStackNavigator()

const ReInicio = ({navigation}) => {
    return(
        <View style={{flex:1}}>
            <Text>Pantalla "Recordatorios"</Text>
            
            <Button title='Detalle recordatorio'
            onPress={() => navigation.navigate('ReminderDetails')}></Button>
            
            <ActionButton buttonColor='#1E63CB'
            onPress={() => navigation.navigate('RegisterReminder')}/>
        </View>
    )
}

const SReInicio = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Reminders" component={ReInicio} options={{ title:'Recordatorios' }}/>
            <Stack.Screen name="RegisterReminder" component={ReRegistrar} options={{ title:'Registrar Recordatorio' }}/>
            <Stack.Screen name="ReminderDetails" component={ReDetalles} options={{ title:'Detalle de Recordatorio' }}/>
        </Stack.Navigator>
    )
}

export default SReInicio