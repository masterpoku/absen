import React, { useEffect } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Splash = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login'); // Mengganti stack navigasi agar tidak bisa kembali ke Splash
    }, 3000); // 3000 milliseconds = 3 detik

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient
      colors={['#1abc9c', '#16a085', '#138d75']}
      style={styles.container}
    >
        <Image
          source={require('../assets/icon.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      <Text style={styles.text}>Selamat Datang di E-Kaghe</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: '#ffffff', // White text color
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});

export default Splash;
