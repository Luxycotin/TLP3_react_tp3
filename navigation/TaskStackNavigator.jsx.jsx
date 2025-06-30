import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskListScreen from '../screens/TaskListScreen';
import SubtaskListScreen from '../screens/SubtaskListScreen';
import SubtaskDetailScreen from '../screens/SubtaskDetailScreen';

const Stack = createNativeStackNavigator();

const TaskStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tareas" component={TaskListScreen} />
      <Stack.Screen name="Subtasks" component={SubtaskListScreen} />
      <Stack.Screen name="DetalleSubtarea" component={SubtaskDetailScreen} />
    </Stack.Navigator>
  );
};

export default TaskStackNavigator;
