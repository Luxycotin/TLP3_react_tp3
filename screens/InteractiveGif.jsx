import React, { useRef, useState } from 'react';
import { View, Text, Pressable, StyleSheet, Animated, Easing, Image } from 'react-native';

export default function PucciRotatingGif() {
  const rotation = useRef(new Animated.Value(0)).current;
  const [duration, setDuration] = useState(4000); 


  const startRotation = () => {
    rotation.setValue(0);
    Animated.timing(rotation, {
      toValue: 1,
      duration: duration,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => startRotation());
  };

  React.useEffect(() => {
    startRotation();
  }, [duration]);

  
  const handlePress = () => {
    setDuration((d) => Math.max(500, d - 500)); 
  };

  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Made in Heaven</Text>
      <Pressable onPress={handlePress}>
        <Animated.Image
          source={{ uri: 'https://media1.tenor.com/m/R4sI-hjYqLwAAAAC/jojo-made-in-heaven.gif' }}
          style={[styles.image, { transform: [{ rotate: rotateInterpolate }] }]}
        />
      </Pressable>
      <Text style={styles.speed}>Velocidad de rotación: {(4000 / duration).toFixed(2)}x</Text>
      <Text style={styles.tip}>(Tocá la imagen para acelerar)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a', justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 22, marginBottom: 20, color: '#ff1a1a', fontWeight: 'bold', textAlign: 'center' },
  image: { width: 200, height: 200, resizeMode: 'contain' },
  speed: { marginTop: 15, fontSize: 16, color: '#fff' },
  tip: { fontSize: 12, color: '#777', marginTop: 5 },
});
// Uso de estilos mas sencillo