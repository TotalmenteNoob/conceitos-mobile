import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

const Card = () => {
    return (
        <>
            <View style={styles.card}>
                <Text style={styles.textoBorda}>Funcionou</Text>
                <Text>Funcionou</Text>
                <Text style={styles.texto1}>Funcionou</Text>
                <Text>Funcionou</Text>
                <StatusBar style="auto" />
            </View>
        </>
    )
}

export default Card

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