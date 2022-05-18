import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text} from 'react-native';
import ActionButton from 'react-native-action-button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';

import MovementCard from '../../components/MovementCard';
import MovementHeader from '../../components/MovementHeader';

import {getMovementsList, mapMovementsToDates} from '../../utils/movements';

import {styles} from '../../styles/global';

const MInicio = ({navigation}) => {
  const [movements, setMovements] = useState({});
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      (async () => {
        let movements = await getMovementsList();
        movements = mapMovementsToDates(movements); // HashMap
        setMovements(movements);
      })();
    }
    return () => {
      // this now gets called when the component unmounts
    };
  }, [isFocused]);
  return (
    <View style={{flex: 1, paddingHorizontal: 5}}>
      <ScrollView contentContainerStyle={styles.screenContainer}>
        {Object.keys(movements).length ? (
          Object.keys(movements)
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
            ))
        ) : (
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Aún sin movimientos
          </Text>
        )}
      </ScrollView>
      <ActionButton
        buttonColor="#1E63CB"
        onPress={() => navigation.navigate('MRegistrar')}
      />
    </View>
  );
};

export default MInicio;
