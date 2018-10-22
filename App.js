import React from 'react';
// import { StyleSheet } from 'react-native';
import DinoName from './src/components/dino-name';
import MainGameScreen from './src/components/main-game-screen';
import { createStackNavigator } from 'react-navigation';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'flex-start',
//     justifyContent: 'flex-start',
//     paddingTop: 20,
//   },
// });

const RootStack = createStackNavigator(
  {
    Home: DinoName,
    Game: MainGameScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const App = () => (
  <RootStack />
);

export default App;
