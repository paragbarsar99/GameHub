import OTPInputView, {InputProps} from '@twotalltotems/react-native-otp-input';
import React, {useRef} from 'react';
import {StyleSheet} from 'react-native';
import {lightTheme} from 'styles/FontsAndColor';

interface props extends InputProps {
  otppassword: string;
  handleCodeEntered?: (otp: string) => void;
  onFulfill?: (otp: string) => void;
  pinCount: number;
}

const Pin: React.FC<props> = ({
  handleCodeEntered,
  otppassword,
  onFulfill,
  pinCount = 6,
  ...props
}) => {
  const ref = useRef<OTPInputView>(null);

  return (
    <OTPInputView
      ref={ref}
      keyboardType="number-pad"
      code={otppassword}
      style={PinStyle.container}
      codeInputFieldStyle={PinStyle.codeinput}
      pinCount={pinCount}
      onCodeChanged={handleCodeEntered}
      autoFocusOnLoad={true}
      placeholderTextColor={'#fff'}
      onCodeFilled={onFulfill}
      {...props}
    />
  );
};

const PinStyle = StyleSheet.create({
  container: {
    alignSelf: 'center',
    height: 50,
    borderWidth: 0,
    borderRadius: 30,
  },
  codeinput: {
    borderRadius: 14,
    borderWidth: 0,
    backgroundColor: lightTheme.colors.green_700,
    fontFamily: lightTheme.fonts.txt_semibold,
    color: '#fff',
  },
});
export default Pin;
