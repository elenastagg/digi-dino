import React from 'react';
import DinoName from './src/components/dino-name';
import MainGameScreen from './src/components/main-game-screen';
import { createStackNavigator } from 'react-navigation';

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
