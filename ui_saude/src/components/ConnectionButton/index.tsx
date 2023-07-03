import React, { useEffect, useState } from 'react';
import { TouchableOpacity, TouchableOpacityProps, View, Text } from 'react-native';
import BluetoothStateManager from 'react-native-bluetooth-state-manager';

import { styles } from './styles';
import { theme } from '../../global/themes';

type Props = TouchableOpacityProps & {
  type: 'bluetooth' | 'wifi';
}

export function ConnectionButton({ type, ...rest }: Props) {
  const [isConnected, setIsConnected] = useState(false);

  function toggleStatus() {
    if (type == 'bluetooth') {
      setIsConnected(!isConnected);
      return isConnected;
    }
  }

  return (
    <TouchableOpacity
      {...rest}
      onPress={() => toggleStatus()}
    >
      <View style={{
        ...styles.container,
        ...{
          width: (type == 'bluetooth') ? 185 : 117
        }
      }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.buttonlabel}>{type} </Text>
          <Text style={styles.statuslabel}>{(isConnected) ? 'on' : 'off'}</Text>
        </View>
        <View
          style={{
            ...styles.status,
            ...{
              backgroundColor: (type == 'bluetooth') ? theme.colors.bluetooth : theme.colors.wifi,
              opacity: (status) ? 1 : 0.15,
            }
          }} />
      </View>
    </TouchableOpacity>
  );
}