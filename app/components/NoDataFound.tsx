import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import React from 'react';

interface props {
  style?: ViewStyle;
  text?: string;
  textStyle?: TextStyle;
}

const NoDataFound: React.FunctionComponent<props> = ({...props}) => {
  return (
    <View style={[StylesNo.continer, props.style]}>
      <Text style={props.textStyle}>
        {props.text ? props.text : `list is Empty`}
      </Text>
    </View>
  );
};

export default NoDataFound;

const StylesNo = StyleSheet.create({
  continer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
