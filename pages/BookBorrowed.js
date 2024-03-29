import { Alert, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-native';
import { UserContext } from '../App';

export default function BookBorrowed() {
const [data, setData] = useState(null);
const { state } = useLocation();
const idbook = state.idbook
// const {dataUser, setDataUser} = useContext(UserContext);

useEffect(() => {
    fetch(`https://8330-2a01-cb15-810f-3400-a5a0-93af-3bbd-e56e.ngrok-free.app/api/book/${idbook}`)
    .then((response) => response.json())
    .then((data) => setData(data));

}, []);

  return (
  <SafeAreaView style={{flex: 1}}>
    <View style={styles.container}>
      <View style={styles.fondblanc}>
        <Text style={styles.title}>{state.info.Message}</Text>
      </View>
      <View style={styles.red}> 
        <Image style={styles.cover} source={{uri:`https://8330-2a01-cb15-810f-3400-a5a0-93af-3bbd-e56e.ngrok-free.app/uploads/${data?.cover}`}}/>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}> { data?.title } </Text>
        <Text style={{fontSize: 20}}> { data?.author } </Text>

        <Link to="/">
            <Text style={{top: 50, color: 'white'}}>Retour à l'accueil</Text>
        </Link>
    </View>

    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#1CB004',
    },
    title: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 25,
    },
    fondblanc: {
      padding: 30,
      backgroundColor: 'white',
      width: '100%'
  },
  cover: {
    width: "70%",
    height: "70%",
  },
  red: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});