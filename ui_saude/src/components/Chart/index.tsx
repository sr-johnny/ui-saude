import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { LineChart } from "react-native-chart-kit";
import { theme } from '../../global/themes';

type Props = {
  chartData: number[];
}

export function Chart({ chartData, ...rest }: Props) {
  
  const data = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    datasets: [
      {
        data: (chartData),
        //data: [ 5, 5, 5, 5, 6, 0, 7, 3, 6, 4, 5, 5, 5, 5, 5, 5, 5, 6, 3, 10, 2, 6, 4, 6, 5, 5, 5,],
        color: (opacity = 1) => `rgba(49, 28, 132, ${opacity})`, 
      }
    ],
  };
  
  const chartConfig = {
    color: (opacity = 1) => `rgba(62, 62, 62, ${opacity})`,
    decimalPlaces: 0,
    propsForDots: {
     //r: '6',                           // tamanho dos pontos
      //strokeWidth: '1',                 // largura dos pontos
      //fill:  'rgba(49, 28, 132, 0.4)',  // cor dos pontos
      //stroke: theme.colors.primary,     // cor do contorno
    }
  };

  return (
    <View style={styles.container} {...rest}>
      <LineChart
        data={data}
        width={322}
        height={165}
        chartConfig={chartConfig}
        yAxisInterval={1}
        yLabelsOffset={6}
        xLabelsOffset={-7}
        withShadow={false}
        segments={10}
        fromZero
        yAxisSuffix='x'
        style={{marginEnd: 35}}
        withDots={false}
        withInnerLines={false}
        //withOuterLines={false} 
        transparent
      />
    </View>
  );
}