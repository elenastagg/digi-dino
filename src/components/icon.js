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
        flex: 0,
        justifyContent: 'center',
      }
    }
    containerStyle={
      {
        backgroundColor: colors.midgreen,
        width: 63,
        height: 63,
        borderRadius: 600,
      }
    }
    onPress={props.onPress}
  />
);
export default CareIcon;
