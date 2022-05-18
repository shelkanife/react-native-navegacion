import React,{useState,useEffect} from 'react'
import {View,ScrollView,Text} from 'react-native'
import ActionButton from 'react-native-action-button';
import ReminderCard from '../../components/ReminderCard';
import PushNotification from 'react-native-push-notification'
import { getRemindersList } from '../../utils/reminders';
import { useIsFocused } from '@react-navigation/native';

const ReInicio = ({navigation}) => {
    const [reminders,setReminders] = useState([])
    const isFocused = useIsFocused()
    
    useEffect(
        () => {
            (async() => {
                let reminders = await getRemindersList();
                console.log(reminders)
                setReminders(reminders);
            })
            ()
            
            createChannels()
        },[isFocused])
        const createChannels = () => {
            PushNotification.createChannel(
                {
                  channelId: "reminders", 
                  channelName: "notifications", 
                },
                (created) => console.log("createChannel returned",created) 
              );
        }
    return(
        <View style={{flex: 1, paddingHorizontal: 5}}>
            <ScrollView contentContainerStyle={
                reminders.length
                ? {flex:1, paddingTop: 20, paddingHorizontal: 20}
                : {flex:1,justifyContent:'center',alignItems:'center'}}>
                    {
                        reminders.length
                        ?( reminders.map(reminder => 
                            <ReminderCard
                            key={reminder.id}
                            concept={reminder.concept}
                            reminderData={reminder}
                            navigation={navigation}
                            />
                        )
                        ):(
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                                Aún sin recordatorios
                            </Text>
                        )
                    }
            </ScrollView>

            <ActionButton buttonColor='#1E63CB'
            onPress={() => navigation.navigate('RegisterReminder')}/>
        </View>
    )
}

export default ReInicio