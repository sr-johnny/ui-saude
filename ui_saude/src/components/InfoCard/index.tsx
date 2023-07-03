import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function InfoCard(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        O <Text style={styles.text_bold}>bruxismo do sono</Text> é comumente relacionado à ansiedade. Esta patologia pode danificar o bom funcionamento da arcada dentária.
      </Text>
    </View>
  );
}