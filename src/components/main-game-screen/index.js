import React, { Component } from "react";
import { TouchableOpacity, Modal, View, Text, Dimensions } from "react-native";
import ProgressBarAnimated from "../animated-progress-bar";
import { LinearGradient } from "expo-linear-gradient";
import { colors, morning, day, evening } from "../styles/colors";
import style from "../styles/layout";
import PetScreen from "../Animation/pet-screen";
import CareIcon from "../styles/icon";

class MainGameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: this.getBackground(new Date().getHours()),
    };

    this.backgroundInterval = window.setInterval(() => {
      const hour = new Date().getHours();

      if (hour === 0) {
        this.props.onNewDay();
      }

      this.setState({
        colors: this.getBackground(hour),
      });
    }, 1000 * 60 * 60);
  }

  componentWillUnmount() {
    window.clearInterval(this.backgroundInterval);
  }

  getBackground(hour) {
    if (hour >= 0 && hour < 7) {
      return evening;
    }
    if (hour >= 7 && hour < 13) {
      return morning;
    }
    if (hour >= 13 && hour < 19) {
      return day;
    }
    return evening;
  }

  getAnimationName() {
    // Gets animation name based on button(action) pressed
    switch (this.props.currentAction) {
      case "play":
        return "play";
      case "feed":
        return "eating";
      case "bedTime":
        return "sleep";
      case "socialise":
        return "talking";
      case "pooperScooper":
        return "poopScoop";
      default:
        return "normalState";
    }
  }

  render() {
    const barWidth = Dimensions.get("screen").width / 2 - 30;
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
            position: "absolute",
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
              <Text style={style.actionLabel}>Fullness</Text>
              <ProgressBarAnimated
                {...progressCustomStyle}
                width={barWidth}
                value={this.props.dinosaur.fullness}
              />
            </View>
            <View style={style.column}>
              <Text style={style.nameStyle}>{this.props.dinosaur.name}</Text>
            </View>
          </View>

          {/* Row 2 */}
          <View style={style.row}>
            <View style={style.column}>
              <Text style={style.actionLabel}>Fitness</Text>
              <ProgressBarAnimated
                {...progressCustomStyle}
                width={barWidth}
                value={this.props.dinosaur.fitness}
              />
            </View>
            <View style={style.column}>
              <Text style={style.actionLabel}>Energy</Text>
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
              <Text style={style.actionLabel}>Social</Text>
              <ProgressBarAnimated
                {...progressCustomStyle}
                width={barWidth}
                value={this.props.dinosaur.social}
              />
            </View>
            <View style={style.column}>
              <Text style={style.actionLabel}>Cleanliness</Text>
              <ProgressBarAnimated
                {...progressCustomStyle}
                width={barWidth}
                value={this.props.dinosaur.cleanliness}
              />
            </View>
          </View>
          {/* end of progress bars container 1 */}
        </View>

        {/* Icon container3 starts */}
        <View style={style.container3}>
          {/* Row 1 */}
          <View style={style.iconRow}>
            <CareIcon
              name="cutlery"
              type="font-awesome"
              onPress={() => this.props.onPress("feed")}
            />
            <CareIcon
              name="soccer-ball-o"
              type="font-awesome"
              onPress={() => this.props.onPress("play")}
            />
            <CareIcon
              name="bed"
              type="font-awesome"
              onPress={() => this.props.onPress("bedTime")}
            />
          </View>

          {/* Row 2 */}
          <View style={style.iconRow}>
            <CareIcon
              name="chat"
              type="entypo"
              onPress={() => this.props.onPress("socialise")}
            />
            <CareIcon
              name="emoticon-poop"
              type="material-community"
              onPress={() => this.props.onPress("pooperScooper")}
            />
          </View>
          {/* Icon container3 ends */}
        </View>

        {/* Dinosaur container2 starts */}
        <View style={style.container2}>
          <PetScreen animationName={this.getAnimationName()} />
        </View>
        {/* Dinosaur container2 ends */}

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.modalVisible}
        >
          <View style={style.container4}>
            <View>
              <Text style={style.message1}>{this.props.errorMessage}</Text>
            </View>
            <TouchableOpacity onPress={this.props.onGameEnds}>
              <View style={{ paddingTop: 50 }}>
                <Text style={style.message2}>Start New Game</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

export default MainGameScreen;
