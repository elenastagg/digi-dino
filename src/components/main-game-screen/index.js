import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { LinearGradient } from 'expo';
import colors from '../../../styles/colors';
import Dinosaur from '../../digi-dino';
import style from './styles';
import PetScreen from '../PetScreen';
import CareIcon from '../icon';

const evening = [colors.darkblue, colors.blue, colors.darkgreen];
const day = [colors.blue, colors.lightblue, colors.midgreen];
const morning = [
  '#FF7897', '#FF947B', '#FFB566', '#FFD760', '#fedc77', '#fde08e', '#fce5a3', '#fae9b9',
  '#78C664', '#2FAB63', '#008E63',
];

const times = [morning, day, evening];

class MainGameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Dinosaur: new Dinosaur(props.navigation.getParam('name')),
      colors: morning,
    };
    window.setInterval(() => {
      this.state.Dinosaur.dayPasses();
      this.setState({
        Dinosaur: this.state.Dinosaur,
        colors: times[times.indexOf(this.state.colors) + 1],
      });
    }, 3000);
  }


  handlePress(action) {
    this.state.Dinosaur[action]();
    this.setState({
      Dinosaur: this.state.Dinosaur,
    });
  }

  render() {
    const barWidth = (Dimensions.get('screen').width / 2) - 30;
    const progressCustomStyle = {
      backgroundColor: colors.white,
      borderRadius: 10,
      borderColor: colors.white,
    };

    // componentDidMount(dayPasses)
    return (
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={this.state.colors}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
        />
        <View style={style.container}>
          <View style={style.row}>
            <View style={style.column}>
              <Text style={style.actionLabel}>
                Fullness
              </Text>
              <ProgressBarAnimated
                {...progressCustomStyle}
                width={barWidth}
                value={this.state.Dinosaur.fullness}
              />
            </View>
            <View style={style.column}>
              <Text style={style.nameStyle}>
                {this.state.Dinosaur.name}
              </Text>
            </View>
          </View>

          <View style={style.row}>
            <View style={style.column}>
              <Text style={style.actionLabel}>
                Fitness
              </Text>
              <ProgressBarAnimated
                {...progressCustomStyle}
                width={barWidth}
                value={this.state.Dinosaur.fitness}
              />
            </View>
            <View style={style.column}>
              <Text style={style.actionLabel}>
                Energy
              </Text>
              <ProgressBarAnimated
                {...progressCustomStyle}
                width={barWidth}
                value={this.state.Dinosaur.energy}
              />
            </View>
          </View>

          <View style={style.row}>
            <View style={style.column}>
              <Text style={style.actionLabel}>
                Social
              </Text>
              <ProgressBarAnimated
                {...progressCustomStyle}
                width={barWidth}
                value={this.state.Dinosaur.social}
              />
            </View>
            <View style={style.column}>
              <Text style={style.actionLabel}>
                Cleanliness
              </Text>
              <ProgressBarAnimated
                {...progressCustomStyle}
                width={barWidth}
                value={this.state.Dinosaur.cleanliness}
              />
            </View>
          </View>
        </View>
        <View style={style.container2}>
          <View style={style.petScreenContainer}>
            <PetScreen />
          </View>
          <View>
          <CareIcon
            name="food"
            type="material-community"
            onPress={() => this.handlePress('feed')}
          />
          <CareIcon
            name="food"
            type="material-community"
            onPress={() => this.handlePress('play')}
          />
          <CareIcon
            name="food"
            type="material-community"
            onPress={() => this.handlePress('bedTime')}
          />
          <CareIcon
            name="food"
            type="material-community"
            onPress={() => this.handlePress('socialise')}
          />
          <CareIcon
            name="food"
            type="material-community"
            onPress={() => this.handlePress('pooperScooper')}
          />
          </View>
        </View>
      </View>
    );
  }
}

export default MainGameScreen;
