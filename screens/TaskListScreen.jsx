import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { tareas } from '../constants/tareas';

const TaskListScreen = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={tareas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Subtasks', { tarea: item })}>
            <Text style={{ fontSize: 18, margin: 10 }}>{item.titulo}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};


//Me hubuiera gustando agregarle estilos pero tuve un inconveniente personal, y en resumen llegué a mi casa a las 11:50 y me dijeron que tenía hasta las 13 para corregir TPS... disculpe, igual veo si le agrego estilos, pero primero le paso el TP corregido, y si me deja le agrego estilos después. :)

export default TaskListScreen;