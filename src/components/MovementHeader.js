import React from 'react';
import {Text, StyleSheet, Dimensions, View} from 'react-native';

const MovementHeader = ({fecha = 'Fecha desconocida', style}) => {
  return (
    <View style={[localStyles.header, style]}>
      <Text style={localStyles.text}>{fecha}</Text>
    </View>
  );
};

const localStyles = StyleSheet.create({
  header: {
    minWidth: '100%',
    //height: Dimensions.get('window').width * 0.17,
    backgroundColor: 'rgba(30, 99, 203, 0.1)',
    marginBottom: 15,
    padding: 5,
  },
  text: {
    color: '#1E63CB',
  },
});

export default MovementHeader;
