import React,{useState} from 'react';
import {Text, View, ImageBackground} from 'react-native';
import {Container, Content, Button, Title, Label, Item, Input} from 'native-base';
import {styles, itemStyles} from '../../styles/global';
import { auth } from '../../components/Auth';
import {sendPasswordResetEmail} from 'firebase/auth';
import { async } from '@firebase/util';


const ForgotPassword = ({navigation}) => {
  const [email,setEmail] = useState('')
  const handleSendEmail = async() => {
    await sendPasswordResetEmail(auth,email)
    alert("Revisa tu correo para reestablecer tu contraseña")
    navigation.goBack()
  }

  return (
    <Container style={styles.mainContainer}>
      <Content contentContainerStyle={{flex: 1}}>
        <View style={styles.iconView}>
          <ImageBackground
            source={require('../../assets/logo.png')}
            style={{width: 150, height: 150}}
          />
        </View>
        <View style={styles.form}>
          <Title style={styles.title}>Recuperar contraseña</Title>
          <Text
            style={{
              ...styles.label,
              backgroundColor: '#e6dbd8',
              marginTop: 16,
              marginBottom: 16,
              borderRadius: 5,
              padding: 10,
            }}>
            Captura el correo electrónico con el que te has registrado
          </Text>
          <Item
            floatingLabel
            style={{
              marginBottom: 10,
              borderColor: '#1E63CB',
              borderBottomWidth: 2,
            }}>
            <Label style={itemStyles.label}>Correo electrónico</Label>
            <Input
              style={itemStyles.txtInput}
              onChangeText={email => setEmail(email)}
            />
          </Item>
          <Button style={styles.btn}>
            <Text
              onPress={handleSendEmail}
              style={{textTransform: 'uppercase', fontSize: 16, color: '#fff'}}>
              Enviar correo
            </Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default ForgotPassword;
