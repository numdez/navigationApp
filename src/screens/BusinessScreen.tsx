import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const generateRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

const BusinessScreen = () => {
    const vagasLivres = generateRandomNumber(0, 90);
    return (
      <View style={styles.container}>
        <Text>Vagas Livres: {vagasLivres}/90</Text>
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

export default BusinessScreen;
