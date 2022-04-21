import React from 'react'
import {View,Text,StyleSheet,Alert} from 'react-native'
import {Header,Left, Button,Body,Content,CardItem,Card,Icon, Title, Container, Right} from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../styles/global'

const MDetalles = ({navigation, data,route}) => {
    const dataObj=route.params.data
    const deleteMovement=()=>{}
    return(
        <Container>
            <Header style={{backgroundColor:colors.main}}>
                <Left>
                    <Button transparent onPress={() => navigation.navigate('Movements')}>
                        <Ionicons 
                            style={{color:'white',fontSize:25}} 
                            name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>Detalles</Title>
                </Body>
                <Right>
                    <Button 
                        transparent
                        onPress={() => {
                            Alert.alert(
                                'Eliminar','¿Seguro quieres eliminarlo?',
                                [
                                    {text:'Sí',onPress:deleteMovement},
                                    {text:'No',onPress:null}
                        ])}}>
                        <Ionicons style={{color:'white',fontSize:25}}name='trash' />
                    </Button>
                </Right>
            </Header>
            <Content style={{padding:16}}>
                <Card>
                    <CardItem header bordered>
                        <View style={{flexDirection:'row'}}>
                            <Ionicons 
                            name={dataObj.incomming?'arrow-up':'arrow-down'} 
                            style={dataObj.incomming
                                ? localeStyles.icon
                                : ({...localeStyles.icon,backgroundColor:colors.gastos})}/>
                            <Title style={{color:'black',fontSize:20}}>{dataObj.concept}</Title>
                        </View>
                    </CardItem>
                    <CardItem>
                        <Text style={{width:'30%',fontSize:20}}>Categoría</Text>
                        <Text style={{width:'70%',fontSize:20}}>{dataObj.category}</Text>
                    </CardItem>
                    <CardItem>
                        <Text style={{width:'30%',fontSize:20}}>Cantidad</Text>
                        <Text style={{width:'70%',fontSize:20}}>{dataObj.amount}</Text>
                    </CardItem>
                    <CardItem>
                        <Text style={{width:'30%',fontSize:20}}>Fecha</Text>
                        <Text style={{width:'70%',fontSize:20}}>{dataObj.date}</Text>
                    </CardItem>
                    <CardItem>
                        <Text style={{width:'30%',fontSize:20}}>Tipo</Text>
                        <Text style={{width:'70%',fontSize:20}}>{dataObj.type?"Ingreso":"Gasto"}</Text>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    )
}

const localeStyles=StyleSheet.create({
    icon: {
        justifyContent:'center',
        color:'#FFFFFF',
        backgroundColor:colors.ingresos,
        fontSize:40,
        alignItems:"center",
        marginRight:10
    },
    income:{
        // color:colors.ingresos
    },
    outcome:{
        // color:colors.gastos
    },
    movementName:{
        fontSize:16,
        fontWeight:"bold"
    },
    ammount:{
        fontSize:16,
        fontWeight:'bold',
        color:colors.ingresos
    }
})

export default MDetalles