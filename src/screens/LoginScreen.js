import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import TextField from '../components/TextField';
import Button from '~/components/Button';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: Dimensions.get('screen').height
  }
});

export default function LoginScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const login = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // props.navigation.navigate('App');
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <View style={{ margin: 30 }}>
        <Text style={{ fontSize: 45, fontWeight: 'bold' }}>Login</Text>
      </View>
      <TextField
        onChangeText={value => setEmail(value)}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
        textContentTypen="emailAddress"
      />
      <TextField
        onChangeText={value => setPassword(value)}
        value={password}
        placeholder="Password"
        textContentType="password"
        secureTextEntry={true}
      />
      <Button title="Log in" loading={loading} onPress={() => login()} />
    </View>
  );
}

LoginScreen.navigationOptions = {
  title: 'Login',
  header: null
};
