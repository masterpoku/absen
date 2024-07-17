import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#1abc9c', '#16a085']}
        style={styles.header}
      >
        <Text style={styles.headerText}>E-Kaghe</Text>
        <Text style={styles.subHeaderText}>Selamat datang di aplikasi kami!</Text>
      </LinearGradient>
      <View style={styles.content}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.welcomeMessage}>Nikmati kemudahan dalam mengelola berbagai hal dengan aplikasi kami. Selamat menggunakan!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    padding: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  subHeaderText: {
    fontSize: 18,
    color: '#ffffff',
    marginTop: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 10,
  },
  welcomeMessage: {
    fontSize: 18,
    color: '#333333',
    textAlign: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
    lineHeight: 24,
  },
});

export default HomeScreen;
