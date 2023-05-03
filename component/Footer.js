import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'react-router-native'

export default function Footer() {
  return (
    <View>
      <Link to="/">
        <Text>Home</Text>
      </Link>
      <Link to="/book">
        <Text>Book</Text>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({})