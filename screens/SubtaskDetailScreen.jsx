import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SubtaskDetailScreen = ({ route }) => {
  const { subtarea } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{subtarea.titulo}</Text>
      <Text style={styles.description}>Descripción: {subtarea.descripcion}</Text>
      <Text style={styles.status}>Estado: {subtarea.estado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#e60000',
    marginBottom: 15,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  status: {
    fontSize: 16,
    color: '#fff',
  },
});

export default SubtaskDetailScreen;
