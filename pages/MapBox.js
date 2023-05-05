import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, useLocation } from 'react-router-native';
import MapsTest from '../component/MapsTest';


export default function MapBox() {
const { state } = useLocation();
const PlaceholderImage = require('../assets/logo_book-removebg-preview.png');

console.log("toto");

// alert(state.info.id)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CARTE</Text>
      {/* <Text style={styles.uuid}>Monsieur { state.info.name }</Text> */}
      {/* <Text>Id {state.info.id}</Text>
      <Text>Profil {state.info.name}</Text>
      <Text>Mail {state.info.mail}</Text>
      <Text>UUID {state.info.uuid}</Text> */}
      <View style={styles.map}>
        <MapsTest idBox={state.info.id}/>
      </View>
      <View style={styles.box}>
        <Text>Box :
          <Link to="/qrcodebook">
              <Text> {state.info.street} </Text>
              {/* <Text> {state.info.zipcode} </Text>
              <Text> {state.info.city} </Text> */}
          </Link>
        </Text>
      </View>
      <View style={styles.logoBook}>
          <Image source={PlaceholderImage} style={styles.logo}/>
        <Link to="/qrcodeuuid" style={styles.titlelogo}>
          <Text style={styles.gras}>BOOKFLUX</Text>
        </Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 0,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
      fontSize: 30,
      textAlign: 'center',
      top: 25,
      fontWeight: 'bold',
    },
    map: {
      justifyContent: "center",
      width: '90%',
      height: '52%',
      top: 45,
    },
    box: {
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      top: 50,
    },

    logoBook: {
      flex: 0,
      alignItems: "center",
      justifyContent: "center",
    },

    logo: {
      width: 150,
      height: 150,
      top: 90,
      alignItems: "center",
      justifyContent: "center",
    },
    titlelogo: {
      alignItems: "center",
      justifyContent: "center",
      top: 60,
    },
    gras: {
      fontWeight: 'bold',
    },
    uuid: {
      top: 30,
      fontWeight: 'bold',
    }
});