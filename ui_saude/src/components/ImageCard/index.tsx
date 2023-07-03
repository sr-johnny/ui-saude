import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/themes';

export function ImageCard() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(255, 255, 255, 1)', 'rgba(24, 4, 109, 1)']}
        style={styles.gradient}
      >
        <ImageBackground
          source={require('../../assets/background.jpg')}
          style={styles.image_background}
          borderRadius={10}
        >
        </ImageBackground>
        <Text style={styles.title}>
        Informação{'\n'}relevante
      </Text>
      </LinearGradient>
    </View>
  );
}