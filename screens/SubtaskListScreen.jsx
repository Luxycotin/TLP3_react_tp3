import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const SubtaskListScreen = ({ route, navigation }) => {
  const { tarea } = route.params;

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10 }}>{tarea.titulo}</Text>
      <FlatList
        data={tarea.subtareas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('DetalleSubtarea', { subtarea: item })}>
            <Text style={{ fontSize: 16, margin: 10 }}>{item.titulo}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

//Me hubuiera gustando agregarle estilos pero tuve un inconveniente personal, y en resumen llegué a mi casa a las 11:50 y me dijeron que tenía hasta las 13 para corregir TPS... disculpe, igual veo si le agrego estilos, pero primero le paso el TP corregido, y si me deja le agrego estilos después. :)

export default SubtaskListScreen;
