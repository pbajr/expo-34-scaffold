import React, { Component } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import { DEFAULT_COLOR } from "../constants/Theme";

const styles = StyleSheet.create({
  button: {
    backgroundColor: DEFAULT_COLOR,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    flexDirection: "row",
    justifyContent: "center"
  },
  title: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
    marginRight: 10
  }
});

export default function TextField(
  props = {
    title: "",
    loading: false
  }
) {
  const renderLoading = () => {
    return props.loading ? <ActivityIndicator size="small" color="#fff" /> : null;
  };

  const renderStyle = () => {
    return props.loading ? {
      ...styles.button,
      opacity: 0.5
    } : styles.button;
  }

  return (
    <TouchableOpacity style={renderStyle()} {...props} disabled={props.loading}
      
    >
      <Text style={styles.title}>{props.title}</Text>
      {renderLoading()}
    </TouchableOpacity>
  );
}
