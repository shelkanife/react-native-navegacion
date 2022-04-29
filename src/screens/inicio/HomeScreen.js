import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {signOut} from 'firebase/auth';
import {useIsFocused} from '@react-navigation/native';

import {auth} from '../../components/Auth';
import InfoCard from '../../components/InfoCard';

import {getMovementsList, getBalances} from '../../utils/movements';

import {styles, colors} from '../../styles/global';

const HomeScreen = () => {
  const userEmail = auth.currentUser?.email;
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [totalBalance, setTotalBalance] = useState(new Number(0));
  const [totalIncome, setTotalIncome] = useState(new Number(0));
  const [totalExpense, setTotalExpense] = useState(new Number(0));
  const [totalSaving, setTotalSaving] = useState(new Number(0));

  const setBalances = movements => {
    const {balance, income, expense, saving} = getBalances(movements);

    setTotalBalance(balance);
    setTotalIncome(income);
    setTotalExpense(expense);
    setTotalSaving(saving);
  };

  useEffect(() => {
    if (isFocused) {
      (async () => {
        const movements = await getMovementsList();
        setBalances(movements);
      })();
    }

    return () => {
      // this now gets called when the component unmounts
    };
  }, [isFocused]);

  return (
    <ScrollView contentContainerStyle={styles.screenContainer}>
      <Text style={styles.subtitle}>¡Hola {userEmail}!</Text>
      <Image
        source={require('../../assets/pie.png')}
        style={localStyles.graph}
      />
      <View>
        <InfoCard
          title="Disponible"
          text={
            totalBalance < 0
              ? `- $${Number.parseFloat(totalBalance * -1).toFixed(2)} M.N.`
              : `$${Number.parseFloat(totalBalance).toFixed(2)} M.N.`
          }
          icon={{name: 'home', color: 'white', backgroundColor: colors.main}}
        />
        <InfoCard
          onPress={() => navigation.navigate('Income')}
          title="Ingresos"
          text={`$${Number.parseFloat(totalIncome).toFixed(2)} M.N.`}
          icon={{
            name: 'arrow-up',
            color: 'white',
            backgroundColor: colors.income,
          }}
        />
        <InfoCard
          onPress={() => navigation.navigate('Expense')}
          title="Gastos"
          text={`$${Number.parseFloat(totalExpense).toFixed(2)} M.N.`}
          icon={{
            name: 'arrow-down',
            color: 'white',
            backgroundColor: colors.expense,
          }}
        />
        <InfoCard
          onPress={() => navigation.navigate('Saving')}
          title="Ahorros"
          text={`$${Number.parseFloat(totalSaving).toFixed(2)} M.N.`}
          icon={{
            name: 'infinite',
            color: 'white',
            backgroundColor: colors.savings,
          }}
        />
        <InfoCard
          onPress={() =>
            signOut(auth)
              .then(() => {
                navigation.replace('SignIn');
              })
              .catch(error => console.log(error))
          }
          text="Cerrar sesión"
        />
      </View>
    </ScrollView>
  );
};

const graphWidth = Dimensions.get('window').width * 0.7;

const localStyles = StyleSheet.create({
  graph: {
    width: graphWidth,
    height: graphWidth,
    marginBottom: 20,
  },
});

export default HomeScreen;
