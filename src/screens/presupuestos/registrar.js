import React, {useState} from 'react';
import {StyleSheet,Pressable} from 'react-native';
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
} from 'native-base';
import {styles, itemStyles} from './styles';
import {addBudget,updateBudget} from '../../utils/budgets'
import CalendarButton from '../../components/CalendatButton';

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
  
  const save = async () => {
    const budget = {
        concept,
        amount,
        date: new Date(date).toISOString().split('T')[0],
        description
    }
    await addBudget(budget)
    navigation.goBack()
  }

  const update = async () => {
    const updatedBudget = {
      id:budget.id,
      concept,
      amount,
      date:new Date(date).toISOString().split('T')[0],
      description
    }
    await updateBudget(updatedBudget)
    navigation.navigate('DetailsBudget',{budget: updatedBudget})
  }

  return (
    <Container style={styles.mainContainer}>
      <Header style={{backgroundColor: '#1E63CB'}}>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
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
            onPress={budget?update:save}>
              <Text style={{fontSize:18,color:isSavable?'white':'grey'}}>
                  {budget?"Guardar":"Crear"}
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
            <CalendarButton onChangeFunction={onChange} date={date} />
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
