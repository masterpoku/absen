import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight,Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    // Example: validate credentials, navigate to HomeScreen on success
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <LinearGradient
         colors={['#1abc9c', '#16a085', '#138d75']}
        style={styles.background}
      />
      <Image
          source={require('../assets/icon.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Password"
        />
        <TouchableHighlight
          style={styles.loginButton}
          underlayColor="#193441" // Highlight color when pressed
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
    backgroundColor: '#1abc9c', // Button background color
    borderRadius: 8,
    justifyContent: 'center', // Center align text vertically
    alignItems: 'center', // Center align text horizontally
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff', // Button text color
  },logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
});

export default LoginScreen;
