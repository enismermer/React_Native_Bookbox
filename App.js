
import { StyleSheet, Text, View, Button } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Home from './pages/Home';
import React, { useState, useEffect, createContext } from 'react';
import Accueil from './pages/Accueil';
import Profil from './pages/Profil';
import Api from './component/Api';
import Apibox from './component/Apibox';
import ApiBook from './component/ApiBook';
import MapBox from './pages/MapBox';
import QrCodeUuid from './component/QrCodeUuid';
import QrCodeBook from './component/QrCodeBook';
import QrCodeBox from './component/QrCodeBox';
import BookBorrowed from './pages/BookBorrowed';
import { UserContext } from './userContext';
import MapsTest from './component/MapsTest';

export default function App() {

 const [dataUser, setDataUser] = useState([]);
 
  return (
    <UserContext.Provider value={{ dataUser, setDataUser }}>
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qrcodeuuid" element={<QrCodeUuid />} />
        <Route path="/api" element={<Api />} />
        <Route path="/apibox" element={<Apibox />} />
        <Route path="/apibook" element={<ApiBook />} />
        <Route path="/mapbox" element={<MapBox />} />
        <Route path="/accueil" element={<Accueil />} />
        {/* <Route path="/maps" element={<Maps />} /> */}
        <Route path="/maps" element={<MapsTest />} />
        <Route path="/qrcodebook" element={<QrCodeBook />} />
        <Route path="/qrcodebox" element={<QrCodeBox />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/bookborrowed" element={<BookBorrowed />} />
      </Routes>
    </NativeRouter>
    </UserContext.Provider>
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
