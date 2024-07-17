import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = ({ navigation }) => {
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const url = `https://eb78-36-71-165-7.ngrok-free.app/absensi/api/api.php?id=${password}&type=login`;

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'sukses') { // Periksa respons 'sukses'
          navigation.navigate('Home');
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#1abc9c', '#16a085', '#138d75']} style={styles.background} />
      <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain" />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Password"
        />
        <TouchableHighlight
          style={styles.loginButton}
          underlayColor="#193441"
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  loginButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#1abc9c',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});

export default LoginScreen;
