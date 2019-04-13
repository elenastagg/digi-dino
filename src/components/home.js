import React, { Component } from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import Button from './Button';
import colors from './colors';

const style = StyleSheet.create({
	view: {
		width: '100%',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.darkgreen
	},
	input: {
		color: colors.white,
		fontSize: 30,
		margin: 10,
		fontFamily: 'Chewy',
		textAlign: 'center'
	},
	buttonBackground: {
		backgroundColor: colors.midgreen,
		width: 90,
		marginLeft: 10
	},
	buttonText: {
		color: 'white',
		fontSize: 30,
		fontFamily: 'Chewy'
	}
});

class DinoName extends Component {
	constructor(props) {
		super(props);
		this.state = { text: '' };
	}

	handleTextChange(text) {
		this.setState({
			text: text
		});
	}

	render() {
		return (
			<View style={style.view}>
				<Text style={style.input}>Welcome to Digi Dino!</Text>
				<Text style={style.input}>Please give your dinosaur a name below</Text>
				<TextInput
					style={style.input}
					placeholder="TYPE NAME HERE"
					placeholderTextColor={colors.midgreen}
					onChangeText={(text) => this.handleTextChange(text)}
					value={this.state.text}
				/>
				<Button
					onPress={() => this.props.onSubmit(this.state.text)}
					title="Save"
					backgroundStyle={style.buttonBackground}
					textStyle={style.buttonText}
				/>
			</View>
		);
	}
}

export default DinoName;
