import React from 'react'
import {Alert,Text} from 'react-native'
import { Container,Header,Left,Button,Body,Title,Right,Content,Icon,Card,CardItem } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles, itemStyles} from '../../styles/global';
import { deleteReminder } from '../../utils/reminders';
import PushNotification from 'react-native-push-notification'

const ReDetalles = ({navigation,route}) => {
    const {reminder} = route.params
    const [date,time] = reminder.date.split('T')
    const deletereminder = async() => {
        await deleteReminder(reminder.id)
        PushNotification.cancelLocalNotification(reminder.id);
        navigation.goBack()
    }
    return(
        <Container style={styles.mainContainer}>
            <Header style={{backgroundColor:'#1E63CB'}}>
                <Left>
                    <Button transparent
                        onPress={() => navigation.goBack()}>
                        <Icon 
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
                                {text:'Sí',onPress:deletereminder},
                                {text:'No',onPress:null}
                            ]
                            )}>
                        <Icon 
                            style={{color:'white',fontSize:23}}
                            name='trash' />
                    </Button>
                </Right>
            </Header>
            <Content style={{padding:16}}>
            <Card>
                <CardItem header style={{borderBottomWidth:1,borderBottomColor:"#ECE3E1"}}>
                    <Left>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>
                            {reminder.concept}
                        </Text>
                    </Left>
                </CardItem>
                <CardItem >
                    <Ionicons name='calendar'style={{color:'gray',fontSize:20}}></Ionicons>
                    <Text style={{fontSize:20, marginLeft:16}}>
                        {date}
                    </Text>
                </CardItem>
                <CardItem bordered>
                    <Ionicons name='time'style={{color:'gray',fontSize:20,}}></Ionicons>
                    <Text style={{fontSize:20, marginLeft:16}}>
                        {time.slice(0,5)}
                    </Text>
                </CardItem>
                <CardItem bordered>
                    <Ionicons name='newspaper'style={{color:'gray',fontSize:20,}}></Ionicons>
                    <Text style={{fontSize:20, marginLeft:16}}>
                        {reminder.comment === ''?'Sin comentarios':reminder.comment}
                    </Text>
                </CardItem>
            </Card>
        </Content>
      </Container>
    )
}

export default ReDetalles