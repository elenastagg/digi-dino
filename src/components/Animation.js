import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import defineFrames from './define-frames';
import PetScreen from './pet-screen';

// Styles

const styles = StyleSheet.create({
  petScreenImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

// PetScreen component
class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFrame: 1,
      animationName: this.props.animationName,
      numOfLoops: this.props.numOfLoops,
      infiniteLoop: this.props.infiniteLoop,
    };
    this.handleAnimation = this.handleAnimation.bind(this);
  }

  handleAnimation() {
    // Access the relevant animation object inside defineFrames
    // let animation = defineFrames[this.props.animationName];
    // Bring back the frames array for the relevant animation
    let animationFrames = defineFrames[this.state.animationName].frames;
    // How many times should each animation loop before stopping - Does not apply to normalState
    let loopIndex = this.state.numOfLoops;
    // Records index of currentFrame when looping through animationFrames array
    let frameIndex = 0;

    const nextFrame = () => {
      if ((this.state.infiniteLoop === false) && (loopIndex === 0)) {
        console.log('reached stop if');
        stopAnimation();
      } else if ((frameIndex + 1) > animationFrames.length) {
        loopIndex = loopIndex - 1;
        console.log('loopIndex after decrement: ', loopIndex);
        frameIndex = 0;
      } else {
        console.log(animationFrames[frameIndex], frameIndex);
        this.setState({ currentFrame: animationFrames[frameIndex].frame });
        frameIndex = frameIndex + 1;
      }
    };
   
    const nextFrameTrigger = setInterval(() => {
      nextFrame();
    }, 500);
  

    const stopAnimation = () => {
      clearInterval(nextFrameTrigger);
      
      console.log('Animation stopped');
      
      loopIndex = this.state.numOfLoops;
      console.log('stop loopIndex: ', loopIndex);
      frameIndex = 0;
      console.log('stop frameIndex: ', frameIndex);
      this.setState({
        animationName: 'normalState',
        infiniteLoop: true,
      });
      animationFrames = defineFrames[this.state.animationName].frames;
      console.log('stop animationName: ', this.state.animationName);
      console.log('stop infinite loop status: ', this.state.infiniteLoop);
      /*
      const defaultAnimationTrigger = setInterval(() => {
        nextFrame();
      }, 750);
      */
    };
  }

  render() {
    const currentFrames = defineFrames[this.props.animationName].frames;
    const myFrame = currentFrames.find(f => {
      return f.frame === this.state.currentFrame;
    });

    //console.log('currentFrames: ', currentFrames);
    //console.log('myFrame: ', myFrame);
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
