import React, { Component } from 'react';
import { TextInput as BaseTextInput, StyleSheet } from 'react-native';
import theme from '~/constants/Theme';

// for more shadow adjustment : https://ethercreative.github.io/react-native-shadow-generator/
const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 0
  },
  shadowOpacity: 0.23,
  shadowRadius: 10,
  elevation: 4
};

const styles = StyleSheet.create({
  // textInput: {
  //   borderColor: 'gray',
  //   borderWidth: 1,
  //   padding: theme.ELEMENT_PADDING,
  //   margin: theme.ELEMENT_MARGIN,
  //   borderRadius: theme.BORDER_RADIUS,
  //   fontSize: theme.FONT_SIZE
  // },
  textInput: {
    ...shadow,
    backgroundColor: '#fff',
    padding: theme.ELEMENT_PADDING,
    margin: theme.ELEMENT_MARGIN,
    borderRadius: theme.BORDER_RADIUS,
    fontSize: theme.FONT_SIZE,
    color: theme.COLOR_TEXT_PRIMARY,
    marginHorizontal: 30
  }
});

export default function TextField(props) {
  return (
    <BaseTextInput
      style={styles.textInput}
      underlineColorAndroid="transparent"
      autoCapitalize="none"
      {...props}
    />
  );
}
