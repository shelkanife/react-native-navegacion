import React from 'react'
import {View,Text,Pressable,StyleSheet,Dimensions} from 'react-native'
import {styles} from '../screens/presupuestos/styles';
import SquareIcon from './SquareIcon';

const ReminderCard = ({concept, reminderData, navigation}) => {
    return (
      <View style={localeStyles.cardContainer}>
        <Pressable
          onPress={() => navigation.navigate('ReminderDetails',{reminder: reminderData})}
          style={({pressed}) => ({
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          })}>
          <View style={localeStyles.details}>
            <SquareIcon name="alarm" color='white' backgroundColor='#1E63CB' />
            <Text style={{...styles.presupuestoName,marginHorizontal: Dimensions.get('window').width * 0.05}}>{concept}</Text>
          </View>
        </Pressable>
      </View>
    );
  };

const localeStyles = StyleSheet.create({
cardContainer:{
    height:Dimensions.get('window').width * 0.17,
    borderBottomColor:"#737373",
    borderBottomWidth:1,
    marginBottom: 15,
},
details:{
    display:"flex",
    flexDirection:'row',
    flexWrap:"wrap",
    alignItems:"center",
},
})
  
export default ReminderCard