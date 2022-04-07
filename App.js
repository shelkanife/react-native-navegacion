import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import SignNavigator from './src/screens/sign/SingIn';

const App = () => {
  return (
    <NavigationContainer>
      <SignNavigator />
    </NavigationContainer>
  );
};

export default App;
