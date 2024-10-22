import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './prop/MainStackNavigator.js';
import styles from './prop/style.js'; 

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;



