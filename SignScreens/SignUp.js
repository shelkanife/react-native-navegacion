import React from 'react';
import {ScrollView,Text,View,TextInput,TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FormGroup from './FormGroup';
import { styles } from './styles';


const SignUp=()=>{
    return(
        <View style={styles.mainContainer}>
            <ScrollView contentContainerStyle={{flex:1}}>
                <View style={styles.iconView}>
                    <Ionicons style={styles.icon}  name='logo-usd'/>
                </View>
                <View style={styles.form}>
                    <Text style={styles.title}>Registrate</Text>
                    <FormGroup nameField='Nombre' placeholder='Ingresa nombre'/>
                    <FormGroup nameField='Correo electrónico' placeholder='Ingresa correo electrónico' />
                    <FormGroup nameField='Contraseña' placeholder='Ingresa contraseña' />
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{color:"#ffffff",fontSize:16}}>Crear cuenta</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default SignUp