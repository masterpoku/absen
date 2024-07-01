import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>E-Kaghe</Text>
        <Text style={styles.text}>Selamat datang di aplikasi kami!</Text>
      </View>
      <View style={styles.content}>
       
       
        <Image
          source={require('../assets/icon.png')}
          style={styles.logo}
          resizeMode="contain"
        />
         <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate('ScanQr', { origin: 'Sorogan' })}
        >
          <Text style={styles.buttonText}>Sorogan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate('ScanQr', { origin: 'Madrasah AL-Qura`an' })}
        >
          <Text style={styles.buttonText}>Madrasah AL Qur'an</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate('ScanQr', { origin: 'Lalaran' })}
        >
          <Text style={styles.buttonText}>Lalaran</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 200, // Tinggi header bisa disesuaikan sesuai kebutuhan
    backgroundColor: '#1abc9c', // Warna latar belakang header
    borderBottomLeftRadius: 40, // Setengah lingkaran pada kiri bawah
    borderBottomRightRadius: 40, // Setengah lingkaran pada kanan bawah
    justifyContent: 'center', // Ubah ke justifyContent: 'flex-end' untuk mengarah ke bawah, atau 'flex-start' untuk mengarah ke atas
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff', // Warna teks header
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start', // Ubah ke justifyContent: 'flex-start' untuk mengarah ke atas
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    color:'#ffffff'
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: '#e74c3c', // Warna latar belakang tombol
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff', // Warna teks tombol
  },
});

export default HomeScreen;
