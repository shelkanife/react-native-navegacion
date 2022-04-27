import React,{useState,useEffect} from 'react'
import {View,ScrollView,Text} from 'react-native'
import Movement from '../../components/Movement';
import ActionButton from 'react-native-action-button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native'

// const data = require('./data.json')

const MInicio = ({navigation}) => {
    const [movements, setMovements] = useState([]);
    const isFocused = useIsFocused()

    const getMovementsList = async function () {
        try{
            const strMovements = await AsyncStorage.getItem('movements')
            if(strMovements !== null){
                const arrayMovements = JSON.parse(strMovements)
                console.log(arrayMovements.length)
                setMovements([...arrayMovements])
            }
        }catch(e){alert(e)}
    }

    // const setData = async (value) => {
    //     try{
    //         await AsyncStorage.setItem('movements',value)
    //     }catch(e){}
    // }

    useEffect(() => {
        // AsyncStorage.getAllKeys()
        // .then(keys => AsyncStorage.multiRemove(keys))
        // .then(() => alert('success'));
        // const movement = {
        //     "id":1,
        //     "incomming":false,
        //     "concept":"Concepto 1",
        //     "date":"12/05/2022",
        //     "category":"Comida",
        //     "amount":123.48,
        //     "note":"/storage/emulated/0/PersonalFinance/default.jpg"
        // }
        // const arrayMovement=[movement]
        // setData(JSON.stringify(arrayMovement))        
        getMovementsList()
    }, [isFocused]);
    return(
        <View style={{flex:1,paddingHorizontal:5}} >
            <ScrollView 
                contentContainerStyle={movements.length?{flexGrow:1}:{flexGrow:1,alignItems:'center',justifyContent:'center'}}>
                { movements.length
                ? movements.map(movement => {
                    console.log(movement)
                    return(
                        <Movement 
                            key={movement.id}
                            incomming={movement.income}
                            concept={movement.concept} 
                            date={
                                new Date(Date.parse(movement.date)).toLocaleDateString('es-MX')
                            }
                            category={movement.category}
                            amount={movement.amount}
                            navigation={navigation}
                            data={movement}/>
                        )
                    })
                : <Text style={{fontSize:20,fontWeight:'bold'}}>Aún sin movimientos</Text>
                }
            </ScrollView>
            <ActionButton buttonColor="#1E63CB"
                onPress={() => navigation.navigate('MRegistrar')}
                />
        </View>
    )
}

export default MInicio