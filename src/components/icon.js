import React from 'react';
import colors from '../../styles/colors';
import { Icon } from 'react-native-elements';
import { View } from 'react-native';

const CareIcon = props => (
    <Icon
      raised
      name={props.name}
      type={props.type}
      color={colors.blue}
      iconStyle={
        {
          padding: 1,
          fontSize: 42,
        }
      }
      containerStyle={
        {
          backgroundColor: colors.white,
          margin: 20,
        }
      }
      onPress={props.onPress}
    />
);
export default CareIcon;
