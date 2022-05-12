import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Button, Pressable,StyleSheet} from 'react-native';
import ActionButton from 'react-native-action-button';
import Budget from '../../components/Budget';
import { useIsFocused } from '@react-navigation/native';
import { getBudgetsList,mapBudgetsToDates } from '../../utils/budgets' 
import MovementHeader from '../../components/MovementHeader'
import { styles } from '../../styles/global';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReRegistrar from './registrar'
import ReDetalles from './detalle'

const Stack=createNativeStackNavigator()

const ReInicio = ({navigation}) => {
    const [budgets, setBudgets] = useState([]);
    const isFocused = useIsFocused()

    useEffect(() => {
        (async() => {
          let budgets = await getBudgetsList();
          budgets = mapBudgetsToDates(budgets); // HashMap
          setBudgets(budgets);
        })
        ()
      }, [isFocused]);

    return(
        <View style={{flex: 1, paddingHorizontal: 5}}>
        <ScrollView contentContainerStyle={
        Object.keys(budgets).length
        ? {flex:1, paddingTop: 20, paddingHorizontal: 20}
        : {flex:1,justifyContent:'center',alignItems:'center'}}>
        {Object.keys(budgets).length ? (
          Object.keys(budgets)
            .sort((date1, date2) => date1 < date2)
            .map(date => (
              <>
                <MovementHeader key={date} fecha={date} />
                {budgets[date].map(budget => (
                  <Budget
                    concept={budget.concept}
                    key={budget.id}
                    budgetData={budget}
                    navigation={navigation}
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
        buttonColor='#dd7554'
        onPress={() => navigation.navigate('RegisterReminder')}
        />
        </View>
    );
}

const SReInicio = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name="Reminders" component={ReInicio} options={{ title:'Recordatorios' }}/>
            <Stack.Screen name="RegisterReminder" component={ReRegistrar} options={{ title:'Registrar Recordatorio' }}/>
            <Stack.Screen name="ReminderDetails" component={ReDetalles} options={{ title:'Detalle de Recordatorio' }}/>
        </Stack.Navigator>
    )
}

const localeStyles=StyleSheet.create({
    mainContainer:{
      paddingTop: 20,
      paddingHorizontal: 20,
      alignItems: 'center',
      minHeight: '100%',
      // flexGrow: 1, 
      // alignItems: 'center', 
      // justifyContent: 'center'
    }
  })

export default SReInicio