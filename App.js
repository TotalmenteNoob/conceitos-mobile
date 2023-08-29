import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Page1 from './screens/Page1';
import Page2 from './screens/Page2';
import Page4 from './screens/Page4';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Arrays from './screens/Arrays';
import Objeto from './screens/Objeto';

const Stack = createNativeStackNavigator()

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Objetos" component={Objeto} options={{ title: "Objeto" }} />
        <Stack.Screen name="arrays" component={Arrays} options={{ title: "Arrays" }} />
        <Stack.Screen name="Page1" component={Page1} options={{ title: "Página Principal" }} />
        <Stack.Screen name="Page2" component={Page2} options={{ title: "Página 2" }} />
        <Stack.Screen name="Page4" component={Page4} options={{ title: "Página 3" }} />
      </Stack.Navigator>
    </NavigationContainer>

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
