import React from 'react';
import { View, Text } from 'react-native';

const SubtaskDetailScreen = ({ route }) => {
  const { subtarea } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{subtarea.titulo}</Text>
      <Text style={{ marginTop: 10 }}>Descripción: {subtarea.descripcion}</Text>
      <Text>Estado: {subtarea.estado}</Text>
    </View>
  );
};

//Me hubuiera gustando agregarle estilos pero tuve un inconveniente personal, y en resumen llegué a mi casa a las 11:50 y me dijeron que tenía hasta las 13 para corregir TPS... disculpe, igual veo si le agrego estilos, pero primero le paso el TP corregido, y si me deja le agrego estilos después. :)

export default SubtaskDetailScreen;
