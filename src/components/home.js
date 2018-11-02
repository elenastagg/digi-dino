import React, { Component } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Button from './Button';
import colors from '../../styles/colors';

const style = StyleSheet.create({
  view: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    color: colors.midgreen,
    fontSize: 30,
    margin: 10,
  },
  buttonBackground: {
    backgroundColor: colors.blue,
    width: 90,
    marginLeft: 10,
  },
  buttonText: {
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
      <View style={style.view}>
        <TextInput
          style={style.input}
          placeholder="Enter your dino's name"
          onChangeText={text => this.handleTextChange(text)}
          value={this.state.text}
        />
        <Button
          onPress={() => this.props.navigation.navigate('Game', {
            name: this.state.text,
          })}
          title="Save"
          backgroundStyle={style.buttonBackground}
          textStyle={style.buttonText}
        />
      </View>
    );
  }
}

export default DinoName;
