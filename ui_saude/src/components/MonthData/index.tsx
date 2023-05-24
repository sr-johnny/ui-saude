import React from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  value: number;
  plus: any;
  minus: any;
}


export function MonthData({ title, value, plus, minus, ...rest }: Props){
  return (
    <View 
      style={styles.container}  
    >
      <Text style={styles.title}>{title}</Text>
      <View style={styles.controls}>
       <TouchableOpacity onPress={minus} {...rest}>
         <View style={styles.updown}><Text style={styles.font}>-</Text></View>
       </TouchableOpacity>
       <View style={styles.value}><Text style={styles.font}>{value}</Text></View>
       <TouchableOpacity onPress={plus}>
         <View style={styles.updown}><Text style={styles.font}>+</Text></View>
       </TouchableOpacity>
      </View>
    </View>
  );
}