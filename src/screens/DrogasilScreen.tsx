import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function DrogasilScreen({ navigation }) {
  const handleMap = () => {
    navigation.navigate('Map');
  };

const generateRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

    const vagasLivres = generateRandomNumber(0, 60);
    return (
      <View style={styles.container}>
        <Text>Vagas Livres: {vagasLivres}/60</Text>
        <Button title="Como Chegar" onPress={handleMap} />
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

