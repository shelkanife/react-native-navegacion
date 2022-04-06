/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SignNavegator from './src/Screens/Sign/SingIn';


const App = () => {
  return(
    <NavigationContainer>
      <SignNavegator />
    </NavigationContainer>
  )
}

export default App;