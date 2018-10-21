import React, { Component } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Button from './Button';
import colors from '../../styles/colors';

const style = StyleSheet.create({
  inputStyle: {
    color: colors.midgreen,
    fontSize: 30,
  },
  buttonBackgroundStyle: {
    backgroundColor: colors.blue,
    width: 100,
  },
  buttonTextStyle: {
    color: 'white',
    fontSize: 30,
  },
});

class DinoName extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  handleTextChange(text) {
    this.setState({
      text: text,
    });
  }

  render() {
    return (
      <View style={{ width: '100%' }}>
        <TextInput
          style={style.inputStyle}
          placeholder="Enter your dino's name"
          onChangeText={text => this.handleTextChange(text)}
          value={this.state.text}
        />
        <Button
          onPress={() => {}}
          title="Save"
          backgroundStyle={style.buttonBackgroundStyle}
          textStyle={style.buttonTextStyle}
        />
      </View>
    );
  }
}

export default DinoName;
