import React, { Component } from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import Animation from './animation';

// Get the width of the device's screen
// Set the width of PetScreen to 80% of the devices screen
// Set the height of the PetScreen, equal to the width of the PetScreen
const { width } = Dimensions.get('window');
const gameScreenWidth = (width / 100) * 80;

// StyleSheet
const styles = StyleSheet.create({
  petScreen: {
    overflow: 'hidden',
    height: gameScreenWidth,
    width: gameScreenWidth,
  },
});

// PetScreen component
class PetScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationName: 'normalState',
      numOfloops: 2,
      infiniteLoop: true,
    };
    this.matchAction = this.matchAction.bind(this);
  }

  matchAction() {
    const actionToMatch = this.props.currentAction;
    let matchedAnimation = null;
    switch (actionToMatch) {
      case 'play':
        matchedAnimation = 'play';
        break;
      case 'feed':
        matchedAnimation = 'eating';
        break;
      case 'bedTime':
        matchedAnimation = 'sleep';
        break;
      case 'socialise':
        matchedAnimation = 'talking';
        break;
      case 'pooperScooper':
        matchedAnimation = 'poopScoop';
        break;
      default:
        console.log('No match');
        matchedAnimation = 'normalState';
    }
    console.log('matchedAnimation: ', matchedAnimation);
  }

  render() {
    
    return (
      <View style={styles.petScreen}>
        <Animation animationName={this.state.animationName} numOfLoops={this.state.numOfloops} infiniteLoop={this.state.infiniteLoop} currentAction={this.props.currentAction} />
      </View>
    );
  }
}

export default PetScreen;
