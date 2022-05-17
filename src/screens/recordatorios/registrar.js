import React,{useState,useEffect} from 'react'
import {Text,Pressable,View,StyleSheet} from 'react-native'
import PushNotification from 'react-native-push-notification'
import {styles, itemStyles} from '../presupuestos/styles';
import {Container,Header,Left,Content, Button, Icon, Body, Title, Item, Label,Input,Textarea} from 'native-base'
import { colors } from '../../styles/global';
import CalendarButton from '../../components/CalendatButton';
import { addReminder } from '../../utils/reminders';
import uuid from 'react-native-uuid'

const ReRegistrar = ({navigation}) => {
    const [concept,setConcept] = useState('')
    const [salvable,setSalvable] = useState(false)
    const [date,setDate] = useState(new Date())
    const [time,setTime] = useState({hrs:new Date().getHours(),mns:new Date().getMinutes()})
    const [comment,setComment] = useState('')

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };

    const onChangeTime = (event,selectedDate) => {
        const currentDate = selectedDate
        setTime({hrs:selectedDate.getHours(),mns:selectedDate.getMinutes()})
    }
    
    const showTime = () => {
        let {hrs} = time
        let {mns} = time
        let strHrs = hrs<10?`0${hrs}`:`${hrs}`
        let strMns = mns<10?`0${mns}`:`${mns}`
        return `${strHrs}:${strMns}`
    }
    const createNotification = async() => {
        date.setHours(time.hrs)
        date.setMinutes(time.mns)
        date.setSeconds(0)
        const id = uuid.v4()
        try{
            

            PushNotification.localNotificationSchedule({
                id,
                channelId: 'reminders',
                title: 'Recordatorio',
                message: concept,
                date: date,
                allowWhileIdle: true,
            });
            const reminder = {
                id,
                concept,
                date,
                comment
            }
            await addReminder(reminder)
            navigation.goBack()
        }catch(e){
            alert(e)
        }
    }

    return(
        <Container>
            <Header style={{backgroundColor:colors.main}}>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back"></Icon>
                    </Button>
                </Left>
                <Body>
                    <Title stile={{fontsize:20}}>Crear recordatorio</Title>
                </Body>
                <Pressable 
                    style={{justifyContent:'center'}}
                    onPress={() => createNotification() }>
                    <Text style={{fontSize:18,color: salvable?'white':'gray'}}>
                        Crear
                    </Text>
                </Pressable>
            </Header>
            <Content style={{padding: 16}}>
            <Item style={localeStyles.item}>
                <Label
                    style={itemStyles.label}>Concepto</Label>
                <Input 
                    style={localeStyles.input}
                    onChangeText={concept => {
                        setConcept(concept)
                        if(concept.length>3) setSalvable(true); else setSalvable(false)}}/>
            </Item>

            <View style={{flexDirection: 'row',alignItems:'center'}}>
                <View style={{width: '50%'}}>
                <Label style={itemStyles.label}>Fecha</Label>
                <Input 
                    disabled 
                    style={{...styles.item,...localeStyles.item,textAlign:'center',borderWidth:1,borderColor:'white',borderBottomColor:'#1E63CB'}} 
                    value={date.toLocaleDateString('es-MX')}/>
                </View>
                <View style={{width: '50%'}}>
                    <CalendarButton onChangeFunction={onChangeDate} date={date} />
                </View>
            </View>
            <View style={{flexDirection: 'row',alignItems:'center'}}>
                <View style={{width: '50%'}}>
                <Label style={itemStyles.label}>Hora</Label>
                <Input 
                    disabled 
                    style={{...styles.item,...localeStyles.item,textAlign:'center',borderWidth:1,borderColor:'white',borderBottomColor:'#1E63CB'}} 
                    value={showTime()}/>
                </View>
                <View style={{width: '50%'}}>
                    <CalendarButton onChangeFunction={onChangeTime} date={date} mode='time' iconName='time'/>
                </View>
            </View>
            <Item style={{marginTop: 16, borderBottomWidth: 0}}>
                <Label style={itemStyles.label}>Comentario</Label>
            </Item>
            <Item>
                <Textarea
                    placeholder="Opcional"
                    style={styles.textArea}
                    onChangeText={comment => setComment(comment)}
                />
            </Item>
            </Content>
        </Container>
    )
}

const localeStyles = StyleSheet.create({
    item:{
      flexDirection:'column',
      alignItems:'flex-start',
      color:"#6A6766"
    },
    input:{
      width:'100%',
      borderWidth:1,
      borderColor:'white',
      borderBottomColor:'#1E63CB',
      fontSize:20
    }
  })

export default ReRegistrar