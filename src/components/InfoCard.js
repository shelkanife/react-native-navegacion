import React from 'react';
import {Text, StyleSheet, Dimensions, Pressable, View} from 'react-native';

import SquareIcon from './SquareIcon';

const InfoCard = ({icon = {}, title, text, onPress, style}) => {
  const {name, color, backgroundColor} = icon;

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        localStyles.card,
        localStyles.shadow,
        {backgroundColor: pressed && onPress ? 'rgb(210, 230, 255)' : 'white'},
        style,
      ]}>
      {Object.keys(icon).length > 0 ? (
        <SquareIcon
          name={name}
          color={color}
          backgroundColor={backgroundColor}
        />
      ) : null}
      <View style={localStyles.info}>
        <Text style={localStyles.title}>{title}</Text>
        <Text style={localStyles.text}>{text}</Text>
      </View>
    </Pressable>
  );
};

const localStyles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    width: '100%',
    height: Dimensions.get('window').width * 0.17,
    backgroundColor: 'white',
    marginBottom: 30,
  },
  shadow: {
    elevation: 7,
  },
  info: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    margin: -6,
  },
  text: {
    fontSize: 26,
  },
});

export default InfoCard;
