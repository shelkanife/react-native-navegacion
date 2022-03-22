/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SignNavegator from './SignScreens/SingIn';


const App = () => {
  return(
    <NavigationContainer screenOptions={{}}>
      <SignNavegator />
    </NavigationContainer>
  )
}

export default App;