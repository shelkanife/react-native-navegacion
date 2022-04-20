import React from 'react';
import {ScrollView, Text, View, StyleSheet, Dimensions} from 'react-native';

import SquareIcon from '../../components/SquareIcon';
import InfoCard from '../../components/InfoCard';
import MovementHeader from '../../components/MovementHeader';
import MovementCard from '../../components/MovementCard';

import {styles} from '../../styles/global';
import {icons} from '../../utils/icons';

// Here should be a function to pull all movements (depending on type)
// To fake this a hash is hardcoded
const types = {
  ingresos: {
    description: 'Ingreso 1',
    category: 'Salario',
  },
  gastos: {
    description: 'Gasto 1',
    category: 'Servicios',
  },
  ahorros: {
    description: 'Ahorro 1',
    category: 'AFORE',
  },
};

const SummaryScreen = ({type = 'ingresos'}) => {
  type = type.toLowerCase();
  const {name, color, backgroundColor} = icons[type].icon;
  const {description, category} = types[type];

  return (
    <ScrollView contentContainerStyle={styles.screenContainer}>
      <View style={localStyles.icon}>
        <SquareIcon
          name={name}
          color={color}
          backgroundColor={backgroundColor}
        />
      </View>
      <InfoCard title="Ultimo mes" text="$12,345.67 M.N." />
      <InfoCard
        title={type.toUpperCase() + ' promedio (ultimos n meses)'}
        text="$12,345.67 M.N."
      />
      <View>
        <Text style={localStyles.text}>Movimientos</Text>
        <MovementHeader fecha="21 de febrero 2022" />
        <MovementCard
          type={type}
          description={description}
          category={category}
          amount="123.45"
        />
        <MovementCard
          type={type}
          description={description}
          category={category}
          amount="123.45"
        />
        <MovementHeader fecha="20 de febrero 2022" />
        <MovementCard
          type={type}
          description={description}
          category={category}
          amount="123.45"
        />
      </View>
    </ScrollView>
  );
};

const localStyles = StyleSheet.create({
  icon: {
    maxHeight: Dimensions.get('window').width * 0.25,
    marginBottom: 30,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 15,
  },
});

export default SummaryScreen;
