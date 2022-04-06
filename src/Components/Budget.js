import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View,Text,Pressable} from 'react-native';
import { styles } from '../Screens/presupuestos/styles';

const Budget = ({concept,date,navigation,budgetData}) => {
    return(
        <View style={styles.container}>
            <View style={styles.date}>
                <Text style={styles.textDate}>{date}</Text>
            </View>
            <Pressable
                onPress={() => navigation.navigate('DetailsBudget',{
                    budget:budgetData
                })}
                style={({ pressed }) => ({
                    backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white'
                })}>
                <View style={styles.details}>
                    <Ionicons name='logo-usd' style={styles.icon}></Ionicons>
                    <Text style={styles.presupuestoName}>{concept}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default Budget