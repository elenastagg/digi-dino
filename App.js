import React from 'react';
import DinoName from './src/components/home';
import MainGameScreen from './src/components/main-game-screen';
import { createStackNavigator } from 'react-navigation';
import { Font, AppLoading } from 'expo';

const Chewy = require('./assets/fonts/Chewy-Regular.ttf');

const RootStack = createStackNavigator(
  {
    Home: DinoName,
    Game: MainGameScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  render() {
    if (this.state.fontLoaded) {
      return (
        <RootStack />
      );
    }

    return (
      <AppLoading
        startAsync={() => Font.loadAsync({ Chewy })}
        onFinish={() => this.setState({ fontLoaded: true })}
      />
    );
  }
}

export default App;
