import React, { useEffect } from "react";
import {View, StyleSheet, Text, ActivityIndicator } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});

export default function AuthLoadingSreen(props) {
  const initialize = () => {
    // props.navigation.navigate('App');
    setTimeout(() => {
      props.navigation.navigate("Login");
    }, 2000);
  };

  useEffect(() => {
    initialize();
  });

  return (
    <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
    </View>
  );
}

AuthLoadingSreen.navigationOptions = {
  title: "AuthLoadingScreen"
};
