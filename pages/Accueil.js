import { Button, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Maps from './Maps';
import { Link, useLocation, useNavigate } from 'react-router-native';
import Profil from './MapBox';

export default function Accueil() {
  const PlaceholderImage = require('../assets/logo_book-removebg-preview.png');
  const navigation = useNavigate()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue</Text>
      <Text style={styles.orange}>Vous pouvez emprunter</Text>
      <Text style={styles.orange}>à tout moment</Text>
        <Image source={PlaceholderImage} style={styles.logo} />
        <Text style={styles.titlelogo}>BOOKFLUX</Text>
        <Link to="/qrcodeuuid">
          <Text style={styles.pink}>Démarrer</Text>
          {/* <Button title='Démarrer' /> */}
        </Link>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        top: 50,
    },
    title: {
        fontSize: 25,
        color: '#000100',
        fontWeight: 'bold',
    },
    orange: {
        fontSize: 20,
        color: '#FFB21D',
        fontWeight: 'bold',
        textAlign: 'center',
        top: 10,
    },
    logo: {
        height: 300,
        width: 300,
        top: 20,
    },
    titlelogo: {
        fontSize: 30,
        fontWeight: 'bold',
        bottom: 40
    },
    pink: {
      fontSize: 20,
      color: 'white',
      backgroundColor: '#FC1CA2',
      // borderRadius: 10,
      paddingLeft: 50,
      paddingRight: 50,
      paddingTop: 5,
      paddingBottom: 5,
    }
})