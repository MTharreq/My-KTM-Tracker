import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/router/index';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
