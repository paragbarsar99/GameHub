import {View, ActivityIndicator, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';
import {lightTheme} from 'styles/FontsAndColor';

type TAppLoader = {
  size?: 'large' | 'small';
  color?: string;
  style?: ViewStyle;
};
const Loader: React.FC<TAppLoader> = ({
  size = 'large',
  color = lightTheme.colors.btn_white,
  ...props
}) => {
  return (
    <View style={[styles.container, props.style]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default Loader;
