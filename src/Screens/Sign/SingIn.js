import React from 'react';
import {Text,ImageBackground} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contenedor from '../../Components/contenedor';
import ForgotPassword from './ForgotPassword';
import SignUp from './SignUp';
import FormGroup from '../../Components/FormGroup'
import { styles } from './styles';
import {Container,Content,Button,View,Footer, Title} from 'native-base';

const Stack = createNativeStackNavigator()


const SignIn = ({navigation}) => {
    return(
        <Container style={styles.mainContainer}>
            <Content>
                <View style={styles.iconView}>
                    <ImageBackground source={require('../../assets/logo.png')} style={{width:150,height:150}} />
                </View>
                <View style={styles.form}>
                    <Title style={styles.title}>Iniciar Sesión</Title>
                    <FormGroup nameField='Correo electrónico' placeholder='Ingresa correo electrónico' />
                    <FormGroup nameField='Contraseña' placeholder='Contraseña' />
                    <Button style={styles.btn}
                        onPress={() => {navigation.navigate('Contenedor')}}>
                        <Text style={{textTransform:'uppercase',fontSize:16,color:'#fff'}}>Iniciar sesión</Text>
                    </Button>
                    <View>
                        <Button style={styles.forgot}  onPress={() => navigation.navigate('ForgotPassword')} transparent light>
                            <Text style={{color:"#1E63CB"}}>¿Olvidaste la contraseña?</Text>
                        </Button>
                    </View>
                </View>
            </Content>
            <Footer style={{backgroundColor:"#fff",height:40}}>
                {/* <FooterTab> */}
                    <Button light transparent onPress={() => navigation.navigate('SignUp')}>
                        <Text style={{marginRight:16,}}>¿No tienes una cuenta?</Text>
                        <Text style={{color:"#1E63CB"}}>Registrate</Text>
                    </Button>
                {/* </FooterTab> */}
            </Footer>
        </Container>
        // <KeyboardAvoidingView style={styles.mainContainer}>
        //     <ScrollView contentContainerStyle={{flex:1}}>
        //         <View style={styles.iconView}>
        //             <ImageBackground source={require('../assets/logo.png')} style={{width:150,height:150}} />
        //             {/* <Ionicons style={styles.icon} name='logo-usd'/> */}
        //         </View>
        //         <View style={styles.form}>
        //             <Text style={styles.title}>Iniciar Sesión</Text>
        //             <FormGroup nameField='Correo electrónico' placeholder='Ingresa correo electrónico'/>
        //             <FormGroup nameField='Contraseña' placeholder='Ingresa contraseña'/>
        //             <TouchableOpacity 
        //                 style={styles.btn}
        //                 onPress={()=>navigation.navigate('Contenedor')}>
        //                 <Text style={{color:'#ffffff'}}>INGRESAR</Text>
        //             </TouchableOpacity>
        //             <TouchableOpacity 
        //                 style={styles.forgot}
        //                 onPress={()=>navigation.navigate('ForgotPassword')}>
        //                 <Text style={{color:'#1E63CB'}}>¿Olvidaste la contraseña?</Text>
        //             </TouchableOpacity>
        //         </View>
        //         <TouchableOpacity 
        //             style={styles.signUp}
        //             onPress={()=>navigation.navigate('SignUp')}>
        //             <Text style={{marginRight:16}}>¿No tienes una cuenta?</Text>
        //             <Text style={{color:"#1E63CB"}}>Registrate</Text>
        //         </TouchableOpacity>
        //     </ScrollView>
        // </KeyboardAvoidingView>
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