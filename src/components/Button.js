import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from 'react-native';

const style = StyleSheet.create({
  container: {
    borderRadius: 25,
  },
  text: {
    padding: 5,
    textAlign: 'center',
  },
});

const Button = props => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={[style.container, props.backgroundStyle]}>
      <Text style={[style.text, props.textStyle]}>
        {props.title}
      </Text>
    </View>
  </TouchableOpacity>
);

export default Button;
