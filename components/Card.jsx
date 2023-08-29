import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

const Card = (props) => {

  const nome = 'Victor Gabriel'

  return (
    <>
      <View style={styles.card}>
        <Text style={styles.textoBorda}>{props.titulo}</Text>
        {props.children}
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