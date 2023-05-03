import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Home from './pages/Home';
import React, { useState, useEffect } from 'react';
import Accueil from './pages/Accueil';
import Profil from './pages/Profil';
import Api from './component/Api';
import Apibox from './component/Apibox';
import ApiBook from './component/ApiBook';
import Maps from './pages/Maps';
import MapBox from './pages/MapBox';
import QrCodeUuid from './component/QrCodeUuid';
import QrCodeBook from './component/QrCodeBook';
import QrCodeBox from './component/QrCodeBox';
import BookBorrowed from './pages/BookBorrowed';

export default function App() {

  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qrcodeuuid" element={<QrCodeUuid />} />
        <Route path="/api" element={<Api />} />
        <Route path="/apibox" element={<Apibox />} />
        <Route path="/apibook" element={<ApiBook />} />
        <Route path="/mapbox" element={<MapBox />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/qrcodebook" element={<QrCodeBook />} />
        <Route path="/qrcodebox" element={<QrCodeBox />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/bookborrowed" element={<BookBorrowed />} />
      </Routes>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
