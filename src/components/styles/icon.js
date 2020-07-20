import React from "react";
import { colors } from "./colors";
import { Icon } from "react-native-elements";

const CareIcon = (props) => (
  <Icon
    raised
    name={props.name}
    type={props.type}
    color={colors.midgreen}
    iconStyle={{
      fontSize: 30,
      opacity: 1,
    }}
    containerStyle={{
      backgroundColor: colors.white,
      width: 80,
      height: 60,
      borderRadius: 20,
      justifyContent: "center",
      alignContent: "center",
      padding: 15,
      opacity: 0.8,
      flex: 0,
    }}
    onPress={props.onPress}
  />
);
export default CareIcon;
