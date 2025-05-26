import {Text} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import Container from 'components/Container';
import Styles from './Styles';
import auth from '@react-native-firebase/auth';
import {useAppDispatch} from 'store/StoreType';
import {setAuthToken} from 'store/AuthReducer';
import Button from 'components/Button';

import useGoogleSignin from 'hooks/useGoogleSignIn';
import {GOOGLE} from 'constants/Icons';

export const Login = () => {
  const {isloading, onGoogleSign} = useGoogleSignin();

  const appDispatch = useAppDispatch();

  const onVerify = useCallback(() => {
    appDispatch(setAuthToken(true));
  }, [appDispatch]);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        onVerify();
      }
    });
    return () => {
      unsubscribe();
    };
  }, [onVerify]);

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
