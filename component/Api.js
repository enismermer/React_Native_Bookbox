import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-native';

export default function Api(props) {
    console.log(props.info);
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const { state } = useLocation();
    console.log(state);
    const getUser = async () => {
        try {
            const response = await fetch('https://swift-snakes-eat-193-252-172-28.loca.lt/api/v1/user/login', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  uuid: state.id,
                }),
              });
          const json = await response.json();
          console.log(json)
          if (response.status == 201) {
            alert("Utilisateur inexistant")
            navigate(-1)
          } else if (response.status == 200) {
            navigate('/profil', { state: { info: json}});
          }
          setData(json);
        } catch (error) {
          console.error(error);
        }
      };
      
      useEffect(() => {
          getUser();
        }, []);
        console.log(data);
  return null;
}

const styles = StyleSheet.create({})