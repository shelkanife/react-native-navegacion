import React,{useState,useEffect} from 'react'
import {View,Text,Button,ScrollView} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ActionButton from 'react-native-action-button';
import Movement from '../../components/Movement';
import MDetalles from './detalles'
import MRegistrar from './registrar'

const data = require('./data.json')
const Stack = createNativeStackNavigator()

const MInicio = ({navigation}) => {
    const [movements, setMovements] = useState([]);
    const getMovementsList = async function () {
        setMovements(data.movements)
    }
    useEffect(() => {
        getMovementsList();
    }, []);
    return(
        <View style={{flex:1,paddingHorizontal:5}}>
            <ScrollView contentContainerStyle={{flexGrow:1}}>
                { movements.map(movement => {
                    return(
                        <Movement 
                            id={movement.id}
                            incomming={movement.incomming}
                            concept={movement.concept} 
                            date={movement.date}
                            category={movement.category}
                            amount={movement.amount}
                            navigation={navigation}
                            data={movement}/>
                        )
                    })
                }
            </ScrollView>
            <ActionButton buttonColor="#1E63CB"
                onPress={() => navigation.navigate('MRegistrar')}
                />
        </View>
    )
}

const navigationOptions = {
    headerTintColor: '#ffffff',
    headerStyle: {
        backgroundColor: '#1E63CB',
        borderBottomColor: '#ffffff',
    },
    headerTitleStyle: {
        fontSize: 20,
    },
    headerTitleAlign: 'center',
};

const SMInicio = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen 
                name="Movements" 
                component={MInicio} 
                options={{...navigationOptions,title:'Movimientos' }}/>
            <Stack.Screen 
                name="MRegistrar" 
                component={MRegistrar} 
                options={{ headerShown:false }}/>
            <Stack.Screen 
                name="MDetalles" 
                component={MDetalles} 
                options={{ headerShown:false }}/>
        </Stack.Navigator>
    )
}

export default SMInicio