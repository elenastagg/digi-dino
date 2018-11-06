import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import defineFrames from './define-frames';

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
      on: true,
    };

    setInterval(() => {
      this.setState(previousState => {
        return {
          on: !previousState.on,
        };
      });
    }, 500);
  }

  /* this.state is currently ‘normal’
  Normal is looping continuously
  An action is called
  This.state.animationName is set to ‘eating’
  handleAnimation is called with a for loop that run twice.
  When for loop ends this.setState.animationName: ‘NormalState’


  handleAnimation() {
    const { animationName }  = this.props;
    const getlength = defineFrames[animationName].frames.length;
  } */

  render() {
    const frame = this.state.on
      ? defineFrames.happy.frames[0].imgSrc
      : defineFrames.happy.frames[1].imgSrc;
    return (
      <View>
        <Image
          key={this.state.on}
          source={frame}
          style={styles.petScreenImage}
        />
      </View>
    );
  }
}
//     this.handleAnimation();
//     return (
//       <View>
//         <Image
//           source={defineFrames[this.props.animationName].frames[0].imgSrc}
//           style={styles.petScreenImage}
//         />
//       </View>
//     );
//   }
// }

export default Animation;
