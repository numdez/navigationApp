import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function BusinessScreen({ navigation }) {
  const handleMap = () => {
    navigation.navigate('Mapp');
  };

const generateRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
    const vagasLivres = generateRandomNumber(0, 90);
    return (
      <View style={styles.container}>
        <Text>Vagas Livres: {vagasLivres}/90</Text>
        <Button title="Como Chegar" onPress={handleMap} />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
