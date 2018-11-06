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
      animationFrames: defineFrames[this.props.animationName].frames,
      loopIndex: 2,
      frameIndex: 0,
      returnToDefault: false,
      actionAnimation: false,
    };
    this.handleAnimation = this.handleAnimation.bind(this);
    this.interval = undefined;
  }

  handleAnimation() {
    // Records index of currentFrame when looping through animationFrames array
    let frameIndex = this.state.frameIndex;

    const nextFrame = () => {
      if (this.state.returnToDefault === true) {
        stopAnimation();
        this.setState({
          returnToDefault: false,
          animationName: 'normalState',
          animationFrames: defineFrames.normalState.frames,
          currentFrame: 1,
          loopIndex: 2,
          frameIndex: 0,
          actionAnimation: false,
        });
        this.handleAnimation();

      } else if ((this.state.returnToDefault === false) && (this.state.actionAnimation === false) && (this.state.loopIndex === 0)) {
        // console.log('reached stop if');
        this.setState({
          loopIndex: 2,
          frameIndex: 0,
        });
      } else if ((this.state.returnToDefault === false) && ((this.state.actionAnimation === true) && (this.state.loopIndex === 0))) {
        // console.log('stopped because actionAnimation ended');
        this.setState({
          returnToDefault: true,
        });
        stopAnimation();
        this.handleAnimation();
      } else if ((frameIndex + 1) > this.state.animationFrames.length) {
        this.setState({
          loopIndex: this.state.loopIndex - 1,
        });
        frameIndex = 0;
      } else {
        this.setState({ currentFrame: this.state.animationFrames[frameIndex].frame });
        frameIndex = frameIndex + 1;
        this.setState({
          frameIndex: frameIndex,
        });
      }
    };

    const nextFrameTrigger = setInterval(() => {
      nextFrame();
    }, 500);
    this.interval = nextFrameTrigger;

    const stopAnimation = () => {
      clearInterval(nextFrameTrigger);
      console.log('animation has stopped');
    };
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const currentFrames = defineFrames[this.state.animationName].frames;
    const myFrame = currentFrames.find(f => {
      return f.frame === this.state.currentFrame;
    });
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.animationName !== this.state.animationName) {
      this.setState({
        animationName: nextProps.animationName,
        animationFrames: defineFrames[nextProps.animationName].frames,
        returnToDefault: false,
        actionAnimation: true,
        currentFrame: 1,
        loopIndex: 2,
        frameIndex: 0,
      });
    }
  }
}

export default Animation;
