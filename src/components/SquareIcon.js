import React from 'react';
import {View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SquareIcon = ({name, color, backgroundColor}) => (
  <View style={[localStyles.container, {backgroundColor}]}>
    <Ionicons name={name} size={9999} adjustsFontSizeToFit color={color} />
  </View>
);

const localStyles = StyleSheet.create({
  container: {
    aspectRatio: 1,
    height: '100%',
    padding: 10,
  },
});

export default SquareIcon;
