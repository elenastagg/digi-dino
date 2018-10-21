import React from 'react';
import { StyleSheet, View } from 'react-native';
import DinoName from './src/components/DinoName';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
});

const App = () => (
  <View style={styles.container}>
    <DinoName />
  </View>
);

export default App;
