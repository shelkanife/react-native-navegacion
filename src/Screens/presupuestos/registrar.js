import React,{useState} from 'react'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { Text, Button, Container, Content, View, Input, Item, Label, Textarea, Icon, Header, Left, Body, Title, Right } from 'native-base'
import { styles,itemStyles } from './styles'
import { collection,addDoc,Timestamp } from 'firebase/firestore/lite';
import { db,auth } from '../../Components/Auth';
import { async } from '@firebase/util';


const PRegistrar = ({navigation,route}) => {
    const [concept,setConcept]=useState('')
    const [amount,setAmount]=useState('')
    const [description,setDescription]=useState('')
    const [date, setDate] = useState(new Date());
    const [isSavable,setSave]=useState(false)

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };
    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: true
        })
    };
    const showDatepicker = () => {
        showMode('date');
    };
    const addNewBudget = async() => {
        if(isSavable){
            try{
                const docRef = await addDoc(collection(db, "budgets"), {
                    "uid":auth.currentUser.uid,
                    "concept":concept.toString(),
                    "date": Timestamp.fromDate(date),
                    "amount":amount.toString(),
                    "description":description.toString()
                });
                alert('Presupuesto creado')
                navigation.replace("Budget")
            }catch(error){
                alert(error)
            }
        }
    }
    return(
        <Container style={styles.mainContainer}>
            <Header style={{backgroundColor:'#1E63CB'}}>
                <Left>
                    <Button transparent
                    onPress={() => navigation.navigate('Budget')}>
                        <Icon name='arrow-back'></Icon>
                    </Button>
                </Left>
                <Body>
                    <Title style={{fontSize:20}}>Crear presupuesto</Title>
                </Body>
                <Right>
                    <Button transparent 
                    disabled={isSavable? false:true}
                    onPress={addNewBudget}>
                        <Text style={{fontSize:20}}>crear</Text>
                    </Button>
                </Right>
            </Header>
            <Content style={{padding:16}}>
                <Item floatingLabel style={styles.item}>
                    <Label style={itemStyles.label}l>Concepto</Label>
                    <Input 
                        style={itemStyles.txtInput}
                        onChangeText={(concept) =>{
                            setConcept(concept)
                            setSave(concept != '' && amount != '')
                            }} />
                </Item>
                <View
                style={{flexDirection:'row'}}>
                    <View style={{width:'50%'}}>
                        <Item floatingLabel style={styles.item}>
                            <Label style={itemStyles.label}>Cantidad</Label>
                            <Input style={{...itemStyles.txtInput,textAlign:'center'}}
                            onChangeText={(amount) =>{
                                setAmount(amount)
                                setSave(concept !== '' && amount != '')
                            }}
                            keyboardType='numeric' />
                        </Item>
                    </View>
                    <View style={{width:'50%',alignItems:'center',justifyContent:'center'}}>
                        <Label style={{fontSize:20,fontWeight:'bold'}}>M.N.</Label>
                    </View>
                </View>
                <View 
                style={{flexDirection:'row'}}>
                    <View style={{width:'50%'}}>
                        <Label style={itemStyles.label}>Fecha</Label>
                        <Label style={styles.labelDate}>
                            {date.toLocaleDateString('es-MX')}
                        </Label>
                    </View>
                    <View style={{width:'50%'}}>
                    <Button 
                        onPress={showDatepicker} 
                        style={{backgroundColor:'#1E63CB',alignSelf:'center'}}>
                            <Icon name='calendar'></Icon>
                        </Button>
                    </View>
                </View>
                <Item style={{marginTop:16,borderBottomWidth:0}}>
                    <Label style={itemStyles.label}>Descripción</Label>
                </Item>
                <Item>
                    <Textarea 
                    placeholder='Opcional'
                    style={styles.textArea}
                    onChangeText={(description) => setDescription(description)}
                    />
                </Item>
            </Content>
        </Container>
    )
}

export default PRegistrar