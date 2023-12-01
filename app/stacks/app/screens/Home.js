/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';

import ItemListHeader from '../../../components/home/ItemListHeader';
import GlobalStyles from '../../../style';
import { PATHS } from '../../../const/paths';
import ListItem from '../../../components/home/ListItem';

const { height } = Dimensions.get('screen');

const Result: () => Node = ({ navigation }) => {

  const backgroundStyle = {
    backgroundColor: GlobalStyles.COLOR_HOME,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'dark-content'} />
      <ItemListHeader
        onPressRight={() => {
          navigation.navigate(PATHS.AddNote);
        }}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        contentContainerStyle={styles.scrollContainer}>
        <ListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    minHeight: height,
  },
});

export default Result;
