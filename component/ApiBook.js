import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-native';
import { UserContext } from '../App';

export default function ApiBook() {

    const [databook, setDataBook] = useState([]);
    const navigate = useNavigate();
    const { state } = useLocation();
    const id_book = state.id;
    const {dataUser, setDataUser} = useContext(UserContext);

    const getBook = async () => {
        try {

            const response = await fetch(`https://silly-rules-say-193-252-172-28.loca.lt/api/v1/books/${id_book}/borrowBook/${dataUser.id}`, {
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