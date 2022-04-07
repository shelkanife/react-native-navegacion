import React from 'react';
import {View, Text, Alert} from 'react-native';
import {
  Container,
  Textarea,
  Content,
  Input,
  Label,
  Item,
  Header,
  Body,
  Right,
  Left,
  Title,
  Button,
  Icon,
  Footer,
} from 'native-base';
import {styles, itemStyles} from '../../styles/global';
import {toDate} from 'firebase/firestore/lite';

const PDetalle = ({navigation, route}) => {
  const {budget} = route.params;
  return (
    <Container style={styles.mainContainer}>
      <Header style={{backgroundColor: '#1E63CB'}}>
        <Left>
          <Button transparent onPress={() => navigation.navigate('Budget')}>
            <Icon name="arrow-back"></Icon>
          </Button>
        </Left>
        <Body>
          <Title style={{fontSize: 20}}>Detalles</Title>
        </Body>
      </Header>
      <Content style={{padding: 16}}>
        <Item floatingLabel style={styles.item}>
          <Label style={itemStyles.label} l>
            Concepto
          </Label>
          <Input disabled style={itemStyles.txtInput} value={budget.concept} />
        </Item>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '50%'}}>
            <Item floatingLabel style={styles.item}>
              <Label style={itemStyles.label}>Cantidad</Label>
              <Input
                disabled
                style={{...itemStyles.txtInput, textAlign: 'center'}}
                value={budget.amount}
                keyboardType="numeric"
              />
            </Item>
          </View>
          <View
            style={{
              width: '50%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Label style={{fontSize: 20, fontWeight: 'bold'}}>M.N.</Label>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '50%'}}>
            <Label style={itemStyles.label}>Fecha</Label>
            <Label style={{...styles.labelDate, textAlign: 'center'}}>
              {budget.date.toDate().toLocaleDateString('es-MX')}
            </Label>
          </View>
          <View style={{width: '50%'}}>
            <Button style={{backgroundColor: '#1E63CB', alignSelf: 'center'}}>
              <Icon name="calendar"></Icon>
            </Button>
          </View>
        </View>
        <Item style={{marginTop: 16, borderBottomWidth: 0}}>
          <Label style={itemStyles.label}>Descripción</Label>
        </Item>
        <Item>
          <Textarea
            disabled
            value={
              budget.description == ''
                ? 'No se especifico una descripción'
                : budget.concept
            }
            placeholder="Opcional"
            style={styles.textArea}
          />
        </Item>
        <Button
          rounded
          style={{
            width: '80%',
            alignSelf: 'center',
            justifyContent: 'center',
            backgroundColor: 'red',
          }}
          onPress={() =>
            Alert.alert('Eliminar', '¿Seguro que deseas eliminarlo?', [
              {text: 'Sí', onPress: () => Alert.alert('Eliminado')},
              {text: 'No', onPress: null},
            ])
          }>
          <Text style={{color: 'white', fontSize: 20}}>Eliminar</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default PDetalle;
