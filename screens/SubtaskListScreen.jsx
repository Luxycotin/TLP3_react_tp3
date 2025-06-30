import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const SubtaskListScreen = ({ route, navigation }) => {
  const { tarea } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{tarea.titulo}</Text>
      <FlatList
        data={tarea.subtareas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('DetalleSubtarea', { subtarea: item })}
          >
            <Text style={styles.itemText}>{item.titulo}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e60000',
    margin: 10,
    textAlign: 'center',
  },
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },
  itemText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default SubtaskListScreen;

