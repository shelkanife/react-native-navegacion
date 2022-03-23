import React from 'react';
import {ScrollView,Text,View,TextInput,TouchableOpacity} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Contenedor from '../barraNavegacion/contenedor';
import ForgotPassword from './ForgotPassword';
import SignUp from './SignUp';
import FormGroup from './FormGroup'
import { styles } from './styles';

const Stack = createNativeStackNavigator()


const SignIn = ({navigation}) => {
    return(
        <View style={styles.mainContainer}>
            <ScrollView contentContainerStyle={{flex:1}}>
                <View style={styles.iconView}>
                    <Ionicons style={styles.icon} name='logo-usd'/>
                </View>
                <View style={styles.form}>
                    <Text style={styles.title}>Iniciar Sesión</Text>
                    <FormGroup nameField='Correo electrónico' placeholder='Ingresa correo electrónico'/>
                    <FormGroup nameField='Contraseña' placeholder='Ingresa contraseña'/>
                    <TouchableOpacity 
                        style={styles.btn}
                        onPress={()=>navigation.navigate('Contenedor')}>
                        <Text style={{color:'#ffffff'}}>INGRESAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.forgot}
                        onPress={()=>navigation.navigate('ForgotPassword')}>
                        <Text style={{color:'#1E63CB'}}>¿Olvidaste la contraseña?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity 
                    style={styles.signUp}
                    onPress={()=>navigation.navigate('SignUp')}>
                    <Text style={{marginRight:16}}>¿No tienes una cuenta?</Text>
                    <Text style={{color:"#1E63CB"}}>Registrate</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const SignNavegator= () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignIn" component={SignIn} />             
            <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
            <Stack.Screen name='SignUp' component={SignUp} />
            <Stack.Screen name='Contenedor' component={Contenedor}/>
        </Stack.Navigator>
    )
}

export default SignNavegator