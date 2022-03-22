import React,{useState,useEffect} from 'react'
import {View,Text,ScrollView,Pressable} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ActionButton from 'react-native-action-button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';

import PDetalle from './detalle'
import PRegistrar from './registrar'

const Stack=createNativeStackNavigator()

const Presupuesto = ({date,name,navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.date}>
                <Text style={styles.textDate}>{date}</Text>
            </View>
            <Pressable 
            onPress={() => navigation.navigate('PDetalles')} 
            style={({ pressed }) => ({
            backgroundColor: pressed? 'rgb(210, 230, 255)':'white'
            })}>
                <View style={styles.details}>
                    <Ionicons name='logo-usd' style={styles.icon}></Ionicons>
                    <Text style={styles.presupuestoName}>{name}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const PInicio = ({navigation}) => {
    
    return(
        <View style={{flex:1}}>
            
            <ScrollView>
                <Presupuesto date="24 de febrero" name="Presupuesto 1"  navigation={navigation}/>
                <Presupuesto date="13 de marzo" name="Presupuesto 2"  navigation={navigation}/>
            </ScrollView>

            <ActionButton buttonColor='#1E63CB'
            onPress={() => navigation.navigate('PRegistrar')}/>
        </View>
    )
}

const navigationOptions = {
    headerTintColor: '#ffffff',
    headerStyle: {
        backgroundColor: '#1E63CB',
        borderBottomColor: '#ffffff',
        
    },
    headerTitleStyle: {
        fontSize: 20
    },
    headerTitleAlign:"center"
};

const SPInicio = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="PInicio" component={PInicio} options={ {...navigationOptions,title:'Presupuestos'} }/>
            <Stack.Screen name="PRegistrar" component={PRegistrar} options={{ title:'Registrar presupuesto' }}/>
            <Stack.Screen name="PDetalles" component={PDetalle} options={{ title:'Detalle de presupuesto' }}/>
        </Stack.Navigator>
    )
}

export default SPInicio