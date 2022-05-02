import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

export const getBudgetsList = async () => {
  try {
    const strBudgets = await AsyncStorage.getItem('budgets');
    return strBudgets ? JSON.parse(strBudgets) : [];
  } catch (e) { alert(e); }
};

export const saveBudgetList = async (budgets) => {
  try{
    budgets=JSON.stringify(budgets)
    await AsyncStorage.setItem('budgets',budgets)
  }catch(e) { alert(e) }
}

export const addBudget = async(budget) =>{
  const budgetsList = await getBudgetsList('budgets')
  budget.id = uuid.v4()
  budgetsList.push(budget)
  try{
    await saveBudgetList(budgetsList)
  }catch(e){alert(e)}
}

export const updateBudget = async(updatedBudget) => {
  const budgetsList = await getBudgetsList('budgets')
  const index = budgetsList.findIndex(item => item.id === updatedBudget.id)
  budgetsList[index] = updatedBudget
  await saveBudgetList(budgetsList)
}

// Returns a movement hash map
export const mapBudgetsToDates = budgets => {
  let budgetsMap = {};

  budgets.forEach(budget => {
    if (budgetsMap[budget.date]) {
      budgetsMap[budget.date].push(budget);
    } else {
      budgetsMap[budget.date] = [budget];
    }
  });

  return budgetsMap;
};