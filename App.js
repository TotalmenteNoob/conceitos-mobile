import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';
import Botoes from './components/Botoes';

export default function App() {
  return (
    <ScrollView style={{ marginTop: 50 }}>

      <Botoes></Botoes>
      <Card titulo='sem conteúdo'></Card>
      <Card titulo='Victor'>
        <Text>React Native</Text>
      </Card>

      <Card titulo='mobile'>
        <Text>Parágrafo 1</Text>
        <Text>Parágrafo 2</Text>
        <Text>Parágrafo 3</Text>
        <Button title='Detalhes'></Button>
      </Card>

      <Card titulo='framengo'>

      </Card>

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
