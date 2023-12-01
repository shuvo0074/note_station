import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import GlobalStyles from '../../style';
import { navigate } from '../../services/NavigationService';
import { PATHS } from '../../const/paths';

export default function ListItem() {

  const { notesList } = useSelector(state => state.app);

  return (
    <>
      {notesList
        .map((item, index) => (
          <TouchableOpacity
            onPress={() => {
              navigate(PATHS.AddNote, { itemValue: item })
            }}
            style={styles.itemContainer}>
            <View style={styles.detailsCard}>
              <View key={index} style={styles.note}>
                <View style={styles.noteHeader}>
                  <Text style={styles.itemName}>{item.title}: </Text>
                  <Text style={styles.descTxt}>{item.description}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
    </>

  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'transparent',
    width: GlobalStyles.DEVICE_WIDTH,
    borderBottomWidth: 1,
    borderBottomColor: '#373d53',
    padding: GlobalStyles.PADDING,
    flexDirection: 'row',
  },
  note: {
    marginVertical: GlobalStyles.PADDING / 5,
  },
  noteHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemName: {
    fontSize: GlobalStyles.fs14,
    fontWeight: GlobalStyles.fw500,
    color: GlobalStyles.COLOR_LIGHTER,
    marginLeft: GlobalStyles.PADDING / 3,
  },
  descTxt: {
    fontSize: GlobalStyles.fs12,
    fontWeight: GlobalStyles.fw300,
    color: GlobalStyles.COLOR_GREY,
    marginLeft: GlobalStyles.PADDING / 3,
  },
  detailsCard: {
    width: GlobalStyles.DEVICE_WIDTH - 2 * GlobalStyles.PADDING,
  },
});
