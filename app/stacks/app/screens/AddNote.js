/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import type { Node } from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  useColorScheme,
  ImageBackground,
} from 'react-native';

import { useDispatch } from 'react-redux';
import GlobalStyles from '../../../style';
import CustomTextInput from '../../../components/common/CustomTextInput';
import SubmitButton from '../../../components/common/SubmitButton';
import { PATHS } from '../../../const/paths';
import { addNote, checkValidityForInput, editNote } from '../actions/commonActions';
import { assets } from '../../../assets';

const AddNote: () => Node = ({ navigation, route }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setdescription] = useState('');

  const backgroundStyle = {
    backgroundColor: '#0c1955',
  };

  useEffect(_ => {
    if (route.params) {
      setTitle(route.params.itemValue.title)
      setdescription(route.params.itemValue.description)
    }
  }, [route.params])


  return (
    <View style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ImageBackground
        source={assets.home.screenBg}
        imageStyle={styles.bgImage}
        style={styles.bgContainer}>
        <CustomTextInput
          value={title}
          setValue={txt => setTitle(txt)}
          checkValidity={checkValidityForInput}
          isRequired
          autoFocus
          customStyle={styles.textInputStyle}
          title="Name"
          placeholder="Name"
        />
        <CustomTextInput
          value={description}
          setValue={txt => setdescription(txt)}
          checkValidity={checkValidityForInput}
          customStyle={styles.textInputStyle}
          title="Content"
          placeholder="Content"
          isRequired
        />

        <SubmitButton
          title={
            route.params ?
              "Edit Note"
              : "Add a Note"
          }
          disabled={!title.length}
          onPress={() => {
            if (route.params) {
              dispatch(editNote({
                title, description, id: route.params.itemValue.id
              }));
            }
            else dispatch(addNote({
              title, description
            }));
            navigation.navigate(PATHS.Home);
          }}
        />
      </ImageBackground >
    </View >
  );
};

const styles = StyleSheet.create({
  bgImage: {
    height: GlobalStyles.DEVICE_HEIGHT,
  },
  bgContainer: {
    paddingHorizontal: GlobalStyles.PADDING,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: GlobalStyles.DEVICE_HEIGHT / 10,
  },
  textInputStyle: {
    marginBottom: GlobalStyles.PADDING,
  },
});

export default AddNote;
