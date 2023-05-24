import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import { Routes } from './src/routes/routes';
import { 
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular, 
  Roboto_500Medium,
  Roboto_700Bold, 
  useFonts } 
from '@expo-google-fonts/roboto';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer> 
        <StatusBar 
          backgroundColor="transparent"
          translucent
        />
        <Routes />
    </NavigationContainer>
  );
}


