import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const imageTwo = require('../../assets/animations/happy/happy2.png');
const imageOne = require('../../assets/animations/happy/happy1.png');

const styles = StyleSheet.create({
  petScreenImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute',
  },
});

const frames = [imageOne, imageTwo];

class HappyAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frame: imageOne,
    };

    setInterval(() => {
      this.setState({
        frame: frames[(frames.indexOf(this.state.frame) + 1) % frames.length],
      });
    }, 10);
  }

  render() {
    return (
      <View>
        <Image
          frame={this.state.frame}
          style={styles.petScreenImage}
        />
      </View>
    );
  }
}

export default HappyAnimation;
