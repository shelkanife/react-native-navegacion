import React from 'react';
import {Text, StyleSheet, Dimensions, Pressable, View} from 'react-native';

import SquareIcon from './SquareIcon';

const InfoCard = ({icon = {}, title, text, onPress, style}) => {
  const {name, color, backgroundColor} = icon;

  return (
    <Pressable onPress={onPress} style={[styles.card, styles.shadow, style]}>
      {Object.keys(icon).length > 0 ? (
        <SquareIcon
          name={name}
          color={color}
          backgroundColor={backgroundColor}
        />
      ) : null}
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    width: '100%',
    height: Dimensions.get('window').width * 0.17,
    backgroundColor: 'white',
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
