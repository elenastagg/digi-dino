import React from 'react';
import colors from '../../styles/colors';
import Button from './Button';
import {
  View,
  StyleSheet,
  Dimensions,
  Alert,
  Text,
} from 'react-native';

import ProgressBarAnimated from 'react-native-progress-bar-animated';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    width: '100%',
    marginTop: 5,
    padding: 10,
  },
  buttonBackground: {
    backgroundColor: colors.midgreen,
    width: 90,
  },
  // separator: {
  //   marginVertical: 30,
  //   borderWidth: 0.5,
  //   borderColor: '#DCDCDC',
  // },
  label: {
    color: '#fff',
    fontSize: 14,
    // fontWeight: '500',
    marginBottom: 10,
  },
});

export default class ProgressBar extends React.Component {

  state = {
    progress: 20,
    progressWithOnComplete: 0,
    progressCustomized: 0,
  };

  increase = (key, value) => {
    this.setState({
      [key]: this.state[key] + value,
    });
  };

  render() {
    const barWidth = Dimensions.get('screen').width - 30;
    const progressCustomStyles = {
      backgroundColor: 'red',
      borderRadius: 0,
      borderColor: 'orange',
    };

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.label}>Bar with backgroundColorOnComplete prop</Text>
          <ProgressBarAnimated
            width={barWidth}
            value={this.state.progress}
            backgroundColorOnComplete="#6CC644"
          />
          <View style={styles.buttonBackground}>
            <View style={styles.buttonInner}>
              <Button
                backgroundStyle={styles.buttonBackground}
                title="Increase 20%"
                onPress={() =>this.increase('progress', 20)}
              />
            </View>
          </View>
        </View>
        <View style={styles.separator} />
        <View>
          <Text style={styles.label}>Bar with onComplete event</Text>
          <ProgressBarAnimated
            width={barWidth}
            value={this.state.progressWithOnComplete}
            onComplete={() => {
              Alert.alert('Hey!', 'onComplete event fired!');
            }}
          />
          <View style={styles.buttonBackground}>
            <View style={styles.buttonInner}>
              <Button
                title="Increase 50%"
                onPress={this.increase.bind(this, 'progressWithOnComplete', 50)}
              />
            </View>
          </View>
        </View>
        <View style={styles.separator} />
        <View>
          <Text style={styles.label}>Custom style with max value in 30%</Text>
          <ProgressBarAnimated
            {...progressCustomStyles}
            width={barWidth}
            maxValue={30}
            value={this.state.progressCustomized}
          />
          <View style={styles.buttonBackground}>
            <View style={styles.buttonInner}>
              <Button
                title="Increase 10%"
                onPress={this.increase.bind(this, 'progressCustomized', 10)}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}



<ProgressBarAnimated
            width={barWidth}
            value={this.state.Dinosaur.fitness}
            backgroundColorOnComplete="#6CC644"
          />
          <ProgressBarAnimated
            width={barWidth}
            value={this.state.Dinosaur.energy}
            // backgroundColorOnComplete="#6CC644"
          />
          <ProgressBarAnimated
            width={barWidth}
            value={this.state.Dinosaur.social}
            // backgroundColorOnComplete="#6CC644"
          />
          <ProgressBarAnimated
            width={barWidth}
            value={this.state.Dinosaur.cleanliness}
            // backgroundColorOnComplete="#6CC644"
          />








