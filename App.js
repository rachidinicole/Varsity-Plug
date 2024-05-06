import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import firebase  from '@react-native-firebase/app';

import HomeScreen from './components/Home'; 
import LoginScreen from './components/Login'; 
import RegistrationPage from './components/Register'; 
import CartScreen from './components/Cart';
// Other imports...

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Other components...

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={RegistrationPage} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        {/* Other stack screens... */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

