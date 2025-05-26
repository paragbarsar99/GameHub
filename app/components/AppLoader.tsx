import {Modal, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import Loader from './Loader';
import {hp, wp} from 'styles/Dimensions';

const AppLoader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setShow(false);
    }, 2000);
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <Modal visible={show} transparent={false} animationType="slide">
      <Loader color="#000" style={styles.container} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: hp(100),
    width: wp(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppLoader;
