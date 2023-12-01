import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AppStack from '../stacks/app';
import SplashScreen from '../stacks/splash';
import { PATHS } from '../const/paths';

const Stack = createStackNavigator();

const RootStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Splash"
      component={SplashScreen}
      options={{ title: '', headerShown: false }}
    />
    <Stack.Screen
      name={PATHS.AppStack}
      component={AppStack}
      options={{ title: '', headerShown: false }}
    />
  </Stack.Navigator>
);

export default RootStack;
