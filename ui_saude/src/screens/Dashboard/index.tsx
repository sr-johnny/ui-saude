import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { theme } from '../../global/themes';

import { MonthData } from '../../components/MonthData';
import { ConnectionButton } from '../../components/ConnectionButton';
import { Chart } from '../../components/Chart';
import { InfoCard } from '../../components/InfoCard';
import { ImageCard } from '../../components/ImageCard';

export function Dashboard() {
  
    useEffect(() => {
      var hours = new Date().getHours()
      messageInit(hours)
    }, [])

  const [currentTime, setCurrentTime] = useState('');

  const navigation = useNavigation();

  const [valueJanuary, setValueJanuary] = useState(5);
  const [valueFebruary, setValueFebruary] = useState(5);
  const [valueMarch, setValueMarch] = useState(5);
  const [valueApril, setValueApril] = useState(4);
  const [valueMay, setValueMay] = useState(6);
  const [valueJune, setValueJune] = useState(3);
  const [valueJuly, setValueJuly] = useState(7);
  const [valueAugust, setValueAugust] = useState(0);
  const [valueSeptember, setValueSeptember] = useState(9);
  const [valueOctober, setValueOctober] = useState(5);
  const [valueNovember, setValueNovember] = useState(5);
  const [valueDecember, setValueDecember] = useState(5);

  function messageInit(hours: number) {
    if (hours >= 5 && hours < 12) {
      return setCurrentTime('Bom dia')
    }
    if (hours >= 12 && hours < 18) {
      return setCurrentTime('Boa tarde')
    }
    if ((hours >= 18 && hours < 24) || hours < 5) {
      return setCurrentTime('Boa noite')
    }
    return setCurrentTime('Olá')
  }

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
      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        <Text style={styles.title}>{currentTime}, <Text style={styles.title_name}>Camila</Text>!</Text>
        <Text style={styles.subtitle}>Temos muito a fazer hoje.</Text>

        <View style={styles.buttons}>
          <ConnectionButton
            type='bluetooth'
          />
          <ConnectionButton
            type='wifi'
          />
        </View>

        <Text style={styles.label}>estatísticas</Text>
        <Chart
          chartData={
            [
              valueJanuary, valueFebruary, valueMarch, valueApril,
              valueMay, valueJune, valueJuly, valueAugust,
              valueSeptember, valueOctober, valueNovember, valueDecember
            ]
          } />

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
        <MonthData
          title="Maio"
          value={valueMay}
          plus={() => incrementValueMonth(setValueMay, valueMay)}
          minus={() => decrementValueMonth(setValueMay, valueMay)}
        />
        <MonthData
          title="Junho"
          value={valueJune}
          plus={() => incrementValueMonth(setValueJune, valueJune)}
          minus={() => decrementValueMonth(setValueJune, valueJune)}
        />
        <MonthData
          title="Julho"
          value={valueJuly}
          plus={() => incrementValueMonth(setValueJuly, valueJuly)}
          minus={() => decrementValueMonth(setValueJuly, valueJuly)}
        />
        <MonthData
          title="Agosto"
          value={valueAugust}
          plus={() => incrementValueMonth(setValueAugust, valueAugust)}
          minus={() => decrementValueMonth(setValueAugust, valueAugust)}
        />
        <MonthData
          title="Setembro"
          value={valueSeptember}
          plus={() => incrementValueMonth(setValueSeptember, valueSeptember)}
          minus={() => decrementValueMonth(setValueSeptember, valueSeptember)}
        />
        <MonthData
          title="Outubro"
          value={valueOctober}
          plus={() => incrementValueMonth(setValueOctober, valueOctober)}
          minus={() => decrementValueMonth(setValueOctober, valueOctober)}
        />
        <MonthData
          title="Novembro"
          value={valueNovember}
          plus={() => incrementValueMonth(setValueNovember, valueNovember)}
          minus={() => decrementValueMonth(setValueNovember, valueNovember)}
        />
        <MonthData
          title="Dezembro"
          value={valueDecember}
          plus={() => incrementValueMonth(setValueDecember, valueDecember)}
          minus={() => decrementValueMonth(setValueDecember, valueDecember)}
        />

        <ImageCard />

        <InfoCard />

      </ScrollView>
    </LinearGradient>
  );
}
