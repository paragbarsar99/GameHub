import {useCallback, useState} from 'react';
import {useAppDispatch} from 'store/StoreType';
import auth from '@react-native-firebase/auth';
import {setAuthToken} from 'store/AuthReducer';
import ToastMessage from 'components/ToastMessage';
const useUser = () => {
  const [loading, setLoading] = useState(false);

  const appDispatch = useAppDispatch();

  const onUserLogout = useCallback(async () => {
    try {
      const user = auth().currentUser?.uid;
      setLoading(true);
      if (user) {
        auth()
          .signOut()
          .then(_ => {
            appDispatch(setAuthToken(false));
          });
      }
    } catch (error) {
      ToastMessage({
        type: 'error',
        text1: error?.message || 'Something went wrong please try again!',
      });
    } finally {
      setLoading(false);
    }
  }, [appDispatch]);
  return {
    onUserLogout,
    loading,
  };
};

export default useUser;
