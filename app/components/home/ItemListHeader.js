import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import GlobalStyles from '../../style';

export default function ItemListHeader({onPressRight=()=>{}}) {
  return (
    <View style={styles.titleRow}>
      <View style={styles.headerPill}>
        <Text numberOfLines={3} style={styles.pillTxt}>
          Notes for you
        </Text>
      </View>
      <TouchableOpacity onPress={onPressRight}>
        <Text numberOfLines={3} style={styles.addTxt}>
          Add Notes
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#373d53',
    paddingBottom: GlobalStyles.PADDING / 2,
    marginTop: GlobalStyles.PADDING / 2,
    justifyContent: 'space-between',
    paddingHorizontal: GlobalStyles.PADDING,
  },
  addTxt: {
    fontSize: GlobalStyles.fs12,
    fontWeight: GlobalStyles.fw700,
    color: '#fff',
    textDecorationLine: 'underline',
  },
  headerPill: {
    backgroundColor: '#1c243d',
    padding: GlobalStyles.PADDING / 4,
    paddingHorizontal: GlobalStyles.PADDING / 2,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillTxt: {
    fontSize: GlobalStyles.fs18,
    fontWeight: '600',
    color: 'grey',
  },
});
