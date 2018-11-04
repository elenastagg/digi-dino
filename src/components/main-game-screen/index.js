import React, { Component } from 'react';
import {
  TouchableHighlight,
  Modal, View,
  Text,
  Dimensions,
} from 'react-native';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { LinearGradient } from 'expo';
import colors from '../colors';
import style from './styles';
import PetScreen from '../pet-screen';
import CareIcon from '../icon';

// import SvgExample from '../custom-icons/custom-icons';

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
      colors: morning,
    };

    this.backgroundInterval = window.setInterval(() => {
      this.setState({
        colors: times[(times.indexOf(this.state.colors) + 1) % times.length],
      });
    }, 10000);
    props.setDayInterval();
  }

  componentWillUnmount() {
    window.clearInterval(this.backgroundInterval);
  }

  render() {
    const barWidth = (Dimensions.get('screen').width / 2) - 30;
    const progressCustomStyle = {
      backgroundColor: colors.white,
      borderRadius: 10,
      borderColor: colors.white,
    };
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

        {/* Progress bar container1 starts */}
        <View style={style.container}>

          {/* Row 1 */}
          <View style={style.row}>
            <View style={style.column}>
              <Text style={style.actionLabel}>
                Fullness
              </Text>
              <ProgressBarAnimated
                {...progressCustomStyle}
                width={barWidth}
                value={this.props.dinosaur.fullness}
              />
            </View>
            <View style={style.column}>
              <Text style={style.nameStyle}>
                {this.props.dinosaur.name}
              </Text>
            </View>
          </View>

          {/* Row 2 */}
          <View style={style.row}>
            <View style={style.column}>
              <Text style={style.actionLabel}>
                Fitness
              </Text>
              <ProgressBarAnimated
                {...progressCustomStyle}
                width={barWidth}
                value={this.props.dinosaur.fitness}
              />
            </View>
            <View style={style.column}>
              <Text style={style.actionLabel}>
                Energy
              </Text>
              <ProgressBarAnimated
                {...progressCustomStyle}
                width={barWidth}
                value={this.props.dinosaur.energy}
              />
            </View>
          </View>

          {/* Row 3 */}
          <View style={style.row}>
            <View style={style.column}>
              <Text style={style.actionLabel}>
                Social
              </Text>
              <ProgressBarAnimated
                {...progressCustomStyle}
                width={barWidth}
                value={this.props.dinosaur.social}
              />
            </View>
            <View style={style.column}>
              <Text style={style.actionLabel}>
                Cleanliness
              </Text>
              <ProgressBarAnimated
                {...progressCustomStyle}
                width={barWidth}
                value={this.props.dinosaur.cleanliness}
              />
            </View>
          </View>
          {/* end of progress bars container 1 */}
        </View>

        {/* Dinosaur container2 starts */}
        <View style={style.container2}>
          <View style={style.petScreenContainer}>
            <PetScreen />
          </View>
        </View>
        {/* Dinosaur container2 ends */}

        {/* Icon container3 starts */}
        <View style={style.container3}>

          {/* Row 1 */}
          <View style={style.iconRow}>
            <CareIcon
              name="cutlery"
              type="font-awesome"
              onPress={() => this.props.onPress('feed')}
            />
            <CareIcon
              name="soccer-ball-o"
              type="font-awesome"
              onPress={() => this.props.onPress('play')}
            />
            <CareIcon
              name="bed"
              type="font-awesome"
              onPress={() => this.props.onPress('bedTime')}
            />
          </View>

          {/* Row 2 */}
          <View style={style.iconRow}>
            <CareIcon
              name="chat"
              type="entypo"
              onPress={() => this.props.onPress('socialise')}
            />
            <CareIcon
              name="emoticon-poop"
              type="material-community"
              onPress={() => this.props.onPress('pooperScooper')}
            />
          </View>
          {/* Icon container3 ends */}
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.modalVisible}
        >
          <View style={style.container4}>
            <View>
              <Text style={style.message1}>{this.props.errorMessage}</Text>
            </View>
            <TouchableHighlight
              onPress={this.props.gameEnds}
            >
              <View style={{ paddingTop: 50 }}>
                <Text style={style.message2}>
                  Start New Game
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </Modal>
      </View>
    );
  }
}

export default MainGameScreen;
