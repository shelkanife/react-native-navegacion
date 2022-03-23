import React from 'react';
import {Text,View,TextInput} from 'react-native'
import { itemStyles } from './styles';

const FormGroup = ({nameField,placeholder}) =>{
    return (
        <View>
            <Text style={itemStyles.label}>{nameField}</Text>
            <TextInput style={itemStyles.txtInput} placeholder={placeholder} keyboardType='email-address' />
        </View>        
    )
}

export default FormGroup