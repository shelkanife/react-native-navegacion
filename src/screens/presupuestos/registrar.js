import React, {useState} from 'react';
import {StyleSheet,Pressable} from 'react-native';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import {
  Text,
  Button,
  Container,
  Content,
  View,
  Input,
  Item,
  Label,
  Textarea,
  Icon,
  Header,
  Left,
  Body,
  Title,
  Right,
} from 'native-base';
import {styles, itemStyles} from './styles';
import {collection, addDoc, Timestamp} from 'firebase/firestore/lite';
import {db, auth} from '../../components/Auth';
import {async} from '@firebase/util';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PRegistrar = ({navigation, route}) => {
  const budget = route.params?.budget
  const [concept, setConcept] = useState(budget?budget.concept:'');
  const [amount, setAmount] = useState(budget?budget.amount.toString():'');
  const [description, setDescription] = useState(budget?budget.description:'');
  const [date, setDate] = useState(budget? new Date(Date.parse(budget.date)):new Date());
  const [isSavable, setSave] = useState(budget? (budget.concept && budget.amount):false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };
  const showMode = currentMode => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };
  const showDatepicker = () => {
    showMode('date');
  };

  const save = async (budgets) =>{
    budgets=JSON.parse(budgets)
        const budget = {
            "id":budgets.length + 1,
            concept,
            amount,
            date,
            description
        }
        budgets.push(budget)
        try{
            budgets=JSON.stringify(budgets)
            await AsyncStorage.setItem('budgets',budgets)
            navigation.goBack()
        }catch(e){}
  }

  const saveBudget = async () => {
    const budgets = await AsyncStorage.getItem('budgets')
    if(budgets !== null){
        save(budgets)
    }else{
        try{
            await AsyncStorage.setItem('budgets','[]')
            const budgets = await AsyncStorage.getItem('budgets')
            save(budgets)
        }catch(e){alert(e)}
    }
}

  // const addNewBudget = async () => {
  //   if (isSavable) {
  //     // try {
  //     //   const docRef = await addDoc(collection(db, 'budgets'), {
  //     //     uid: auth.currentUser.uid,
  //     //     concept: concept.toString(),
  //     //     date: Timestamp.fromDate(date),
  //     //     amount: amount.toString(),
  //     //     description: description.toString(),
  //     //   });
  //     //   alert('Presupuesto creado');
  //     //   navigation.navigate('Budget');
  //     // } catch (error) {
  //     //   alert(error);
  //     // }
  //   }
  // };
  return (
    <Container style={styles.mainContainer}>
      <Header style={{backgroundColor: '#1E63CB'}}>
        <Left>
          <Button transparent onPress={() => navigation.navigate('Budget')}>
            <Icon name="arrow-back"></Icon>
          </Button>
        </Left>
        <Body>
          <Title style={{fontSize: 20}}>
            {budget? "Editar presupuesto":"Crear presupuesto"}
          </Title>
        </Body>
        <Pressable 
          disabled={!isSavable}
          style={{justifyContent:'center'}}
          onPress={saveBudget}>
              <Text style={{fontSize:18,color:isSavable?'white':'grey'}}>
                  {budget? 'Guardar':'Crear'}
              </Text>
        </Pressable>
      </Header>
      <Content style={{padding: 16}}>
        <Item style={localeStyles.item}>
          <Label
            style={itemStyles.label}>Concepto</Label>
          <Input 
            style={localeStyles.input}
            defaultValue={budget?budget.concept:""}
            onChangeText={concept => {
              setConcept(concept);
              setSave(concept !== '' && amount !== '')
            }} />
        </Item>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '50%'}}>
            <Item style={{...styles.item,...localeStyles.item}}>
              <Label style={itemStyles.label}>Cantidad</Label>
              <Input
                style={{...localeStyles.input,textAlign:'center'}}
                defaultValue={budget?budget.amount.toString():""}
                onChangeText={amount => {
                  setAmount(amount);
                  setSave(concept !== '' && amount !== '')
                }}
                keyboardType="numeric"
              />
            </Item>
          </View>
          <View
            style={{
              width: '50%',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Label style={{fontSize: 23, fontWeight: 'bold'}}>M.N.</Label>
          </View>
        </View>
        <View style={{flexDirection: 'row',alignItems:'center'}}>
          <View style={{width: '50%'}}>
            <Label style={itemStyles.label}>Fecha</Label>
            <Input 
              disabled 
              style={{...styles.item,...localeStyles.item,textAlign:'center',borderWidth:1,borderColor:'white',borderBottomColor:'#1E63CB'}} 
              value={date.toLocaleDateString('es-MX')}/>
          </View>
          <View style={{width: '50%'}}>
            <Button
              onPress={showDatepicker}
              style={{backgroundColor: '#1E63CB', alignSelf: 'center'}}>
              <Icon name="calendar"></Icon>
            </Button>
          </View>
        </View>
        <Item style={{marginTop: 16, borderBottomWidth: 0}}>
          <Label style={itemStyles.label}>Descripción</Label>
        </Item>
        <Item>
          <Textarea
            placeholder="Opcional"
            style={styles.textArea}
            defaultValue={budget?budget.description:""}
            onChangeText={description => setDescription(description)}
          />
        </Item>
      </Content>
    </Container>
  );
};

const localeStyles = StyleSheet.create({
  item:{
    flexDirection:'column',
    alignItems:'flex-start'
  },
  input:{
    width:'100%',
    borderWidth:1,
    borderColor:'white',
    borderBottomColor:'#1E63CB',
    fontSize:20
  }
})
export default PRegistrar;
