import React from 'react';
import {Text, View, TextInput} from 'react-native';
import {itemStyles, styles} from '../screens/sign/styles';
import {Input, Item, Label} from 'native-base';
const FormGroup = ({nameField, placeholder}) => {
  return (
    <Item
      floatingLabel
      style={{marginBottom: 10, borderColor: '#1E63CB', borderBottomWidth: 2}}>
      <Label style={itemStyles.label}>{nameField}</Label>
      <Input style={itemStyles.txtInput} />
    </Item>
    // <View>
    //     <Text style={itemStyles.label}>{nameField}</Text>
    //     <TextInput style={itemStyles.txtInput} placeholder={placeholder} keyboardType='email-address' />
    // </View>
  );
};

export default FormGroup;
