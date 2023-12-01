import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from './screens/Home';
import AddNote from './screens/AddNote';
import { PATHS } from '../../const/paths';

const Stack = createStackNavigator();

const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={PATHS.Home}
      component={Home}
      options={{ title: '', headerShown: false }}
    />
    <Stack.Screen
      name={PATHS.AddNote}
      component={AddNote}
      options={{ title: '', headerShown: false }}
    />
  </Stack.Navigator>
);

export default AppStack;
