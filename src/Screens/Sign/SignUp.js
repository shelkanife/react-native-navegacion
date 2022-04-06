import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Container, Content, Button, View, Title} from 'native-base';
import FormGroup from '../../components/FormGroup';
import {styles} from './styles';

const SignUp = () => {
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
          <Title style={styles.title}>Registrar</Title>
          <FormGroup nameField="Nombre" placeholder="Ingresa nombre" />
          <FormGroup
            nameField="Correo electrónico"
            placeholder="Ingresa correo electrónico"
          />
          <FormGroup nameField="Contraseña" placeholder="Ingresa contraseña" />
          <Button style={styles.btn}>
            <Text
              style={{textTransform: 'uppercase', fontSize: 16, color: '#fff'}}>
              Crear cuenta
            </Text>
          </Button>
          {/* <TouchableOpacity style={styles.btn}>
                        <Text style={{color:"#ffffff",fontSize:16}}>Crear cuenta</Text>
                    </TouchableOpacity> */}
        </View>
      </Content>
    </Container>
  );
};

export default SignUp;
