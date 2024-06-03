import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Business Center" onPress={() => navigation.navigate('Business')} />
      <View style={styles.buttonSpacer} />
      <Button title="Drogasil" onPress={() => navigation.navigate('Drogasil')} />
      <View style={styles.buttonSpacer} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSpacer: {
    height: 10,
  },
});

export default HomeScreen;
