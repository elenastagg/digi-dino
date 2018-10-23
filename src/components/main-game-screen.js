import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import Dinosaur from '../digi-dino';

const style = StyleSheet.create({
  nameStyle: {
    margin: 15,
    color: colors.blue,
    fontSize: 30,
  },
});

class MainGameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Dinosaur: new Dinosaur(props.navigation.getParam('name')),
    };
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
        <Text style={style.nameStyle}>
          {this.state.Dinosaur.name}
        </Text>
      </View>
    );
  }
}

export default MainGameScreen;
