import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import { Container, Content, Button, Title } from 'native-base'
import { styles } from '../../Styles/styles';

const ForgotPassword = () => {
    return (
        <Container style={styles.mainContainer}>
            <Content contentContainerStyle={{ flex: 1 }}>
                <View style={styles.iconView}>
                    <ImageBackground source={require('../../assets/logo.png')} style={{ width: 150, height: 150 }} />
                </View>
                <View style={styles.form}>
                    <Title style={styles.title}>Recuperar contraseña</Title>
                    <Text style={{ ...styles.label, backgroundColor: "#e6dbd8", marginTop: 16, marginBottom: 16, borderRadius: 5, padding: 10 }}>Captura el correo electrónico con el que te has registrado</Text>
                    <Button style={styles.btn}>
                        <Text style={{ textTransform: 'uppercase', fontSize: 16, color: '#fff' }}>Enviar correo</Text>
                    </Button>
                </View>
            </Content>
        </Container>
    )
}

export default ForgotPassword;