/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Toast, {
  ToastOptions,
  ToastData,
  BaseToastProps,
} from 'react-native-toast-message';

import {lightTheme} from 'styles/FontsAndColor';
import {StyleSheet, Text} from 'react-native';
import Row from './Row';
import {IS_IOS, hp, wp} from 'styles/Dimensions';
import {SvgXml} from 'react-native-svg';
import {CHECK, CLOSERED} from 'constants/Icons';

/*
  1. Create the config
*/

export interface TCustomToastProps extends BaseToastProps {
  icon?: string;
  uri?: string;
}

export const ACTION_OKAY = {
  text: 'Ok',
  textColor: 'white',
  onPress: () => Toast.hide(),
};

export interface SnackBarOptions
  extends ToastOptions,
    ToastData,
    TCustomToastProps {}

export const toastConfig = {
  success: (props: SnackBarOptions) => (
    <Row style={styles.snakbarcontiner}>
      <SvgXml xml={props.props?.icon || CHECK} />
      <Text style={styles.text}>{props.text1}</Text>
    </Row>
  ),

  error: (props: SnackBarOptions) => (
    <Row style={styles.snakbarcontiner}>
      <SvgXml xml={props.props?.icon || CLOSERED} />
      <Text style={styles.text}>{props.text1}</Text>
    </Row>
  ),
};

const ToastMessage = ({
  position = 'top',
  text1Style = {
    fontFamily: lightTheme.fonts.txt_bold,
    color: lightTheme.colors.primary,
  },
  text2Style = {
    fontFamily: lightTheme.fonts.txt_bold,
    color: lightTheme.colors.primary,
  },
  ...props
}: SnackBarOptions) => {
  Toast.show({
    position,
    topOffset: IS_IOS ? 60 : 40,
    text1Style,
    text2Style,
    ...props,
  });
};

const styles = StyleSheet.create({
  snakbarcontiner: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: lightTheme.colors.primary_100,
    paddingLeft: wp(3),
    paddingRight: wp(3),
    maxWidth: wp(90),
    minWidth: wp(90),
    paddingVertical: hp(1.8),
    backgroundColor: lightTheme.colors.btn_white,
    gap: wp(3),
  },
  text: {
    flex: 1,
    // textTransform: 'capitalize',
  },
  uploadContainer: {
    overflow: 'hidden',
    flex: 1,
    height: hp(30),
    width: wp(35),
    alignSelf: 'flex-start',
    left: wp(4),
  },
  imgContainer: {
    borderRadius: 20,
    flex: 1,
  },
  // warningContainer: {
  //   justifyContent: 'flex-start',
  //   alignItems: 'center',
  //   borderRadius: 8,
  //   borderWidth: 2,
  //   borderColor: lightTheme.colors.yellow_700,
  //   paddingLeft: wp(3),
  //   paddingRight: wp(3),
  //   maxWidth: wp(90),
  //   minWidth: wp(90),
  //   paddingVertical: hp(1.8),
  //   backgroundColor: lightTheme.colors.btn_white,
  //   gap: wp(3),
  // },
});

export default ToastMessage;
