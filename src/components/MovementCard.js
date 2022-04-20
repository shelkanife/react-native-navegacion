import React from 'react';
import {Text, StyleSheet, Dimensions, Pressable, View} from 'react-native';

import SquareIcon from './SquareIcon';

import {icons} from '../utils/icons';

const MovementCard = ({
  type = 'default',
  description,
  category,
  amount = 0.0,
  onPress,
  style,
}) => {
  const icon = icons[type].icon || icons['default'].icon;
  const {name, color, backgroundColor} = icon;

  return (
    <Pressable
      onPress={onPress}
      style={[localStyles.card, localStyles.shadow, style]}>
      {Object.keys(icon).length > 0 ? (
        <SquareIcon
          name={name}
          color={color}
          backgroundColor={backgroundColor}
        />
      ) : null}
      <View style={localStyles.info}>
        <Text style={localStyles.description}>{description}</Text>
        <Text style={localStyles.category}>{category}</Text>
      </View>
      <Text style={[localStyles.category, {color: backgroundColor}]}>
        {'$' + Number.parseFloat(amount).toFixed(2)}
      </Text>
    </Pressable>
  );
};

const localStyles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    width: '100%',
    height: Dimensions.get('window').width * 0.17,
    backgroundColor: 'white',
    marginBottom: 15,
    paddingRight: 12,
    alignItems: 'center',
  },
  shadow: {
    elevation: 0,
  },
  info: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '100%',
  },
  description: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: -6,
  },
  category: {
    fontSize: 14,
  },
  amount: {
    flex: 2,
    fontSize: 14,
  },
});

export default MovementCard;
