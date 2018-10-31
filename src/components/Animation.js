import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import defineFrames from './defineFrames';

// Styles

const styles = StyleSheet.create({
  petScreenImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    // backgroundColor: '#999999',
  },
});

// PetScreen component
class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFrame: 0,
    };
  }

  render() {
    this.handleAnimation();
    return (
      <View>
        <Image
          source={defineFrames[this.props.animationName].frames[0].imgSrc}
          style={styles.petScreenImage}
        />
      </View>
    );
  };

  handleAnimation() {
    const { animationName }  = this.props;
    const getlength = defineFrames[animationName].frames.length;
    console.log(getlength);
  }
}

export default Animation;