import React, { useState } from 'react';
import { Text, ImageBackground } from 'react-native'
import { Container, Content, Button, View, Title, Item, Label, Input } from 'native-base';
import { styles, itemStyles } from '../../Styles/styles';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../../Components/Auth'


const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleCreateAccount = function () {
        alert('enter to createAccount')
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert('Usuario registrado')
                navigation.navigate('SignIn')
            })
            .catch((error) => {
                alert(error)
            })
    }

    return (
        <Container style={styles.mainContainer}>
            <Content contentContainerStyle={{ flex: 1 }}>
                <View style={styles.iconView}>
                    <ImageBackground source={require('../../assets/logo.png')} style={{ width: 150, height: 150 }} />
                </View>
                <View style={styles.form}>
                    <Title style={styles.title}>Registrar</Title>
                    <Item floatingLabel style={{ marginBottom: 10, borderColor: '#1E63CB', borderBottomWidth: 2 }}>
                        <Label style={itemStyles.label}>Correo electrónico</Label>
                        <Input
                            style={itemStyles.txtInput}
                            onChangeText={(text) => setEmail(text)} />
                    </Item>
                    <Item floatingLabel style={{ marginBottom: 10, borderColor: '#1E63CB', borderBottomWidth: 2 }}>
                        <Label style={itemStyles.label}>Contraseña</Label>
                        <Input
                            style={itemStyles.txtInput}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry />
                    </Item>
                    <Button
                        style={styles.btn}
                        onPress={() => { handleCreateAccount() }}>
                        <Text style={{ textTransform: 'uppercase', fontSize: 16, color: '#fff' }}>Crear cuenta</Text>
                    </Button>
                </View>
            </Content>
        </Container>
    )
}

export default SignUp