import React, {useState, useEffect} from 'react';
import {Text, ImageBackground} from 'react-native';
import {
  Container,
  Content,
  View,
  Footer,
  Title,
  Button,
  Label,
  Item,
  Input,
} from 'native-base';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';

import BottomNav from '../../components/BottomNav';
import ForgotPassword from './ForgotPassword';
import {auth, user} from '../../components/Auth';
import SignUp from './SignUp';

import {styles, itemStyles} from '../../styles/global';

const Stack = createNativeStackNavigator();

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userEmail = auth.currentUser?.email;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) navigation.replace('BottomNav');
    });
    return unsubscribe;
  }, []);

  const handleSignIn = function () {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        navigation.replace('BottomNav');
      })
      .catch(error => {
        alert(error);
      });
  };

  return (
    <Container style={styles.mainContainer}>
      <Content>
        <View style={styles.iconView}>
          <ImageBackground
            source={require('../../assets/logo.png')}
            style={{width: 150, height: 150}}
          />
        </View>
        <View style={styles.form}>
          <Title style={styles.title}>Iniciar Sesión</Title>
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
              onChangeText={text => setEmail(text)}
            />
          </Item>
          <Item
            floatingLabel
            style={{
              marginBottom: 10,
              borderColor: '#1E63CB',
              borderBottomWidth: 2,
            }}>
            <Label style={itemStyles.label}>Contraseña</Label>
            <Input
              style={itemStyles.txtInput}
              onChangeText={text => setPassword(text)}
              secureTextEntry
            />
          </Item>
          <Button
            style={styles.btn}
            onPress={() => {
              handleSignIn();
            }}>
            <Text
              style={{textTransform: 'uppercase', fontSize: 16, color: '#fff'}}>
              Iniciar sesión
            </Text>
          </Button>
          <View>
            <Button
              style={styles.forgot}
              onPress={() => navigation.navigate('ForgotPassword')}
              transparent
              light>
              <Text style={{color: '#1E63CB'}}>¿Olvidaste la contraseña?</Text>
            </Button>
          </View>
        </View>
      </Content>
      <Footer style={{backgroundColor: '#fff', height: 40}}>
        {/* <FooterTab> */}
        <Button light transparent onPress={() => navigation.navigate('SignUp')}>
          <Text style={{marginRight: 16}}>¿No tienes una cuenta?</Text>
          <Text style={{color: '#1E63CB'}}>Registrate</Text>
        </Button>
        {/* </FooterTab> */}
      </Footer>
    </Container>
  );
};

const SignNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="BottomNav" component={BottomNav} />
    </Stack.Navigator>
  );
};

export default SignNavigator;
