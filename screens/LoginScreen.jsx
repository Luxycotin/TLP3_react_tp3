import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        placeholder="Usuario"
        placeholderTextColor="#ccc"
        value={user}
        onChangeText={setUser}
        style={styles.input}
      />
      <TextInput
        placeholder="Contraseña"
        placeholderTextColor="#ccc"
        secureTextEntry
        value={pass}
        onChangeText={setPass}
        style={styles.input}
      />
      <Pressable style={styles.button} onPress={() => navigation.replace('Dashboard')}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#ff1a1a',
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 40,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ff1a1a',
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ff1a1a',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
