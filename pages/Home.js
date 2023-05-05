import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Main from '../component/Main'
import QrCode from '../component/QrCodeUuid'
import { Link, useNavigate } from 'react-router-native'
import Api from '../component/Api'
import Accueil from './Accueil'

export default function Home() {
  const navigate = useNavigate();
  const handleBarCodeScanned = ({ type, data }) => {
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    navigate('/api', { state: { id: "63bc9769-d35c-4463-849d-4a197c37df58"}});
    navigate('/api', { state: { id: "128 bis Bd Joliot Curie"}});
  };
  return (
    <View>
      {/* <Header />
      <Main /> */}
      {/* <QrCode />
      <Link to="/qrcode">
        <Text>QrCode</Text>
      </Link>
      <Button title='Cliquez moi' onPress={handleBarCodeScanned}/> */}
      {/* <Footer /> */}
      <Accueil />
    </View>
  )
}

const styles = StyleSheet.create({})