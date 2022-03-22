import React from 'react';
import {ScrollView,Text,View,TextInput,TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';

const Item = ({nameField,placeholder}) =>{
    return (
        <View>
            <Text style={styles.label}>{nameField}</Text>
            <TextInput style={styles.txtInput} placeholder={placeholder} keyboardType='email-address' />
        </View>        
    )
}

const SignUp=()=>{
    return(
        <View style={styles.mainContainer}>
            <ScrollView contentContainerStyle={{flex:1}}>
                <View style={styles.iconView}>
                    <Ionicons style={styles.icon}  name='logo-usd'/>
                </View>
                <View style={styles.form}>
                    <Text style={styles.title}>Registrate</Text>
                    <Item nameField='Nombre' placeholder='Ingresa nombre'/>
                    <Item nameField='Correo electrónico' placeholder='Ingresa correo electrónico' />
                    <Item nameField='Contraseña' placeholder='Ingresa contraseña' />
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{color:"#ffffff",fontSize:16}}>Crear cuenta</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default SignUp