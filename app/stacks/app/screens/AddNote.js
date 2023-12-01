/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
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
import { addNote, checkValidityForInput } from '../actions/commonActions';
import { assets } from '../../../assets';

const AddNote: () => Node = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setdescription] = useState('');

  const backgroundStyle = {
    backgroundColor: '#0c1955',
  };

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
          title="Add Note"
          disabled={!title.length}
          onPress={() => {
            dispatch(addNote({
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
  titleRequiredMark: {
    fontSize: 25,
    color: 'red',
  },
  bgImage: {
    height: GlobalStyles.DEVICE_HEIGHT,
  },
  flexRow: {
    flexDirection: 'row',
    width: GlobalStyles.DEVICE_WIDTH,
    paddingHorizontal: GlobalStyles.PADDING,
    justifyContent: 'space-between',
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
  bottomText: {
    color: GlobalStyles.COLOR_SUBMIT,
    marginTop: GlobalStyles.PADDING,
    textDecorationLine: 'underline',
    textDecorationColor: GlobalStyles.COLOR_SUBMIT,
  },
  titleTxt: {
    fontSize: GlobalStyles.fs20,
    color: GlobalStyles.COLOR_GREY,
  },
  dropdown: {
    height: 50,
    borderColor: '#3267F0',
    borderWidth: 0.5,
    borderRadius: 12,
    paddingHorizontal: 8,
    width: GlobalStyles.DEVICE_WIDTH / 2 - 40,
    height: 62,
    marginTop: 10,
  },
  selectedTextStyle: {
    fontSize: GlobalStyles.fs16,
    color: GlobalStyles.COLOR_GREY,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});

export default AddNote;
