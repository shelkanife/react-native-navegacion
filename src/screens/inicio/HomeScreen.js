import React from 'react';
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

import {auth} from '../../components/Auth';
import InfoCard from '../../components/InfoCard';

import {styles, colors} from '../../styles/global';

const HomeScreen = () => {
  const userEmail = auth.currentUser?.email;
  const navigation = useNavigation();

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
          text="$12,345.67"
          style={localStyles.card}
          icon={{name: 'home', color: 'white', backgroundColor: colors.main}}
        />
        <InfoCard
          onPress={() => navigation.navigate('Income')}
          title="Ingresos"
          text="$12,345.67"
          style={localStyles.card}
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
          style={localStyles.card}
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
          style={localStyles.card}
          icon={{
            name: 'infinite',
            color: 'white',
            backgroundColor: colors.ahorros,
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
          style={localStyles.card}
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
  card: {
    marginBottom: 30,
  },
});

export default HomeScreen;
