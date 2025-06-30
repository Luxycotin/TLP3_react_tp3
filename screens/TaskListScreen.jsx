import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { tareas } from '../constants/tareas';

const TaskListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tareas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('Subtasks', { tarea: item })}
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
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },
  itemText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default TaskListScreen;
