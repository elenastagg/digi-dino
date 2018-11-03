import { Svg } from 'expo';
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const { Circle, Path } = Svg;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0072A1',
    height: 60,
    width: 60,
    borderRadius: 30,
  };
});

const SvgExample = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.container}>
      <Svg height={36} width={36} viewBox="0 0 512 512">
        <Path fill="#fff" d="M426.667 341.333H85.333C38.4 341.333 0 379.733 0 426.667S38.4 512 85.333 512h341.333C473.6 512 512 473.6 512 426.667s-38.4-85.334-85.333-85.334zM339.2 213.333H170.667c-46.933 0-85.333 38.4-85.333 85.333 0 6.4 2.133 14.933 2.133 21.333H422.4c2.133-6.4 2.133-14.933 2.133-21.333 0-46.933-38.4-85.333-85.333-85.333zM343.467 147.2C326.4 81.067 247.467 46.933 243.2 44.8c-17.067-6.4-36.267 12.8-27.733 29.867C224 96 215.467 121.6 198.4 134.4c-17.067 14.933-25.6 36.267-25.6 57.6h170.667c4.266-14.933 4.266-29.867 0-44.8z" />
        <Circle fill="#fff" cx="405.333" cy="85.333" r="21.333" />
        <Circle fill="#fff" cx="149.333" cy="21.333" r="21.333" />
        <Circle fill="#fff" cx="64" cy="170.667" r="21.333" />
      </Svg>
    </View>
  </TouchableOpacity>
);

export default SvgExample;
