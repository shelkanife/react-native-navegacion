import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

export const getRemindersList = async () => {
  console.log('FETCHING REMINDERS');
  try {
    const stringReminders = await AsyncStorage.getItem('Reminders');
    console.log(stringReminders);
    return stringReminders ? JSON.parse(stringReminders) : [];
  } catch (e) {
    alert(e);
  }
};

export const saveReminderList = async (Reminders) => {
  try{
    Reminders=JSON.stringify(Reminders)
    await AsyncStorage.setItem('Reminders',Reminders)
  }catch(e) { alert(e) }
}

export const deleteReminder = async (id) => {
  try{
    let reminders = await getRemindersList()
    let remindersFiltereds = reminders.filter(item => item.id !== id)
    await saveReminderList(remindersFiltereds)
  }catch(e){alert(e)}
}

export const addReminder = async(Reminder) =>{
  const RemindersList = await getRemindersList('Reminders')
  RemindersList.push(Reminder)
  try{
    await saveReminderList(RemindersList)
  }catch(e){alert(e)}
}

export const updateReminder = async(updatedReminder) => {
  const RemindersList = await getRemindersList('Reminders')
  const index = RemindersList.findIndex(item => item.id === updatedReminder.id)
  RemindersList[index] = updatedReminder
  await saveReminderList(RemindersList)
}
