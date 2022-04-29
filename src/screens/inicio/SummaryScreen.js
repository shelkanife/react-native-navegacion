import React, {useState, useEffect} from 'react';
import {ScrollView, Text, View, StyleSheet, Dimensions} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/core';

import SquareIcon from '../../components/SquareIcon';
import InfoCard from '../../components/InfoCard';
import MovementHeader from '../../components/MovementHeader';
import MovementCard from '../../components/MovementCard';

import {
  getMovementsList,
  mapMovementsToDates,
  getAverageBalance,
} from '../../utils/movements';

import {styles} from '../../styles/global';
import {icons} from '../../utils/icons';

const SummaryScreen = ({type = 'income'}) => {
  const navigation = useNavigation();
  const [movements, setMovements] = useState({}); // HashMap
  const [monthlyBalance, setMonthlyBalance] = useState([]);
  const [annualBalance, setAnnualBalance] = useState([]);
  const isFocused = useIsFocused();
  const {name, color, backgroundColor} = icons[type].icon;
  type = type.toLowerCase();

  useEffect(() => {
    if (isFocused) {
      (async () => {
        let movements = await getMovementsList();
        let {monthlyBalance, annualBalance} = getAverageBalance(
          type,
          movements,
        );

        movements = movements.filter(movement => movement.type == type);
        movements = mapMovementsToDates(movements); // HashMap
        setMovements(movements);
        setMonthlyBalance(monthlyBalance);
        setAnnualBalance(annualBalance);
      })();
    }

    return () => {
      // this now gets called when the component unmounts
    };
  }, [isFocused]);

  return (
    <ScrollView contentContainerStyle={styles.screenContainer}>
      <View style={localStyles.icon}>
        <SquareIcon
          name={name}
          color={color}
          backgroundColor={backgroundColor}
        />
      </View>
      <InfoCard
        title="Mes actual"
        text={`$${Number.parseFloat(monthlyBalance).toFixed(2)} M.N.`}
      />
      <InfoCard
        title="Año actual"
        text={`$${Number.parseFloat(annualBalance).toFixed(2)} M.N.`}
      />
      <View>
        <Text style={localStyles.text}>Movimientos</Text>
        {Object.keys(movements)
          .sort((date1, date2) => date1 < date2)
          .map(date => (
            <>
              <MovementHeader key={date} fecha={date} />
              {movements[date].map(movement => (
                <MovementCard
                  type={movement.type}
                  concept={movement.concept}
                  category={movement.category}
                  amount={movement.amount}
                  key={movement.id}
                  onPress={() =>
                    navigation.navigate('MDetalles', {data: movement})
                  }
                />
              ))}
            </>
          ))}
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
