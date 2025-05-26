import {Text} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import Container from 'components/Container';
import Styles from './Styles';
import auth from '@react-native-firebase/auth';
import ToastMessage from 'components/ToastMessage';
import {useAppDispatch} from 'store/StoreType';
import {setAuthToken} from 'store/AuthReducer';
import Button from 'components/Button';

import useGoogleSignin from 'hooks/useGoogleSignIn';
import {GOOGLE} from 'constants/Icons';

export const Login = () => {
  const {isloading, onGoogleSign} = useGoogleSignin();

  const appDispatch = useAppDispatch();

  const onPhoneVerify = useCallback(() => {
    appDispatch(setAuthToken(true));
  }, [appDispatch]);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        onPhoneVerify();
      }
    });
    return () => {
      unsubscribe();
    };
  }, [onPhoneVerify]);

  const signInWithGoogle = () =>
    onGoogleSign(async creads => {
      console.error(creads);
      if (!creads.userInfo?.idToken) {
        return;
      }
      const googleCredential = auth.GoogleAuthProvider.credential(
        creads.userInfo?.idToken,
      );
      await auth().signInWithCredential(googleCredential);
    });

  return (
    <Container style={[Styles.container, {justifyContent: 'center'}]}>
      <Text style={[Styles.heading, Styles.align_center]}>GameSnips</Text>
      <Button
        icon={GOOGLE}
        label="Google SignIn"
        buttonStyle={Styles.googleSign}
        onPress={() => signInWithGoogle()}
        loading={isloading}
      />
    </Container>
  );
};

/**
 *   // Step 1: Send OTP
    const signInWithPhoneNumber = async (forceResend: boolean = true) => {
      try {
        if (!mobileValid(phone)) {
          ToastMessage({
            type: 'error',
            text1: 'In Valid Phone Number',
          });
          return;
        }
  
        setLoading(true);
        const confirmation = await auth().signInWithPhoneNumber(
          `${COUNTRY_CODE}${phone}`,
          forceResend,
        );
        ToastMessage({
          type: 'success',
          text1: 'Otp Send Successfully',
        });
        setConfirm(confirmation);
      } catch (error) {
        console.log(error);
        handleVerificationError(error);
      } finally {
        setLoading(false);
      }
    };
  
    // Step 2: Confirm OTP
    const confirmCode = async () => {
      if (!code) {
        ToastMessage({
          type: 'error',
          text1: 'InValid Otp',
        });
        return;
      }
      setLoading(true);
      try {
        await confirm?.confirm(code);
      } catch (error) {
        handleVerificationError(error);
      }
      setLoading(false);
    };
  
  const handleVerificationError = (error: {code: string}) => {
    switch (error.code) {
      case 'auth/invalid-verification-code': {
        ToastMessage({
          type: 'error',
          text1: 'Invalid verification code!',
        });

        break;
      }
      case 'auth/code-expired': {
        ToastMessage({
          type: 'error',
          text1: 'The verification code has expired.',
        });

        break;
      }
      case 'auth/invalid-phone-number': {
        ToastMessage({
          type: 'error',
          text1: 'Invalid phone number!',
        });

        break;
      }
      case 'auth/too-many-requests': {
        ToastMessage({
          type: 'error',
          text1:
            'Too many requests have been made from this device. Please wait a while before trying again.',
        });
        break;
      }
      case 'auth/user-not-found': {
        ToastMessage({
          type: 'error',
          text1: 'User does not exist.',
        });
        break;
      }
      case 'auth/session-expired': {
        break;
      }
      default: {
        // console.log(error.code, ' error.code');
        ToastMessage({
          type: 'error',
          text1: 'An error occurred please try later!',
        });

        break;
      }
    }
  };
  const onResendOtp = () => {
    setResend(true);
    signInWithPhoneNumber();
  };
  const onTimerExpired = () => {
    setResend(false);
  };

 */

/* <Text style={Styles.subHeading}>
        {' '}
        {confirm ? 'Verify Otp' : 'Phone Login'}{' '}
      </Text>
      {!confirm ? (
        <>
          <Input
            containerStyle={Styles.input}
            placeholder="enter phone number"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
            inputMode="decimal"
          />
          <Button
            onPress={() => signInWithPhoneNumber()}
            label="Send OTP"
            loading={loading}
            buttonStyle={{
              maxHeight: hp(7),
            }}
          />
        </>
      ) : (
        <>
          <Pin otppassword={code} pinCount={6} handleCodeEntered={setCode} />
          <Button
            onPress={confirmCode}
            loading={loading}
            label="Verify Otp"
            buttonStyle={{
              maxHeight: hp(7),
            }}
          />
          <View style={{}}>
            {isResentOTP ? (
              <Timer onTimerExpired={onTimerExpired} />
            ) : (
              <Text
                style={[Styles.subHeading, Styles.align_center]}
                onPress={onResendOtp}>
                Resend
              </Text>
            )}
            <Text
              style={[Styles.subHeading, Styles.align_center]}
              onPress={() => {
                setResend(false);
                setConfirm(null);
              }}>
              Change Phone
            </Text>
          </View>
        </>
      )} */
