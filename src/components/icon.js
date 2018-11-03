import React from 'react';
import colors from './colors';
import { Icon } from 'react-native-elements';

const CareIcon = props => (
  <Icon
    reverse
    raised
    name={props.name}
    type={props.type}
    color={colors.blue}
    iconStyle={
      {
        fontSize: 36,
        padding: 10,
      }
    }
    containerStyle={
      {
        backgroundColor: colors.midgreen,
        width: 60,
        height: 60,
        borderRadius: 600,
        flex: 0,
        justifyContent: 'center',
        alignContent: 'center',
      }
    }
    onPress={props.onPress}
  />
);
export default CareIcon;
