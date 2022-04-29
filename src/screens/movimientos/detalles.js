import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ImageBackground,
  Pressable,
} from 'react-native';
import {
  Header,
  Left,
  Button,
  Body,
  Content,
  CardItem,
  Card,
  Title,
  Container,
  Right,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../styles/global';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFS from 'react-native-fs';

const MDetalles = ({navigation, data, route}) => {
  const dataObj = route.params.data;

  const deleteM = async () => {
    try {
      let str = await AsyncStorage.getItem('movements');
      let array = JSON.parse(str);
      let newArray = array.filter(item => item.id !== dataObj.id);
      let deletedM = array.filter(item => item.id === dataObj.id);
      if (deletedM[0].pics !== '') {
        RNFS.unlink(deletedM[0].pics)
          .then(item => console.log('pic deleted'))
          .catch(e => alert(e));
      }
      await AsyncStorage.setItem('movements', JSON.stringify(newArray));
      navigation.goBack();
    } catch (e) {
      alert(e);
    }
  };

  return (
    <Container>
      <Header style={{backgroundColor: colors.main}}>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Ionicons
              style={{color: 'white', fontSize: 25}}
              name="arrow-back"
            />
          </Button>
        </Left>
        <Body>
          <Title>Detalles</Title>
        </Body>
        <Right>
          <Button
            transparent
            onPress={() => {
              Alert.alert('Eliminar', '¿Seguro quieres eliminarlo?', [
                {text: 'Sí', onPress: deleteM},
                {text: 'No', onPress: null},
              ]);
            }}>
            <Ionicons style={{color: 'white', fontSize: 25}} name="trash" />
          </Button>
        </Right>
      </Header>
      <Content style={{padding: 16}}>
        <Card>
          <CardItem header bordered>
            <View style={{flexDirection: 'row'}}>
              <Ionicons
                name={dataObj.type == 'income' ? 'arrow-up' : 'arrow-down'}
                style={{
                  ...localeStyles.icon,
                  backgroundColor:
                    dataObj.type == 'income' ? colors.income : colors.expense,
                }}
              />
              <Title style={{color: 'black', fontSize: 20}}>
                {dataObj.concept}
              </Title>
            </View>
          </CardItem>
          <CardItem>
            <Text style={{width: '30%', fontSize: 20}}>Categoría</Text>
            <Text style={{width: '70%', fontSize: 20}}>{dataObj.category}</Text>
          </CardItem>
          <CardItem>
            <Text style={{width: '30%', fontSize: 20}}>Cantidad</Text>
            <Text style={{width: '70%', fontSize: 20}}>{dataObj.amount}</Text>
          </CardItem>
          <CardItem>
            <Text style={{width: '30%', fontSize: 20}}>Fecha</Text>
            <Text style={{width: '70%', fontSize: 20}}>
              {new Date(Date.parse(dataObj.date)).toLocaleDateString('es-MX')}
            </Text>
          </CardItem>
          <CardItem>
            <Text style={{width: '30%', fontSize: 20}}>Tipo</Text>
            <Text style={{width: '70%', fontSize: 20}}>
              {dataObj.type ? 'Ingreso' : 'Gasto'}
            </Text>
          </CardItem>
          {dataObj.pics === '' ? (
            <></>
          ) : (
            <CardItem>
              <Pressable
                style={{width: '100%', heigth: '100%'}}
                onPress={() =>
                  navigation.navigate('PicView', {uri: dataObj.pics})
                }>
                <ImageBackground
                  style={{width: '100%', height: 250}}
                  source={{uri: `file:///${dataObj.pics}`}}
                />
              </Pressable>
            </CardItem>
          )}
        </Card>
      </Content>
    </Container>
  );
};

const localeStyles = StyleSheet.create({
  icon: {
    justifyContent: 'center',
    color: '#FFFFFF',
    backgroundColor: colors.income,
    fontSize: 40,
    alignItems: 'center',
    marginRight: 10,
  },
  movementName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ammount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.income,
  },
});

export default MDetalles;
