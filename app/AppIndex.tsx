import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStackNavigator from 'routes/AuthNavigation';
import MainNavigator from 'routes/MainNavigation';
import {useAppSelector} from 'store/StoreType';
import {selectIsAuthToken} from 'store/AuthReducer';

const Stack = createNativeStackNavigator();

const AppIndex = () => {
  const token = useAppSelector(selectIsAuthToken);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {token ? (
        <Stack.Screen name="main" component={MainNavigator} />
      ) : (
        <Stack.Screen name="auth" component={AuthStackNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default AppIndex;
