import React, {PropsWithChildren} from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {Edge, EdgeMode, SafeAreaView} from 'react-native-safe-area-context';
import {lightTheme} from 'styles/FontsAndColor';

interface Props extends ViewProps, PropsWithChildren {
  edges?: Record<Edge, EdgeMode>;
}

const Container: React.FunctionComponent<Props> = ({
  style,
  edges,
  ...props
}) => {
  return (
    <SafeAreaView edges={edges} style={styles.container}>
      <View style={[styles.container, style]} {...props}>
        {props?.children}
      </View>
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.colors.btn_white,
  },
});
