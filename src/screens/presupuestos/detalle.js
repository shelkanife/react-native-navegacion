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
  Card,
  CardItem,
  
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles, itemStyles} from '../../styles/global';
import {toDate} from 'firebase/firestore/lite';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PDetalle = ({navigation,route}) => {
  const {budget}=route.params
  const deleteBudget = async() => {

      try{
          let str = await AsyncStorage.getItem('budgets')
          let array = JSON.parse(str)
          let newArray = array.filter(item => item.id !== budget.id)
          await AsyncStorage.setItem('budgets',JSON.stringify(newArray))
          navigation.goBack()
      }catch(e){alert(e)}
  }

  return(
      <Container style={styles.mainContainer}>
      <Header style={{backgroundColor:'#1E63CB'}}>
          <Left>
              <Button transparent
              onPress={() => navigation.navigate('Budget')}>
                  <Ionicons 
                      style={{color:'white',fontSize:25}} 
                      name='arrow-back' />
              </Button>
          </Left>
          <Body>
              <Title style={{fontSize:20}}>Detalles</Title>
          </Body>
          <Right>
              <Button 
                  transparent
                  onPress={() => Alert.alert(
                      'Eliminar',
                      '¿Seguro que deseas eliminarlo?',
                      [
                          {text:'Sí',onPress:deleteBudget},
                          {text:'No',onPress:null}
                      ]
                      )}>
                  <Ionicons 
                      style={{color:'white',fontSize:23}}
                      name='trash' />
              </Button>
          </Right>
      </Header>
      <Content style={{padding:16}}>
          <Card>
              <CardItem header style={{borderBottomWidth:1,borderBottomColor:"#ECE3E1"}}>
                  <Left>
                      <Text style={{fontSize:20}}>
                          {budget.concept}
                      </Text>
                  </Left>
                  <Right>
                      <Text style={{fontWeight:'bold',fontSize:20}}>
                          <Ionicons style={{fontSize:20}} name='logo-usd'></Ionicons>
                          {budget.amount}
                      </Text>
                  </Right>
              </CardItem>
              <CardItem >
                  <Ionicons name='calendar'style={{color:'gray',fontSize:20}}></Ionicons>
                  <Text style={{fontSize:20, marginLeft:16}}>
                      {/* {budget.date.toDate().toLocaleDateString('es-MX')} */}
                      {new Date(Date.parse(budget.date)).toLocaleDateString('es-MX')}
                  </Text>
              </CardItem>
              <CardItem bordered>
                  <Ionicons name='newspaper'style={{color:'gray',fontSize:20,}}></Ionicons>
                  <Text style={{fontSize:20, marginLeft:16}}>
                      {
                      budget.description == ''
                      ? "Sin descripción"
                      : budget.description
                      }
                  </Text>
              </CardItem>
          </Card>
          <Button block style={{marginTop:16,borderRadius:16,backgroundColor:"#1E63CB"}}
              onPress={() => navigation.navigate("RegisterBudget",{budget:budget})}>
              <Ionicons name='pencil' style={{fontSize:20,color:'white'}}></Ionicons>
              <Text style={{color:'white',marginLeft:16,fontSize:20}}>Editar</Text>
          </Button>
      </Content>
      </Container>
    )
  }
  
export default PDetalle;
