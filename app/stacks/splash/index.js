/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import type { Node } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { navigate } from '../../services/NavigationService';
import { PATHS } from '../../const/paths';

const SplashScreen: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    setTimeout(_ => navigate(PATHS.AppStack), 2000)
  }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ActivityIndicator size={'large'} color="#6c3ef8" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default SplashScreen;
