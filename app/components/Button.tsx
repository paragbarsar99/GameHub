import {
  ViewStyle,
  StyleProp,
  Pressable,
  ActivityIndicator,
  Text,
  TextStyle,
  Image,
  GestureResponderEvent,
  ImageStyle,
  StyleSheet,
} from 'react-native';
import React from 'react';

import {SvgXml, XmlProps} from 'react-native-svg';
import Animated, {
  AnimatedProps,
  StyleLayoutAnimation,
} from 'react-native-reanimated';
import {lightTheme} from 'styles/FontsAndColor';
import {hp, wp} from 'styles/Dimensions';
type props = {
  label?: string;
  children?: React.ReactElement | React.ReactElement[];
  lableStyle?: TextStyle;
  containerStyle?: StyleProp<ViewStyle>;
  onPress: (event?: GestureResponderEvent) => void;
  disabled?: boolean;
  loading?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  icon?: string;
  loaderSize?: 'small' | 'large';
  loaderColor?: string;
  iconType?: 'svg' | 'png';
  iconStyles?: Partial<ImageStyle | XmlProps>;
} & AnimatedProps<Partial<StyleLayoutAnimation>>;

type Color =
  | 'primary'
  | 'black'
  | 'white'
  | 'red'
  | 'warning'
  | 'primary_border'
  | 'gray'
  | 'green_500';

type TButton = {
  variants: Color;
};
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const Button = React.forwardRef<props, props>(({onPress, ...props}, ref) => {
  return (
    <AnimatedPressable
      ref={ref}
      disabled={props.disabled || props.loading}
      onPress={onPress}
      style={[styles.buttonDefaultStyle, props.buttonStyle]}
      {...props}>
      {props.loading ? (
        <ActivityIndicator
          color={
            props.variants === 'primary'
              ? '#fff'
              : props.variants === 'black'
              ? '#fff'
              : '#000'
          }
          size={'large'}
        />
      ) : props.children ? (
        props.children
      ) : (
        <>
          {props.icon && (
            <>
              {props.iconType === 'png' ? (
                <Image
                  resizeMode="contain"
                  source={props.icon}
                  style={[styles.iconContainer]}
                />
              ) : (
                <SvgXml {...props.iconStyles} xml={props.icon} />
              )}
            </>
          )}
          {props.label && (
            <Text numberOfLines={1} style={[styles.label, props.lableStyle]}>
              {props.label}
            </Text>
          )}
        </>
      )}
    </AnimatedPressable>
  );
});

const styles = StyleSheet.create({
  iconContainer: {
    width: '100%',
    height: '100%',
  },
  buttonDefaultStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    height: hp(7),

    flexDirection: 'row',
    gap: wp(3),
    flex: 1,
    backgroundColor: lightTheme.colors.btn_green,
    borderColor: lightTheme.colors.green_200,
    borderWidth: 2,
  },
  label: {
    textTransform: 'capitalize',
    fontFamily: lightTheme.fonts.txt_semibold,
    color: lightTheme.colors.btn_white,
    fontSize: wp(4.2),
  },
});

export default Button;
