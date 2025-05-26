import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const MANGAS = Array.from({ length: 27 }, (_, i) => ({
  id: `${i + 1}`,
  title: `Jojolion Vol. ${i + 1}`,
  price: '13.500 ARS',
  image: 'https://th.bing.com/th/id/R.84950482bb7b1ec32b4715537b142739?rik=Mi1P2Z3uK0efUA&pid=ImgRaw&r=0',
}));

export default function JojolionSelectorScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mangas de Jojolion</Text>
      <FlatList
        data={MANGAS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {item.image && (
              <Image source={{ uri: item.image }} style={styles.image} />
            )}
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#000', 
    padding: 20,
  },
  header: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#e60000', 
    marginBottom: 20, 
    textAlign: 'center', 
  },
  card: { 
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111', 
    borderRadius: 12, 
    padding: 15, 
    marginBottom: 12,
    shadowColor: '#e60000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 5, 
  },
  image: {
    width: 60,
    height: 90,
    borderRadius: 8,
    marginRight: 15
  },
  textContainer: {
    flex: 1,
  },
  title: { 
    fontSize: 20, 
    fontWeight: '600', 
    color: '#fff',
  },
  price: { 
    fontSize: 16, 
    color: '#e60000',
    marginTop: 4,
    fontWeight: 'bold',
  },
});
