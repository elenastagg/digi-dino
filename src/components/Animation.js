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
      currentFrame: 0,
    };
    this.handleAnimation = this.handleAnimation.bind(this);
  }

  handleAnimation() {
      /*
    // Access the relevant animation object inside defineFrames
    const animation = defineFrames[this.props.animationName];
    // Bring back the frames array for the relevant animation
    const animationFrames = animation.frames;
    // Find out how many frames are in the array
    const lengthOfFrames = animation.frames.length;
    // Loop through the frames array, update the state of the Image once per frame
    animationFrames.forEach(function foo(currentFrame) {
    console.log('currentFrame: ', currentFrame.frame);
      setTimeout(
        function () {
          this.Animation.setState({ currentFrame: currentFrame.frame });
        },
        2000
      );
    });
    // Return to default animation once complete */

    const myFunction = (e) => {
      console.log("test");
    };

    setTimeout(myFunction, 2000);
    const myArray = [0, 1, 2, 3];

    myArray.forEach(function foo(e) {
      myFunction(e);
    });
  }

  render() {
    return (
      <View>
        <Image
          source={defineFrames[this.props.animationName].frames[this.state.currentFrame].imgSrc}
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
