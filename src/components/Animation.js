import React, { Component } from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import defineFrames from './defineFrames';

// Styles

const styles = StyleSheet.create({
  petScreenImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    //backgroundColor: '#999999',
  },
});

// PetScreen component
class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFrame: 1,
    };
    this.handleAnimation = this.handleAnimation.bind(this);
  }

  handleAnimation() {
     
    // Access the relevant animation object inside defineFrames
    const animation = defineFrames[this.props.animationName];
    // Bring back the frames array for the relevant animation
    const animationFrames = animation.frames;

    animationFrames.forEach((currentAnimationFrame, i) => {
      setTimeout(
        () => this.setState({ currentFrame: currentAnimationFrame.frame }),
        500 * i
      );
    });

  }

  render() {

    const currentFrames = defineFrames[this.props.animationName].frames;
    const myFrame  = currentFrames.find(f => { 
      return f.frame === this.state.currentFrame;
    })

    console.log('currentFrames: ',currentFrames);
    console.log('myFrame: ',myFrame);
    return (
      <View>
        <Image
          source={myFrame.imgSrc}
          style={styles.petScreenImage}
        />
      </View>
    );
  }

  componentDidMount() {
    this.handleAnimation();
  }
}

export default Animation;
