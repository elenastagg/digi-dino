import React, { Component } from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import Animation from './Animation';

// Get the width of the device's screen
// Set the width of PetScreen to 80% of the devices screen
// Set the height of the PetScreen, equal to the width of the PetScreen
const { width } = Dimensions.get('window');
const gameScreenWidth = width / 100 * 80;

// StyleSheet
const styles = StyleSheet.create({
	petScreen: {
		overflow: 'hidden',
		height: gameScreenWidth,
		width: gameScreenWidth,
		alignSelf: 'center'
	}
});

// PetScreen component
class PetScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View style={styles.petScreen}>
				<Animation animationName={this.props.currentAction} />
			</View>
		);
	}

	componentDidUpdate() {}
}

export default PetScreen;
