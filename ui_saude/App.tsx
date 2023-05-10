import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
        // Background Linear Gradient
        colors={['#311C84', '#DF3E78']}
        locations={[0.27,  0.96]}   
        end={[0.27, 0.96]}     
        //175.08deg, #311C84 26.76%, rgba(223, 62, 120, 0.44) 96.04%
        style={styles.container}
      >
      <StatusBar style="auto" />
      <Text style={styles.title}>Olá, Camila!</Text>
      <Text style={styles.subtitle}>Temos muito a fazer hoje.</Text>

      <View style={styles.buttons}>
        <View
          style={styles.buttonbt}
        >
          <Text style={styles.buttonlabel}>bluetooth</Text>
          <Text style={styles.buttonlabel}> on</Text>
        </View>
        <View
          style={styles.buttonwifi}
        >
          <Text style={styles.buttonlabel}>wifi</Text>
          <Text style={styles.buttonlabel}> on</Text>
        </View>
      </View>

      <Text style={styles.label}>estatísticas</Text>
      <View style={styles.graph}>
      </View>

      <Text style={styles.label}>dados</Text>
      <View style={styles.month}>
       <Text style={styles.subtitle}>Janeiro</Text>
       <View style={styles.controls}>
        <View style={styles.updown}><Text style={styles.subtitle}>-</Text></View>
        <View style={styles.value}><Text style={styles.subtitle}>10</Text></View>
        <View style={styles.updown}><Text style={styles.subtitle}>+</Text></View>
       </View>
      </View>

      <View style={styles.month}>
       <Text style={styles.subtitle}>Fevereiro</Text>
       <View style={styles.controls}>
        <View style={styles.updown}><Text style={styles.subtitle}>-</Text></View>
        <View style={styles.value}><Text style={styles.subtitle}>1</Text></View>
        <View style={styles.updown}><Text style={styles.subtitle}>+</Text></View>
       </View>
      </View>

      <View style={styles.month}>
       <Text style={styles.subtitle}>Março</Text>
       <View style={styles.controls}>
        <View style={styles.updown}><Text style={styles.subtitle}>-</Text></View>
        <View style={styles.value}><Text style={styles.subtitle}>8</Text></View>
        <View style={styles.updown}><Text style={styles.subtitle}>+</Text></View>
       </View>
      </View>

      <View style={styles.month}>
       <Text style={styles.subtitle}>Abril</Text>
       <View style={styles.controls}>
        <View style={styles.updown}><Text style={styles.subtitle}>-</Text></View>
        <View style={styles.value}><Text style={styles.subtitle}>9</Text></View>
        <View style={styles.updown}><Text style={styles.subtitle}>+</Text></View>
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
    //backgroundColor: '#311c84',
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
    fontSize: 16,
  },
  buttonbt: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 10,
    marginTop: 5,
    paddingLeft: 17,
    paddingRight: 17,
    width: 185,
    height: 50,
    fontSize: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonwifi: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 10,
    marginTop: 5,
    paddingLeft: 17,
    paddingRight: 17,
    width: 117,
    height: 50,
    fontSize: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 70,
    marginBottom: 30,
  },
  graph: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 20,
    width: 322,
    height: 173,
    fontSize: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'    
  },
  month: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
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
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 10,
    width: 38,
    height: 38,
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center'    
  },
  value: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 10,
    width: 68,
    height: 38,
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center'    
  },
});
