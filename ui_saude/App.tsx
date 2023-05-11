import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';

export default function App() {

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if(!fontsLoaded) {
    return ;
  }

  return (
    <LinearGradient
        // Background Linear Gradient
        colors={['rgba(49, 28, 132, 1)', 'rgba(223, 62, 120, 0.44)']}
        locations={[0.2,  0.7]}   
        end={[0.8, 0.9]}     
        style={styles.container}
      >
      <StatusBar style="auto" />
      <Text style={styles.title}>Olá, Camila!</Text>
      <Text style={styles.subtitle}>Temos muito a fazer hoje.</Text>

      <View style={styles.buttons}>
        
        <TouchableOpacity>
          <View
            style={styles.buttonbt}
          >
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.buttonlabel}>bluetooth </Text>
              <Text style={styles.statuslabel}>on</Text>
            </View>
            <View style={styles.bt_status}></View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={styles.buttonwifi}
          >
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.buttonlabel}>wifi </Text>
              <Text style={styles.statuslabel}>on</Text>
            </View>
            <View style={styles.wifi_status}></View>
          </View>
        </TouchableOpacity>
        
      </View>

      <Text style={styles.label}>estatísticas</Text>
      <View style={styles.graph}>
      </View>

      <Text style={styles.label}>dados</Text>
      <View style={styles.month}>
       <Text style={styles.subtitle}>Janeiro</Text>
       <View style={styles.controls}>
        <TouchableOpacity>
          <View style={styles.updown}><Text style={styles.subtitle}>-</Text></View>
        </TouchableOpacity>
        <View style={styles.value}><Text style={styles.subtitle}>10</Text></View>
        <TouchableOpacity>
          <View style={styles.updown}><Text style={styles.subtitle}>+</Text></View>
        </TouchableOpacity>
       </View>
      </View>

      <View style={styles.month}>
       <Text style={styles.subtitle}>Fevereiro</Text>
       <View style={styles.controls}>
        <TouchableOpacity>
          <View style={styles.updown}><Text style={styles.subtitle}>-</Text></View>
        </TouchableOpacity>
        <View style={styles.value}><Text style={styles.subtitle}>1</Text></View>
        <TouchableOpacity>
          <View style={styles.updown}><Text style={styles.subtitle}>+</Text></View>
        </TouchableOpacity>
       </View>
      </View>

      <View style={styles.month}>
       <Text style={styles.subtitle}>Março</Text>
       <View style={styles.controls}>
        <TouchableOpacity>
          <View style={styles.updown}><Text style={styles.subtitle}>-</Text></View>
        </TouchableOpacity>
        <View style={styles.value}><Text style={styles.subtitle}>8</Text></View>
        <TouchableOpacity>
          <View style={styles.updown}><Text style={styles.subtitle}>+</Text></View>
        </TouchableOpacity>
       </View>
      </View>

      <View style={styles.month}>
       <Text style={styles.subtitle}>Abril</Text>
       <View style={styles.controls}>
        <TouchableOpacity>
          <View style={styles.updown}><Text style={styles.subtitle}>-</Text></View>
        </TouchableOpacity>
        <View style={styles.value}><Text style={styles.subtitle}>9</Text></View>
        <TouchableOpacity>
          <View style={styles.updown}><Text style={styles.subtitle}>+</Text></View>
        </TouchableOpacity>
       </View>
      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 34,
    paddingTop: 71,
    backgroundColor: '#1e1e1e',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  title: {
    color: '#e1e1e1',
    fontSize: 32,
  },
  subtitle: {
    color: '#e1e1e1',
    fontSize: 20,
  },
  label: {
    color: '#e1e1e1',
    fontSize: 16,
    marginBottom: 10,
  },
  buttonlabel: {
    color: '#e1e1e1',
    fontSize: 18,
  },
  statuslabel: {
    color: '#e1e1e1',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonbt: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    marginTop: 5,
    paddingLeft: 17,
    paddingRight: 17,
    width: 185,
    height: 50,
    fontSize: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  buttonwifi: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    marginTop: 5,
    paddingLeft: 17,
    paddingRight: 17,
    width: 117,
    height: 50,
    fontSize: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  bt_status: {
    backgroundColor: 'rgba(60, 15, 238, 1)',
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  wifi_status: {
    backgroundColor: 'rgba(68, 243, 180, 1)',
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 70,
    marginBottom: 30,
  },
  graph: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    //marginTop: 5,
    marginBottom: 20,
    width: 322,
    height: 173,
    fontSize: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'    
  },
  month: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    paddingLeft: 17,
    paddingRight: 7,
    marginBottom: 10,
    width: 322,
    height: 51,
    fontSize: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'    
  },
  controls: {
    width: 172,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  updown: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    width: 38,
    height: 38,
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center'    
  },
  value: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    width: 68,
    height: 38,
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center'    
  },
});
