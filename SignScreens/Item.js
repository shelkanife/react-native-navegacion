import React from 'react';
import {Text,View,TextInput} from 'react-native'

const Item = ({nameField,placeholder}) =>{
    return (
        <View>
            <Text style={styles.label}>{nameField}</Text>
            <TextInput style={styles.txtInput} placeholder={placeholder} keyboardType='email-address' />
        </View>        
    )
}

export default Item