import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useRoute } from '@react-navigation/native';
import { Card, Button, Paragraph, Title, IconButton } from 'react-native-paper';

const ScanQRScreen = () => {
  const route = useRoute();
  const origin = route.params?.origin ?? 'Unknown';

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setData(data);
    setModalVisible(true);
  };

  const handleYesPress = () => {
    setScanned(false);
    setModalVisible(false);
  };

  const handleNoPress = () => {
    setModalVisible(false);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <Text style={styles.text}>Barcode untuk {origin}</Text>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <Card style={styles.card}>
            <Card.Content>
              <Title>Scanned Data</Title>
              <Paragraph>Data: {data}</Paragraph>
              <Paragraph>Do you want to scan again?</Paragraph>
            </Card.Content>
            <Card.Actions style={styles.actions}>
              <Button onPress={handleNoPress} mode="contained" style={styles.buttonNo}>
                No
              </Button>
              <Button onPress={handleYesPress} mode="contained" style={styles.buttonYes}>
                Yes
              </Button>
            </Card.Actions>
          </Card>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    margin: 10,
    color: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  card: {
    width: 350,
    borderRadius: 10,
    padding: 20,
  },
  actions: {
    justifyContent: 'space-between',
  },
  buttonNo: {
    backgroundColor: '#f44336', // Red color
  },
  buttonYes: {
    backgroundColor: '#4caf50', // Green color
  },
});

export default ScanQRScreen;
