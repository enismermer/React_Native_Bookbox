import React, { useState, useEffect } from "react";
import MapView from "react-native-maps/lib/MapView";
import { StyleSheet, View, Text } from "react-native";
import * as Location from "expo-location";
import { Marker } from "react-native-maps";

export default function MapsTest({idBox}) {
    const [data, setData] = useState(null);
    const [mapRegion, setMapRegion] = useState({
        latitude: 45.18209454984173, 
        longitude: 5.726817011545452,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    useEffect(() => {
            fetch(`https://8330-2a01-cb15-810f-3400-a5a0-93af-3bbd-e56e.ngrok-free.app/api/box/${idBox}`)
            .then((response) => response.json())
            .then((data) => {
            const coords = data?.geoLoc["1"].split(", ");
            console.log(coords[0]);
            const marker2 = {
                coordinate: {
                  latitude: parseFloat(coords[0]),
                  longitude: parseFloat(coords[1]),
                },
              }; 
            setData(marker2)});
        }, []);

        // return {
        //    const coordinate = {
        //        latitude: parseFloat(coords[0]),
        //        longitude: parseFloat(coords[1]),

        //    }
        //    const marker2 = {
        //     coordinate: {
        //       latitude: parseFloat(coords[0]),
        //       longitude: parseFloat(coords[1]),
        //     },
        //   };
        //   console.log(marker2);
        //    console.log(marker2.coordinate.latitude);
            
        //     title: item.street,
        //     description: `${item.zipcode} ${item.city}`,
        //     id: item.id,
        // };
 

    useEffect(() => {
        (async () => {
            let { status } =
                await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied");
                return;
            }

            let location = await Location.getCurrentPositionAsync({
                enableHighAccuracy: true,
            });
            setMapRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });
        })();
    }, []);

    return (
        <View style={styles.container}>
            <MapView style={styles.map} region={mapRegion}>
                   {data && 
                       <Marker
                          coordinate={data.coordinate}
                           title={data?.street}
                         description={data?.city}
                      /> 
                   }
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: "100%",
        height: "100%",
    },
});