import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Pressable,StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ActionButton from 'react-native-action-button';
import {db, auth} from '../../components/Auth';
import {collection, getDocs, query, where} from 'firebase/firestore/lite';
import Budget from '../../components/Budget';
import {toDate} from 'firebase/firestore/lite';

import PDetalle from './detalle';
import PRegistrar from './registrar';
const data = require('./data.json')

const Stack = createNativeStackNavigator();

const PInicio = ({navigation}) => {
  const [budgets, setBudgets] = useState([]);
  const getBudgetsList = async function () {
    setBudgets(data.budgets)
    // try {
    //   const budgetsCol = collection(db, 'budgets');
    //   const queryResult = query(
    //     budgetsCol,
    //     where('uid', '==', auth.currentUser.uid),
    //   );
    //   const budgetsSnapshot = await getDocs(queryResult);
    //   const budgetsList = budgetsSnapshot.docs.map(doc => {
    //     return {...doc.data(), id: doc.id};
    //   });
    //   setBudgets(budgetsList);
    // } catch (error) {
    //   alert(error);
    // }
  };
  useEffect(() => {
    getBudgetsList();
  }, []);
  return (
    <View style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={
          budgets.length === 0
            ? localeStyles.mainContainer
            : {}
        }>
        {budgets.length === 0 ? (
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Aún sin presupuestos
          </Text>
        ) : (
          budgets.map(budget => {
            return (
              <Budget
                key={budget.id}
                date={
                  new Date(Date.parse(budget.date)).toLocaleDateString('es-MX')
                  //budget.date.toDate().toLocaleDateString('es-MX')
                }
                concept={budget.concept}
                navigation={navigation}
                budgetData={budget}
              />
            );
          })
        )}
      </ScrollView>

      <ActionButton
        buttonColor="#1E63CB"
        onPress={() => navigation.navigate('RegisterBudget')}
      />
    </View>
  );
};

const navigationOptions = {
  headerTintColor: '#ffffff',
  headerStyle: {
    backgroundColor: '#1E63CB',
    borderBottomColor: '#ffffff',
  },
  headerTitleStyle: {
    fontSize: 20,
  },
  headerTitleAlign: 'center',
};

const SPInicio = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Budget"
        component={PInicio}
        options={{...navigationOptions, title: 'Presupuestos'}}
      />
      <Stack.Screen
        name="RegisterBudget"
        component={PRegistrar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailsBudget"
        component={PDetalle}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const localeStyles=StyleSheet.create({
  mainContainer:{
    flexGrow: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
})

export default SPInicio;
