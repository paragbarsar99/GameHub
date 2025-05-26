import {useState} from 'react';

import {
  GoogleSignin,
  User,
  statusCodes,
  isErrorWithCode,
} from '@react-native-google-signin/google-signin';
import SnackBar from 'components/ToastMessage';
import Config from 'react-native-config';

GoogleSignin.configure({
  webClientId: Config.WEB_CLIENTID, // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
});
// console.error(Config.WEB_CLIENTID, ' Config.WEB_CLIENTID');
type TGoogleResonse = {
  userInfo: User | null;
  error: string | undefined;
};

export default function useGoogleSignin() {
  const [user, setState] = useState<TGoogleResonse>();
  const [isloading, setIsLoading] = useState(false);
  const onGoogleSign = async (callback: (result: TGoogleResonse) => void) => {
    try {
      setIsLoading(true);
      const hasService = await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      // console.error(hasService, ' hasService');

      await GoogleSignin.signOut();
      setState(undefined);

      if (hasService) {
        const userInfo = await GoogleSignin.signIn();

        setState({
          error: undefined,
          userInfo: {
            ...userInfo.data,
          },
        });
        callback?.({
          userInfo: {
            ...userInfo.data,
          },
          error: undefined,
        });
      }
    } catch (error) {
      console.error(error.code);
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.SIGN_IN_CANCELLED: {
            // user cancelled the login flow
            SnackBar({
              type: 'error',
              text1: 'user canceled the login flow',
            });
            break;
          }
          case statusCodes.IN_PROGRESS: {
            // operation (eg. sign in) already in progress
            break;
          }
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE: {
            SnackBar({
              type: 'error',
              text1: 'Play Service is not available!',
            });
            // play services not available or outdated
            break;
          }
          default: {
            SnackBar({
              type: 'error',
              text1: 'Something went wrong please try again!',
            });
          }
        }
      } else {
        SnackBar({
          type: 'error',
          text1: 'Something went wrong please try again!',
        });
      }
    } finally {
      setIsLoading(false);
    }
  };
  const onGoogleSignOut = async (callback?: () => void) => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      callback?.();
    } catch (error) {}
  };
  return {
    onGoogleSignOut,
    onGoogleSign,
    user,
    isloading,
  };
}
