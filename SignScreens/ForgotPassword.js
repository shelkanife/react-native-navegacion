import React from 'react';
import {ScrollView,Text,View,TextInput,TouchableOpacity} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FormGroup from './FormGroup';
import { styles } from './styles';

const ForgotPassword = ({navigation}) => {
    return(
        <View style={styles.mainContainer}>
            <ScrollView contentContainerStyle={{flex:1}}>
                <View style={styles.iconView}>
                    <Ionicons style={styles.icon}  name='logo-usd'/>
                </View>
                <View style={styles.form}>
                    <Text style={styles.title}>Recuperar contraseña</Text>
                    <Text style={{...styles.label,backgroundColor:"#e6dbd8",marginTop:16,borderRadius:5,padding:10}}>Captura el correo electrónico con el que te has registrado</Text>
                    <FormGroup nameField='Correo electrónico' placeholder='Ingresa correo electrónico'/>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{color:"#ffffff",fontSize:16}}>Enviar correo</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default ForgotPassword;