import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { useLocation } from 'react-router';
import { Link, useNavigate } from 'react-router-native';
import { UserContext } from '../userContext';


export default function Profil() {
  const {dataUser, setDataUser} = useContext(UserContext);
  console.log(dataUser.id);
    const navigate = useNavigate()
    const scanBox = () => {
        navigate("/qrcodebox")
    }
    
    const { state } = useLocation();

  return (
    <View style={styles.container}>
      <Text style={styles.uuid}>Bonjour {state.info.name} </Text>
      <Image style={styles.avatar} source={{uri:`https://bumpy-rabbits-behave-91-163-175-151.loca.lt/uploads/${state.info.avatar}`}}/>
      <Button title="Localiser une box" onPress={scanBox} style={styles.button}/>   
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        top: 40,
    },
    uuid: {
        fontSize: 30, 
    },
    avatar: {
      width: '70%',
      height: '70%',
    },
    button: {
        backgroundColor: 'blue',
        top: 50
    }
})