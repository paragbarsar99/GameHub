import {StyleSheet, View, ViewStyle, StyleProp, ViewProps} from 'react-native';
import React, {Component} from 'react';

interface RowProps extends ViewProps {
  style?: StyleProp<ViewStyle> | undefined;
  children: React.ReactNode;
}

const Row: React.FunctionComponent<RowProps> = ({
  style,
  children,
  ...props
}) => {
  return (
    <View style={[styles.rowContainer, style]} {...props}>
      {children}
    </View>
  );
};

export class AnimatedRow extends Component<RowProps> {
  render() {
    const {style, children, ...props} = this.props;
    return (
      <View style={[styles.rowContainer, style]} {...props}>
        {children}
      </View>
    );
  }
}
export default Row;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
