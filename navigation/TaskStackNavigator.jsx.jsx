import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskListScreen from '../screens/TaskListScreen';
import SubtaskListScreen from '../screens/SubtaskListScreen';
import SubtaskDetailScreen from '../screens/SubtaskDetailScreen';

const Stack = createNativeStackNavigator();

const TaskStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTitleStyle: {
          color: '#e60000',
          fontWeight: 'bold',
          fontSize: 22,
        },
        headerTitleAlign: 'center',
        headerTintColor: '#e60000', // color de flecha atrás y demás
      }}
    >
      <Stack.Screen name="Tareas" component={TaskListScreen} />
      <Stack.Screen name="Subtasks" component={SubtaskListScreen} />
      <Stack.Screen name="DetalleSubtarea" component={SubtaskDetailScreen} />
    </Stack.Navigator>
  );
};

export default TaskStackNavigator;
