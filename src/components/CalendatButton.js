import React from 'react'
import { Button,Icon } from 'native-base';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import {colors} from '../styles/global'

const CalendarButton = ({style,onChangeFunction,date}) =>{
    const showMode = currentMode => {
        DateTimePickerAndroid.open({
          value: date,
          onChange:onChangeFunction,
          mode: currentMode,
          is24Hour: true,
        });
      };
    const showDatepicker = () => {
        showMode('date');
    };

    return(
        <Button
        onPress={showDatepicker}
        style={{backgroundColor:colors.main, alignSelf: 'center'}}>
            <Icon name="calendar"></Icon>
        </Button>
    )
}
export default CalendarButton