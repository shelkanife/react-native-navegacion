import React from 'react';
import {View, ScrollView, Image, StyleSheet, Dimensions} from 'react-native';

import InfoCard from '../../components/InfoCard';

import {container, colors} from '../../styles/global.styles';

const ScreenInicio = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={{...container}}>
      <Image source={require('../../assets/pie.png')} style={styles.graph} />
      <View>
        <InfoCard
          title="Disponible"
          text="$12,345.67"
          style={styles.card}
          icon={{name: 'home', color: 'white', backgroundColor: colors.main}}
        />
        <InfoCard
          onPress={() => navigation.navigate('Income')}
          title="Ingresos"
          text="$12,345.67"
          style={styles.card}
          icon={{
            name: 'arrow-up',
            color: 'white',
            backgroundColor: colors.ingresos,
          }}
        />
        <InfoCard
          onPress={() => navigation.navigate('Outcome')}
          title="Gastos"
          text="$12,345.67"
          style={styles.card}
          icon={{
            name: 'arrow-down',
            color: 'white',
            backgroundColor: colors.gastos,
          }}
        />
        <InfoCard
          onPress={() => navigation.navigate('Saving')}
          title="Ahorros"
          text="$12,345.67"
          style={styles.card}
          icon={{
            name: 'infinite',
            color: 'white',
            backgroundColor: colors.ahorros,
          }}
        />
      </View>
    </ScrollView>
  );
};

const graphWidth = Dimensions.get('window').width * 0.7;

const styles = StyleSheet.create({
  graph: {
    width: graphWidth,
    height: graphWidth,
    marginBottom: 20,
  },
  card: {
    marginBottom: 30,
  },
});

export default ScreenInicio;
