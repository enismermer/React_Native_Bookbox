import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-native';

export default function Apibox() {

    const [databox, setDataBox] = useState([]);
    const navigate = useNavigate();
    const { state } = useLocation();
    

    const getBox = async () => {
        try {
            const response = await fetch(`https://swift-snakes-eat-193-252-172-28.loca.lt/api/box/${state.id}`, {
                method: 'GET',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
              });
          const json = await response.json();
          console.log(json)
          if (response.status == 201) {
            alert("Box inexistant")
            navigate(-1)
          } else if (response.status == 200) {
            navigate('/mapbox', { state: { info: json}});
          }
          
          setDataBox(json);
        } catch (error) {
          console.error(error);
        }
      };

      useEffect(() => {
        getBox();
      }, []);
      console.log(databox);
  return (
    <View>
      {/* <Text>Apibox</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({})