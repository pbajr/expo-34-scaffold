import React, { Component } from "react";
import { TextInput as BaseTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textInput: {
    height: 45,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    fontSize: 15
  }
});

export default function TextField(props) {
  return <BaseTextInput style={styles.textInput} {...props} />;
}
