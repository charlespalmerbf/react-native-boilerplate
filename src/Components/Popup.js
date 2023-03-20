import React, {useState, useEffect, useRef} from 'react';
import {View, Animated, Modal, StyleSheet} from 'react-native';

import Text from 'components/Text';
import PrimaryButton from 'components/PrimaryButton';

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

const Popup = ({title, onDismiss}) => {
  return (
    <ModalPopup visible={true}>
      <Text style={styles.title}>{title}</Text>
      <PrimaryButton text={'Close Popup'} onPress={onDismiss} />
    </ModalPopup>
  );
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
    backgroundColor: theme.colors.white,
    borderRadius: moderateScale(10),
    elevation: 20,
    maxHeight: '75%',
  },

  title: {
    marginVertical: 5,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Popup;
