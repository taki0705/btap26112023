import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import ScanScreen from './ScanScreen';
import Cart from './Cart';
import CheckOut from './CheckOut';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ScanScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ScanScreen" component={ScanScreen} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="CheckOut" component={CheckOut} />
      </Stack.Navigator>
    </NavigationContainer>  
  );
};

export default App;
