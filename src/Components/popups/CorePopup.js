import React, {useState, useEffect, useRef} from 'react';
import {View, Animated, Modal, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import theme from 'theme';

const ModalPopup = ({visible, children}) => {
  const [showModal, setShowModal] = useState(visible);
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    toggleModal();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <Modal
      transparent
      visible={showModal}
      supportedOrientations={[
        'portrait',
        'landscape',
        'landscape-left',
        'landscape-right',
      ]}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const CorePopup = ({children, visible}) => {
  return <ModalPopup visible={visible}>{children}</ModalPopup>;
};

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContainer: {
    display: 'flex',
    width: '90%',
    backgroundColor: theme.colors.grey.background,
    borderRadius: moderateScale(10),
    elevation: 20,
  },
});

export default CorePopup;
