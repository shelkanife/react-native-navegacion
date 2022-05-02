import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

export const getMovementsList = async () => {
  console.log('FETCHING MOVEMENTS');
  try {
    const stringMovements = await AsyncStorage.getItem('movements');
    console.log(stringMovements);
    return stringMovements ? JSON.parse(stringMovements) : [];
  } catch (e) {
    alert(e);
  }
};

export const getBalances = movements => {
  let balance = 0.0,
    income = 0.0,
    expense = 0.0,
    saving = 0.0;

  movements.forEach(({type, amount}) => {
    amount = new Number(amount);

    switch (type) {
      case 'income':
        balance += amount;
        income += amount;
        break;
      case 'expense':
        balance -= amount;
        expense += amount;
        break;
      case 'saving':
        balance -= amount;
        saving += amount;
        break;
      default:
        console.log('GOT A WEIRD TYPE' + type);
        break;
    }
  });

  return {balance, income, expense, saving};
};

// Returns a movement hash map
export const mapMovementsToDates = movements => {
  let movementsMap = {};

  movements.forEach(movement => {
    if (movementsMap[movement.date]) {
      movementsMap[movement.date].push(movement);
    } else {
      movementsMap[movement.date] = [movement];
    }
  });

  return movementsMap;
};

export const getAverageBalance = (movementType = 'income', movements) => {
  const currentYear = new Date().getYear();
  const currentMonth = new Date().getMonth();
  let monthlyBalance = 0.0,
    annualBalance = 0.0;

  movements
    .filter(
      ({date, type}) =>
        new Date(date).getYear() == currentYear && type == movementType,
    )
    .forEach(({date, amount}) => {
      if (new Date(date).getMonth() == currentMonth) {
        monthlyBalance += amount;
      }
      annualBalance += amount;
    });

  return {monthlyBalance, annualBalance};
};

export const saveMovementList = async (movements) => {
  try{
    movements=JSON.stringify(movements)
    await AsyncStorage.setItem('movements',movements)
  }catch(e) { alert(e) }
}

export const addMovement = async(movement) =>{
  const movementsList = await getMovementsList('movements')
  movement.id = uuid.v4()
  movementsList.push(movement)
  try{
    await saveMovementList(movementsList)
  }catch(e){alert(e)}
}

export const updateMovement = async(updatedMovement) => {
  const movementsList = await getMovementsList('movements')
  const index = movementsList.findIndex(item => item.id === updatedMovement.id)
  movementsList[index] = updatedMovement
  await saveMovementList(movementsList)
}
