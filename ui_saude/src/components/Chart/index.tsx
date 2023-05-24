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
    labels: ["Jan", "Fev", "Mar", "Abr"],
    datasets: [
      {
        data: (chartData),
        color: (opacity = 1) => `rgba(49, 28, 132, ${opacity})`, // optiona
      }
    ],
  };
  
  const chartConfig = {
    color: (opacity = 1) => `rgba(62, 62, 62, ${opacity})`,
    decimalPlaces: 0,
    propsForDots: {
      r: '6',                           // tamanho dos pontos
      strokeWidth: '1',                 // largura dos pontos
      fill:  'rgba(49, 28, 132, 0.4)',  // cor dos pontos
      stroke: theme.colors.primary,     // cor do contorno
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
        segments={9}
        yAxisSuffix='x'
        style={{marginEnd: 35}}
        //withInnerLines={false}
        //withOuterLines={false} 
        transparent
      />
    </View>
  );
}