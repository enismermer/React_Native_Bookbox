import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-native';
import { UserContext } from '../App';

export default function ApiBook() {

    const [databook, setDataBook] = useState([]);
    const navigate = useNavigate();
    const { state } = useLocation();
    const id_book = state.id;
    // const {dataUser, setDataUser} = useContext(UserContext);

    const getBook = async () => {
        try {

            const response = await fetch(`https://8330-2a01-cb15-810f-3400-a5a0-93af-3bbd-e56e.ngrok-free.app/api/v1/books/${id_book}/borrowBook/2`, {
                method: 'GET',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
              });
          const json = await response.json();
          console.log(json)
            navigate('/bookborrowed', { state: { info: json, idbook: id_book}});          
        } catch (error) {
          console.error(error);
        }
      };

      useEffect(() => {
        getBook();
      }, []);

  return (
    <View>
      {/* <Text>Apibox</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({})