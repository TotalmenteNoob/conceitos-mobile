import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Page1 from './screens/Page1';
import Page2 from './screens/Page2';
import Page4 from './screens/Page4';

export default function App() {
  return (
    <ScrollView style={{ marginTop: 50 }}>

      <Page4/>
      
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
