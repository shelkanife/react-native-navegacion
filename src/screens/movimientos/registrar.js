import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  FlatList,
} from 'react-native';
import {
  Header,
  Left,
  Body,
  Right,
  Container,
  Content,
  Button,
  Icon,
  Item,
  Input,
  Form,
  Label,
  Textarea,
} from 'native-base';
import {Picker} from 'native-base';
import {colors} from '../../styles/global';
import ImgNote from '../../components/ImgNote';
import RNFS from 'react-native-fs';
import {useIsFocused} from '@react-navigation/native';
import CalendarButton from '../../components/CalendatButton'
import { addMovement,updateMovement } from '../../utils/movements';
const {categories} = require('./data.json');

const MRegistrar = ({navigation, route}) => {
  const movement = route.params?.movement
  const [concept, setConcept] = useState(movement?movement.concept:'');
  const [amount, setAmount] = useState(movement?movement.amount:0.0);
  const [date, setDate] = useState(movement? new Date(Date.parse(movement.date)):new Date());
  const [type, setType] = useState(movement? movement.type:'income');
  const [category, setCategory] = useState(movement?movement.category:'Default category');
  const [description, setDescription] = useState(movement?movement.description:'');
  const [pics, setPics] = useState(movement?movement.pics:'');
  const [isSalvable, setSalvable] = useState(movement?(movement.concept && movement.amount):false);

  const isFocused = useIsFocused();

  useEffect(() => {
    const picPath = route.params?.imgPath;
    if (picPath) setPics(picPath);
  }, [isFocused]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const cancel = () => {
    if(!movement){
      RNFS.unlink(pics)
        .then(setPics(''))
        .catch(e => {});
    }
    navigation.goBack();
  };

  const save = async () => {
    const movement = {
      concept,
      amount: new Number(Number.parseFloat(amount).toFixed(2)),
      date: new Date(date).toISOString().split('T')[0],
      type,
      category,
      description,
      pics,
    }
    await addMovement(movement)
    navigation.goBack()
  }

  const update = async () => {
    const updatedMovement = {
      id:movement.id,
      concept,
      amount: new Number(Number.parseFloat(amount).toFixed(2)),
      date:new Date(date).toISOString().split('T')[0],
      type,
      category,
      description,
      pics
    }
    await updateMovement(updatedMovement)
    navigation.navigate('MDetalles',{data: updatedMovement})
  }

  const deletePic = async () => {
    try {
      await RNFS.unlink(pics);
      setPics('');
    } catch (e) {
      alert(e);
    }
  };

  return (
    <Container>
      <Header style={{backgroundColor: '#1E63CB'}}>
        <Left>
          <Button transparent onPress={() => cancel()}>
            <Icon name="arrow-back" style={{color: 'white', fontSize: 25}} />
          </Button>
        </Left>
        <Body>
          <Text style={{color: 'white', fontSize: 20}}>
            {movement? "Editar movimiento":"Registrar movimiento"}
          </Text>
        </Body>
        <Right>
          <Button
            transparent
            disabled={!isSalvable}
            onPress={movement?update:save}>
            <Text style={{color: isSalvable ? 'white' : 'grey', fontSize: 20}}>
              {movement? "Guardar":"Registrar"}
            </Text>
          </Button>
        </Right>
      </Header>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Content style={{padding: 16}}>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <Left
              style={
                type == 'income'
                  ? {
                      elevation: 7,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: colors.main,
                      borderWidth: 5,
                      borderColor: colors.main,
                    }
                  : {justifyContent: 'center', alignItems: 'center'}
              }>
              <Pressable
                style={{width: '100%', alignItems: 'center'}}
                onPress={() => {
                  setType('income');
                }}>
                <Text
                  style={
                    type == 'income'
                      ? {fontSize: 20, color: 'white'}
                      : {fontSize: 20, color: 'black'}
                  }>
                  Ingreso
                </Text>
              </Pressable>
            </Left>
            <Right
              style={
                type == 'income'
                  ? {justifyContent: 'center', alignItems: 'center'}
                  : {
                      elevation: 7,
                      backgroundColor: colors.expense,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderWidth: 5,
                      borderColor: colors.expense,
                    }
              }>
              <Pressable
                style={{width: '100%', alignItems: 'center'}}
                onPress={() => {
                  setType('expense');
                }}>
                <Text
                  style={
                    type == 'income'
                      ? {fontSize: 20, color: 'black'}
                      : {fontSize: 20, color: 'white'}
                  }>
                  Gasto
                </Text>
              </Pressable>
            </Right>
          </View>
          <Item style={{marginTop: 16, borderBottomColor: 'white'}}>
            <Label style={localeStyles.label}>Concepto</Label>
          </Item>
          <Item>
            <Input
              style={localeStyles.input}
              defaultValue={movement?movement.concept:""}
              onChangeText={concept => {
                setConcept(concept);
                setSalvable(concept !== '' && amount !== '');
              }}
            />
          </Item>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{width: '50%'}}>
              <Label style={localeStyles.label}>Cantidad</Label>
              <Input
                style={localeStyles.inputHalfWidth}
                defaultValue={movement? movement.amount.toString():""}
                onChangeText={amount => {
                  setSalvable(concept !== '' && amount !== '');
                  setAmount(Number.parseFloat(amount).toFixed(2));
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={{width: '50%'}}>
              <Label
                style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
                M.N.
              </Label>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{width: '50%'}}>
              <Label style={localeStyles.label}>Fecha</Label>
              <Input
                disabled
                style={localeStyles.inputHalfWidth}
                onChangeText={date => setDate(date)}
                value={date.toLocaleDateString('es-MX')}
              />
            </View>
            <View style={{width: '50%'}}>
              <CalendarButton onChangeFunction={onChange} date={date} />
            </View>
          </View>
          <Item>
            <Label style={localeStyles.label}>Categoría</Label>
          </Item>
          <Picker
            note
            mode="dialog"
            style={{color: 'black'}}
            selectedValue={category}
            onValueChange={value => setCategory(value)}>
            {categories.map(category => {
              return (
                <Picker.Item
                  key={category.name}
                  label={category.name}
                  value={category.value}
                />
              );
            })}
          </Picker>
          <Item>
            <Label>Descripción</Label>
          </Item>
          <Item>
            <Textarea
              placeholder="Opcional"
              style={{
                borderWidth: 1,
                borderColor: '#1E63CB',
                borderRadius: 15,
                width: '100%',
                height: 120,
              }}
              defaultValue={movement?movement.description:""}
              onChangeText={description => setDescription(description)}
            />
          </Item>
          {pics === '' ? (
            <Button
              block
              style={{
                marginTop: 16,
                borderRadius: 20,
                backgroundColor: colors.main,
              }}
              onPress={() => {
                navigation.navigate('Camera',{movement:movement});
              }}>
              <Text style={{color: 'white'}}>Añadir nota</Text>
              <Icon name="camera" />
            </Button>
          ) : (
            <ImgNote
              key={pics}
              uri={pics}
              navigation={navigation}
              onPressFunction={() => deletePic()}
            />
          )}
        </Content>
      </ScrollView>
    </Container>
  );
};

const localeStyles = StyleSheet.create({
  label: {},
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#1E63CB',
  },
  inputHalfWidth: {
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#1E63CB',
  },
});

export default MRegistrar;
