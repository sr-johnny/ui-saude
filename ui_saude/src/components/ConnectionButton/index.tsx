import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, View, Text } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/themes';

type Props = TouchableOpacityProps & {
  type: 'bluetooth' | 'wifi';
  status: boolean;
}

export function ConnectionButton({ type, status, ...rest }: Props) {

  return (
    <TouchableOpacity
    {...rest}
    >
      <View style={{
        ...styles.container, 
        ...{ width: (type == 'bluetooth') ? 185 : 117}}}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.buttonlabel}>{type} </Text>
          <Text style={styles.statuslabel}>{(status == true) ? 'on' : 'off'}</Text>
        </View>
        <View 
          style={{
            ...styles.status, 
            ...{ backgroundColor: (type == 'bluetooth') ? theme.colors.bluetooth : theme.colors.wifi}
        }}/>
      </View>
    </TouchableOpacity>
  );
}