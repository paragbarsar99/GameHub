import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppIndex from 'AppIndex';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from 'store/StoreIndex';
import Toast from 'react-native-toast-message';
import {toastConfig} from 'components/ToastMessage';
import AppLoader from 'components/AppLoader';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <GestureHandlerRootView style={styles.container}>
        <NavigationContainer>
          <AppLoader />
          <AppIndex />
          <Toast config={toastConfig} />
        </NavigationContainer>
      </GestureHandlerRootView>
    </ReduxProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default App;
