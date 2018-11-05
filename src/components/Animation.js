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
      infiniteLoop: true,
      loopIndex: 2,
      frameIndex: 0,
    };

    const clearAnimationInterval = (intervalName) => {
      clearInterval(intervalName);
    };

    this.handleAnimation = this.handleAnimation.bind(this);
    this.stopAnimation = this.handleAnimation.bind(this);
  }

  handleAnimation(stopPrevAnimation) {
   
    console.log('handle animation called,');
    console.log('loopIndex at beginning: ', this.state.loopIndex);
    // Bring back the frames array for the elevant animation
    const animationFrames = defineFrames[this.state.animationName].frames;
  
    // Records index of currentFrame when looping through animationFrames array
    let frameIndex = this.state.frameIndex;

    const nextFrame = () => {
      console.log('next frame has been called');
      if ((this.state.infiniteLoop === false) && (this.state.loopIndex === 0)) {
        console.log('reached stop if');
        stopAnimation();
        playDefault();
    
      } else if ((frameIndex + 1) > animationFrames.length) {
        this.setState({
          loopIndex: this.state.loopIndex - 1,
        });
        frameIndex = 0;
      } else {
        console.log(animationFrames[frameIndex], frameIndex, 'loopindex ', this.state.loopIndex, ' loopStatus ', this.state.infiniteLoop);
        this.setState({ currentFrame: animationFrames[frameIndex].frame });
        frameIndex = frameIndex + 1;
        this.setState({
          frameIndex: frameIndex,
        });
      }
    };

    const nextFrameTrigger = setInterval(() => {
      nextFrame();
    }, 1000);

    const stopAnimation = () => {
      console.log('animation has stopped');
      clearInterval(nextFrameTrigger);
    };

    if (stopPrevAnimation === true) {
      stopAnimation();
      this.setState({
        loopIndex: 2,
        infiniteLoop: false,
        frameIndex: 0,
      });
    }

    const playDefault = () => {
      console.log('playDefault has been called');
      this.playDefault();
    };
  }

  playDefault() {
    this.setState({
      loopIndex: 2,
      infiniteLoop: false,
      frameIndex: 0,
      animationName: 'eating',
    });
    console.log(this.state);
  }

  render() {
    
   // console.log('Animation animationName: ', this.props.animationName);
    const currentFrames = defineFrames[this.props.animationName].frames;
    const myFrame = currentFrames.find(f => {
      return f.frame === this.state.currentFrame;
    });

    // console.log('currentFrames: ', currentFrames);
    // console.log('myFrame: ', myFrame);
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

  componentDidUpdate() {
   
  }

  componentWillReceiveProps() {
    console.log('WILL RECEIVE PROPS');
    this.handleAnimation(true);
    //this.startAnimation();
  }
}

export default Animation;
