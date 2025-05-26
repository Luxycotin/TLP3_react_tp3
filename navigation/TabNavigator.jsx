import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreens';
import ProfileScreen from '../screens/Profile.Screen';
import Wonder from '../screens/JojolionSelectorScreen';
import InteractiveGif from '../screens/InteractiveGif';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTitleStyle: {
          color: '#e60000',
          fontWeight: 'bold',
          fontSize: 22,
        },
        headerTitleAlign: 'center',
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopColor: '#222',
        },
        tabBarActiveTintColor: '#e60000',
        tabBarInactiveTintColor: '#fff',
        tabBarIcon: ({ color, size }) => {
          let iconName;

          // Acá pongo unos íconos que se me ocurrieron medio de último
          switch (route.name) {
            case 'Inicio':
              iconName = 'home';
              break;
            case 'Perfil':
              iconName = 'person';
              break;
            case 'SoftAndWet':
              iconName = 'book';
              break;
            case 'JolyneGif':
              iconName = 'speedometer';
              break;
            default:
              iconName = 'ellipse';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
      <Tab.Screen name="SoftAndWet" component={Wonder} />
      <Tab.Screen name="JolyneGif" component={InteractiveGif} />
    </Tab.Navigator>
  );
}
