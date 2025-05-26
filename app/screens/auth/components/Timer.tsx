import {StyleSheet, TextInput} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  Easing,
  ReduceMotion,
  runOnJS,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {lightTheme} from 'styles/FontsAndColor';
import {wp} from 'styles/Dimensions';
Animated.addWhitelistedNativeProps({text: true});
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const Timer = ({onTimerExpired}: {onTimerExpired: () => void}) => {
  const timeOutAnima = useSharedValue(60);

  const textInputRef = useAnimatedProps(() => {
    const time = `0${timeOutAnima.value.toFixed(0)}`;
    return {
      defaultValue: `00:${time.slice(-2)}`,
      text: `00:${time.slice(-2)}`,
    };
  });

  useEffect(() => {
    timeOutAnima.value = withTiming(
      1,
      {
        duration: 60000,
        easing: Easing.linear,
        reduceMotion: ReduceMotion.System,
      },
      finshed => {
        if (finshed) {
          runOnJS(onTimerExpired)();
        }
      },
    );
  }, [onTimerExpired, timeOutAnima]);

  return (
    <AnimatedTextInput
      animatedProps={textInputRef}
      editable={false}
      style={styles.font}
    />
  );
};

export default Timer;

const styles = StyleSheet.create({
  font: {
    fontFamily: lightTheme.fonts.txt_medium,
    fontSize: wp(3.8),
    color: lightTheme.colors.btn_black,
    justifyContent: 'flex-start',

    textAlign: 'center',

    alignSelf: 'center',
  },
});
