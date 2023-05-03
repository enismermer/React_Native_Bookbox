import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Link, useNavigate } from 'react-router-native';

export default function QrCodeBook() {
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
    //   alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      navigate('/apibook', { state: { id: data}});
    };
    
    
    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    
    const Title = "Voyage au bout de la nuit";
    
    return (
      <View style={styles.container}>
        <View style={styles.fondblanc}>
            <Text style={styles.title}>Emprunter un livre</Text>
        </View>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.absoluteFillObject}
        />
        {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
  
        <Text style={styles.red}>...Borrowing...</Text>
        
        <Link to="/mapbox" style={styles.retour}>
          <Text>Retour</Text>
        </Link>

        {/* <Text style={styles.uuid}>Monsieur { state.info.name }</Text> */}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
    //   flex: 1,
    //   flexDirection: 'column',
    //   justifyContent: 'center',
          backgroundColor: '#FFB21D',
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
      left: 120,
      top: 120,
      fontSize: 20,
    },
    retour: {
      top: 320,
      left: 160,
      fontSize: 10
    },
  });