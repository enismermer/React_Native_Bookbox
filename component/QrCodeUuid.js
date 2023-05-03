import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Link, useNavigate } from 'react-router-native';

export default function QrCodeUuid() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };
    
    getBarCodeScannerPermissions();
  }, []);
  
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    navigate('/api', { state: { id: data}});
  };
  
  
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  
  // const Number = "63bc9769-d35c-4463-849d-4a197c37df58";
  
  return (
    <View style={styles.container}>
      <View style={styles.fondblanc}>
          <Text style={styles.title}>Identification UUID</Text>
      </View>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}

      <Text style={styles.red}>...Identification...</Text>
      
      <Link to="/accueil" style={styles.retour}>
        <Text>Retour</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  //   flex: 1,
  //   flexDirection: 'column',
  //   justifyContent: 'center',
        backgroundColor: '#FF76C8',
        height: "100%",
  },
  fondblanc: {
    padding: 30,
    backgroundColor: 'white',
  },
  title: {
      left: 50,
      fontWeight: 'bold',
      fontSize: 25,
  },
  absoluteFillObject: {
    height: "40%",
    width: "70%",
    left: "15%",
    top: "10%",
  },
  red: {
    color: 'red',
    fontWeight: 'bold',
    left: 100,
    top: 120,
    fontSize: 20,
  },
  retour: {
    top: 320,
    left: 160,
  },
});