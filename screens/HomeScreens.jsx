import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido al Inicio</Text>
      <Text style={styles.subtitle}>Explorá la app y disfrutá</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#000',
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 20,
  },
  title: { 
    fontSize: 28, 
    fontWeight: '700', 
    color: '#fff', 
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#e60000',
    fontWeight: '600',
    fontStyle: 'italic',
  },
});
