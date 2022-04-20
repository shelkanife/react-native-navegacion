import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text, Pressable,StyleSheet} from 'react-native';
import {colors} from '../styles/global'

const Movement = ({navigation, concept, date, category, amount, incomming, data}) => {
    return(
        <View style={localeStyles.card}>
            <View style={{borderBottomWidth:1,borderBottomColor:'#dedede'}}>
                <Text style={localeStyles.textDate}>{date}</Text>
            </View>
            <Pressable 
                onPress={() => navigation.navigate('MDetalles',{data:data})}
                style={({pressed}) => ({
                    paddingHorizontal:10,
                    backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white' })}>
                <View style={{paddingVertical:8,flexDirection:'row'}}>
                    <Ionicons 
                        name={incomming?'arrow-up':'arrow-down'} 
                        style={
                            incomming
                            ? localeStyles.icon
                            : {...localeStyles.icon,backgroundColor:colors.gastos} }/>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <View>
                            <Text style={localeStyles.movementName}>{concept}</Text>
                            <Text>{category}</Text>
                        </View>
                        <Text style={incomming
                        ? localeStyles.ammount
                        : {...localeStyles.ammount, color:colors.gastos} }>${amount}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
};

const localeStyles=StyleSheet.create({
    card:{
        marginTop:16,
        borderBottomWidth:1,
        borderBottomColor:'#737373',
        backgroundColor:'white',
        elevation:7
    },
    textDate:{
        paddingHorizontal:10,
        color:colors.main
    },
    icon: {
        justifyContent:'center',
        color:'#FFFFFF',
        backgroundColor:colors.ingresos,
        fontSize:40,
        alignItems:"center",
        marginRight:10
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

export default Movement;
