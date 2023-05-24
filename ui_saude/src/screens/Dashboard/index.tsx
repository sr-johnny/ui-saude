import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { theme } from '../../global/themes';

import { MonthData } from '../../components/MonthData';
import { ConnectionButton } from '../../components/ConnectionButton';
import { Chart } from '../../components/Chart';

export function Dashboard() {
  const navigation = useNavigation();

  const [valueJanuary, setValueJanuary] = useState(10);
  const [valueFebruary, setValueFebruary] = useState(1);
  const [valueMarch, setValueMarch] = useState(8);
  const [valueApril, setValueApril] = useState(9);

  function incrementValueMonth(setValueMonth: any, valueMonth: number) {
    setValueMonth(valueMonth + 1);
    return (valueMonth);
  }

  function decrementValueMonth(setValueMonth: any, valueMonth: number) {
    if (valueMonth > 0) {
      setValueMonth(valueMonth - 1);
      return (valueMonth);
    } else {
      return (valueMonth);
    }
  }

  return (
    <LinearGradient
      colors={[theme.colors.primary, theme.colors.secondary]}
      locations={[0.2, 0.7]}
      end={[0.8, 0.9]}
      style={styles.container}
    >

      <Text style={styles.title}>Olá, <Text style={styles.title_name}>Camila</Text>!</Text>
      <Text style={styles.subtitle}>Temos muito a fazer hoje.</Text>

      <View style={styles.buttons}>
        <ConnectionButton
          type='bluetooth'
          status={true}
        />
        <ConnectionButton
          type='wifi'
          status={true}
        />
      </View>

      <Text style={styles.label}>estatísticas</Text>
      <Chart chartData={[valueJanuary, valueFebruary, valueMarch, valueApril]}/>

      <Text style={styles.label}>dados</Text>
      <MonthData
        title="Janeiro"
        value={valueJanuary}
        plus={() => incrementValueMonth(setValueJanuary, valueJanuary)}
        minus={() => decrementValueMonth(setValueJanuary, valueJanuary)}
      />
      <MonthData
        title="Fevereiro"
        value={valueFebruary}
        plus={() => incrementValueMonth(setValueFebruary, valueFebruary)}
        minus={() => decrementValueMonth(setValueFebruary, valueFebruary)}
      />
      <MonthData
        title="Março"
        value={valueMarch}
        plus={() => incrementValueMonth(setValueMarch, valueMarch)}
        minus={() => decrementValueMonth(setValueMarch, valueMarch)}
      />
      <MonthData
        title="Abril"
        value={valueApril}
        plus={() => incrementValueMonth(setValueApril, valueApril)}
        minus={() => decrementValueMonth(setValueApril, valueApril)}
      />

    </LinearGradient>
  );
}
