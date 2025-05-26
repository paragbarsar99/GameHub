import React, {useState} from 'react';
import {
  KeyboardType,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

import {lightTheme} from 'styles/FontsAndColor';

const Input: React.FC<CustomInputProps & TextInputProps> = ({
  leftPart,
  rightPart,
  mandatory,
  title,
  placeholder,
  multiline,
  keyboardType,
  editable,
  maxLength,
  flex,
  style,
  containerStyle,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const onFocusInput = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);
    rest?.onFocus?.(e);
  };

  const onBlurInput = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    rest?.onBlur?.(e);
  };
  return (
    <View style={[styles.wrapper, {flex}, containerStyle]}>
      {title && (
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{title}</Text>
          {mandatory && <Text style={styles.mandatory}> *</Text>}
        </View>
      )}
      <View
        style={[styles.container, isFocused && styles.active, containerStyle]}>
        {leftPart && <View style={styles.leftIcon}>{leftPart}</View>}
        <TextInput
          placeholder={placeholder}
          style={[styles.input, style]}
          onFocus={onFocusInput}
          onBlur={onBlurInput}
          multiline={multiline}
          keyboardType={keyboardType === 'numeric' ? 'numeric' : 'default'}
          editable={editable}
          maxLength={maxLength}
          placeholderTextColor={lightTheme.colors.gray_text}
          {...rest}
        />
        {rightPart && <View style={styles.rightIcon}>{rightPart}</View>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'transparent',
    width: '100%',
    paddingVertical: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: lightTheme.colors.gray_400,
    borderRadius: 7.5,
    // height: 44,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 18,
    color: lightTheme.colors.btn_black,
    fontFamily: lightTheme.fonts.txt_medium,
  },
  mandatory: {
    color: 'red',
    fontSize: 16,
    lineHeight: 18,
    fontFamily: lightTheme.fonts.txt_medium,
  },
  active: {
    borderColor: lightTheme.colors.btn_black,
  },
  leftIcon: {
    borderRightWidth: 1,
    borderColor: lightTheme.colors.btn_black,
    height: '100%',
    width: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightIcon: {
    borderLeftWidth: 1,
    borderColor: lightTheme.colors.btn_black,
    height: '100%',
    minWidth: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: lightTheme.colors.btn_black,
    borderTopRightRadius: 7.5,
    borderBottomRightRadius: 7.5,
  },
  input: {
    flex: 1,
    height: 44,
    paddingHorizontal: 10,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    color: lightTheme.colors.btn_black,
    fontFamily: lightTheme.fonts.txt_medium,
  },
});

export default Input;

type CustomInputProps = {
  leftPart?: React.ReactNode;
  rightPart?: React.ReactNode;
  mandatory?: boolean;
  title?: string;
  placeholder?: string;
  multiline?: boolean;
  keyboardType?: KeyboardType;
  editable?: boolean;
  maxLength?: number;
  flex?: number;
  containerStyle: ViewStyle;
};
