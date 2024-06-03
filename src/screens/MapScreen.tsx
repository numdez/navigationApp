import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function MapScreen() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -2.4995890220474273,
            longitude: -44.286612559746224,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: -2.4992270511248154, longitude: -44.285464286653074 }}
            title={"Marker Title"}
            description={"Marker Description"}
          />
        </MapView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });