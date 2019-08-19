import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import theme from '../constants/Theme';

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.COLOR_PRIMARY,
    borderRadius: theme.BORDER_RADIUS,
    padding: theme.ELEMENT_PADDING,
    margin: theme.ELEMENT_MARGIN,
    alignSelf: 'center',
    paddingHorizontal: 40,
    flexDirection: 'row'
  },
  title: {
    fontSize: theme.FONT_SIZE,
    color: theme.BUTTON_TITLE_COLOR,
    textAlign: 'center'
  },
  inactive: {
    opacity: 0.5
  },
  loading: {
    marginRight: 10
  }
});

export default function TextField(
  props = {
    title: '',
    loading: false
  }
) {
  const renderLoading = () => {
    return props.loading ? (
      <ActivityIndicator style={styles.loading} size="small" color="#fff" />
    ) : null;
  };

  const renderStyle = () => {
    return props.loading
      ? StyleSheet.flatten([styles.button, styles.inactive])
      : styles.button;
  };

  return (
    <TouchableOpacity style={renderStyle()} {...props} disabled={props.loading}>
      {renderLoading()}
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
}
