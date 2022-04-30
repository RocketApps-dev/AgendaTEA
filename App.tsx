import React from 'react';

import { Routes } from './src/routes';
import { AppProviders } from './src/contexts';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <AppProviders>
        <Routes />
      </AppProviders>
    </NavigationContainer>
  );
};

export default App;
