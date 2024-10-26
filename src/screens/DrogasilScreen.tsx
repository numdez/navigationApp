import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const generateRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

const DrogasilScreen = () => {
    const vagasLivres = generateRandomNumber(0, 60);
    return (
      <View style={styles.container}>
        <Text>Vagas Livres: {vagasLivres}/60</Text>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DrogasilScreen;
