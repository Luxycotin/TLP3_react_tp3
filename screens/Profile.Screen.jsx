import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/300' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Luca Espinoza</Text>
      <Text style={styles.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem tempora ullam atque provident aliquid commodi nostrum similique ducimus nisi explicabo quaerat accusantium, quasi non laboriosam recusandae omnis nobis nesciunt fuga.e</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#000',
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 20,
  },
  avatar: { 
    width: 160, 
    height: 160, 
    borderRadius: 80, 
    marginBottom: 25
  },
  name: { 
    fontSize: 28, 
    fontWeight: '700', 
    color: '#fff',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: '#e60000',
    fontWeight: '600',
    fontStyle: 'italic',
  }
});
