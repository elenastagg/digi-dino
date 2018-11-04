import React from 'react';
import DinoName from './src/components/home';
import MainGameScreen from './src/components/main-game-screen';
import { Font, AppLoading } from 'expo';
import Dinosaur from './src/digi-dino';

const Chewy = require('./assets/fonts/Chewy-Regular.ttf');

class App extends React.Component {
  state = {
    isLoading: true,
    Dinosaur: null,
    modalVisible: false,
    errorMessage: '',
  };

  handleNameSubmit = (name) => {
    this.setState({
      Dinosaur: new Dinosaur(name),
    });
  };

  handlePress = (action) => {
    try {
      this.state.Dinosaur[action]();
      this.setState({
        Dinosaur: this.state.Dinosaur,
      });
    } catch (error) {
      window.clearInterval(this.dayInterval);
      this.setState({
        modalVisible: true,
        errorMessage: error.message,
      });
    }
  };

  handleGameEnds = () => {
    window.clearInterval(this.dayInterval);
    this.setState({
      Dinosaur: null,
      modalVisible: false,
      errorMessage: '',
    });
  };

  handleDayPasses = () => {
    this.dayInterval = window.setInterval(() => {
      this.handlePress('dayPasses');
    }, 2000);
  };

  render() {
    /* Waits for font to load before showing the home screen */
    if (this.state.isLoading) {
      return (
        <AppLoading
          startAsync={() => Font.loadAsync({ Chewy })}
          onFinish={() => this.setState({ isLoading: false })}
        />
      );
    }

    /* if dinosaur is dead (null ) show the home screen */
    if (this.state.Dinosaur === null) {
      return (
        <DinoName
          onSubmit={this.handleNameSubmit}
        />
      );
    }
    return (
      <MainGameScreen
        dinosaur={this.state.Dinosaur}
        onPress={this.handlePress}
        modalVisible={this.state.modalVisible}
        errorMessage={this.state.errorMessage}
        gameEnds={this.handleGameEnds}
        setDayInterval={this.handleDayPasses}
      />
    );
  }
}

export default App;
