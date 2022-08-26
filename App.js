import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá, este é meu primeiro App!
        SIN1022/N22 2022.2 Programação para Dispositivos Móveis\ Profª Márcio Bueno.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008050',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
