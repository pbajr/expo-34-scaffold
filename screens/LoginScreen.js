import React, { useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import TextField from "../components/TextField";
import Button from "../components/Button";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});

export default function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const login = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
      props.navigation.navigate('App');
    }, 3000);
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={{ padding: 15, fontWeight: "bold", fontSize: 30 }}>
        Login
      </Text>
      <TextField onChangeText={value => setEmail(value)} value={email} />
      <Button 
        title="Log in"
        loading={loading}
        onPress={() => login()}
      />
    </ScrollView>
  );
}

LoginScreen.navigationOptions = {
  title: "Login",
  header: null
};
