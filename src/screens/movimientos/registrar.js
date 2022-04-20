import React,{useState} from 'react'
import {View,Text,Pressable,StyleSheet} from 'react-native'
import {Header,Left,Body,Right,Container,Content,Button, Icon, Item, Input, Form, Label, Textarea} from 'native-base'
import { Picker } from 'native-base'
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import {colors} from '../../styles/global'
const {categories} = require('./data.json')

const MRegistrar = ({navigation}) => {
    const [income,setIncome] = useState(true)
    const [category, setCategory] = useState('c');
    const [date,setDate] = useState(new Date())
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

    return(
        <Container>
            <Header style={{backgroundColor:"#1E63CB"}}>
                <Left>
                    <Button transparent onPress={() => navigation.navigate('Movements')}>
                        <Icon name='arrow-back' style={{color:'white',fontSize:25}}/>
                    </Button>
                </Left>
                <Body>
                    <Text style={{color:'white',fontSize:20}}>Registrar movimiento</Text>
                </Body>
                <Right>
                    <Button transparent
                    onPress={() => alert('Guardado')}>
                        <Text style={{color:'white',fontSize:20}}>Guardar</Text>
                    </Button>
                </Right>
            </Header>
            <Content style={{padding:16}}>
                <View style={{flexDirection:'row',width:'100%',}}>
                    <Left 
                        style={income
                        ?{elevation:7,justifyContent:'center',alignItems:'center',backgroundColor:colors.main,borderWidth:5,borderColor:colors.main}
                        :{justifyContent:'center',alignItems:'center'} }>
                        <Pressable style={{width:'100%',alignItems:'center'}} onPress={() => {setIncome(true)}}>
                            <Text style={income?{fontSize:20,color:'white'}:{fontSize:20,color:'black'}}>Ingreso</Text>
                        </Pressable>
                    </Left>
                    <Right 
                        style={income
                        ? {justifyContent:'center',alignItems:'center'}
                        : {elevation:7,backgroundColor:colors.gastos,justifyContent:'center',alignItems:'center',borderWidth:5,borderColor:colors.gastos}}>
                        <Pressable style={{width:'100%',alignItems:'center'}} onPress={() => {setIncome(false)}}>
                            <Text style={income?{fontSize:20,color:'black'}:{fontSize:20,color:'white'}}>Gasto</Text>
                        </Pressable>
                    </Right>
                </View>
                <Item style={{marginTop:16,borderBottomColor:'white'}}>
                    <Label style={localeStyles.label}>Concepto</Label>
                </Item>
                <Item>
                    <Input style={localeStyles.input} />
                </Item>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View style={{width:'50%'}}>
                        <Label style={localeStyles.label}>Cantidad</Label>
                        <Input style={localeStyles.inputHalfWidth}/>
                    </View>
                    <View style={{width:'50%',}}>
                        <Label style={{textAlign:'center', fontSize:20,fontWeight:'bold'}}>M.N.</Label>
                    </View>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View style={{width:'50%'}}>
                        <Label style={localeStyles.label}>Fecha</Label>
                        <Input 
                            disabled 
                            style={localeStyles.inputHalfWidth} 
                            value={date.toLocaleDateString('es-MX')}/>

                    </View>
                    <View style={{width:'50%'}}>
                        <Button 
                        onPress={showDatepicker}
                        style={{backgroundColor:'#1E63CB',alignSelf:'center'}}>
                            <Icon name='calendar'/>
                        </Button>
                    </View>
                </View>
                    <Item>
                        <Label style={localeStyles.label}>Categoría</Label>
                    </Item>
                    <Picker
                    note
                    mode="dialog"
                    style={{ color:'black' }}
                    selectedValue={category}
                    onValueChange={(value) => setCategory(value)}>
                        {
                            categories.map(category => {
                                return(
                                    <Picker.Item label={category.name} value={category.value} />
                                )
                            })
                        }
                    </Picker>
                <Item>
                    <Label>Descripción</Label>
                </Item>
                <Item>
                    <Textarea placeholder='Opcional'
                        style={{borderWidth:1,borderColor:'#1E63CB',borderRadius:15,width:'100%',height:120}} />
                </Item>
            </Content>
        </Container>
    )
}

const localeStyles = StyleSheet.create({
    label:{
        
    },
    input:{
        width:'100%',
        borderBottomWidth:1,
        borderBottomColor:'#1E63CB',
    },
    inputHalfWidth:{
        textAlign:'center',
        borderBottomWidth:1,
        borderBottomColor:'#1E63CB'
    }
})


export default MRegistrar