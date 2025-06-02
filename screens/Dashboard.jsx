import React from 'react';
import { View, StyleSheet } from 'react-native';
import TabNavigator from '../navigation/TabNavigator';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <TabNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
