import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './components/card';

export default function App() {
  return (
    <ScrollView style={{ marginTop: 50 }}>

      <View style={styles.card}>
        <Text style={styles.textoBorda}>Funciona por favor</Text>
        <Text>Funciona por favor</Text>
        <Text style={styles.texto1}>Funciona por favor</Text>
        <Text>Funciona por favor</Text>
        <StatusBar style="auto" />
      </View>

      <Card></Card>

      <View style={styles.card}>
        <Text style={styles.textoBorda}>Acho que está funcionando</Text>
        <Text>Acho que está funcionando</Text>
        <Text style={styles.texto1}>Acho que está funcionando</Text>
        <Text>Acho que está funcionando</Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.card}>
        <Text style={styles.textoBorda}>Funcionou</Text>
        <Text>Funcionou</Text>
        <Text style={styles.texto1}>Funcionou</Text>
        <Text>Funcionou</Text>
        <StatusBar style="auto" />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 2,
    marginBottom: 20,
  },

  textoBorda: {
    color: 'white',
    fontSize: 30,
    padding: 10,
    marginBottom: 18,
    borderColor: 'white',
    borderStyle: 'dotted',
    borderWidth: 4,
    textAlign: 'center',
    backgroundColor: 'red',
  },

  texto1: {
    fontSize: 11,
  },

});
