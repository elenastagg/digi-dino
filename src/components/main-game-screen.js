import React, { Component } from 'react';
import { AppRegistry, View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import ImageComponent from './animations/ImageComponent.js';

export default class MainGameScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.petScreenContainer}>
        <View style={styles.petScreen}>
          <ImageComponent animationName="normalState" />
        </View>  
      </View>  
    </View>
    );
  }
}
 //Animations();
 // Get the width and height of the screen
// Set the dimensions to screenWidth and screenHeight so we don't mix them up with any other 'widths' or 'heights'
// Useful if you want to create a view that retains a square aspect ratio as it scales on other devices
// AH - Trying to make the function more robust so it can be called from anywhere, gave up, will come back to it later, works well enough for now
let screenWidth = 0;
let screenHeight = 0;
let gameScreenWidth = 0;
const getDimensions = () => {
  const getScreenDimensions = {width, height} = Dimensions.get('screen');
  screenWidth = width;
  screenHeight = height;
  gameScreenWidth = (screenWidth - ((screenWidth / 100) * 20));
  gameScreenHeight = gameScreenWidth;
  console.log('screenWidth: ',screenWidth)
  console.log('gameScreenWidth: ',gameScreenWidth,'gameScreenHeight: ',gameScreenHeight)
}
getDimensions();
 const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  petScreenContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
  },
  petScreen: {
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1.25,
    width: gameScreenWidth,
    height: gameScreenWidth,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
});
