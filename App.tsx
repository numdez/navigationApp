import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './src/screens/HomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import LoginScreen from './src/screens/LoginScreen';
import BusinessScreen from './src/screens/BusinessScreen';
import DrogasilScreen from './src/screens/DrogasilScreen';
import MapScreen from './src/screens/MapScreen';
import MappScreen from './src/screens/MappScreen';

const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Business" component={BusinessScreen} options={{ title: 'Estacionamento Business Center' }} />
        <Stack.Screen name="Drogasil" component={DrogasilScreen} options={{ title: 'Estacionamento Drogasil' }} />
        <Stack.Screen name="Map" component={MapScreen} options={{ title: 'Mapa Estacionamento'}} />
        <Stack.Screen name="Mapp" component={MappScreen} options={{ title: 'Mapa Estacionamento 2'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
