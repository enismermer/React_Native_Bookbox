import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-native';

export default function ApiBook() {

    const [databook, setDataBook] = useState([]);
    const navigate = useNavigate();
    const { state } = useLocation();
    const id_book = state.id;

    const getBook = async () => {
        try {
            const response = await fetch(`https://swift-snakes-eat-193-252-172-28.loca.lt/api/v1/books/${id_book}/borrowBook`, {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
              });
          const json = await response.json();
          console.log(json)

            navigate('/bookborrowed', { state: { info: json, idbook: id_book}});
      
          
          setDataBook(json);
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