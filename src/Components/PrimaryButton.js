import React from 'react';
import {TouchableHighlight, StyleSheet} from 'react-native';
import Text from 'components/Text';

const PrimaryButton = ({children, onPress, style, disabled}) => {
  return (
    <TouchableHighlight
      style={[styles.primaryButton, style]}
      onPress={onPress}
      underlayColor="#cac7c6"
      disabled={disabled}
    >
      {children}
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: '#2DAC59',
    borderRadius: 50,
    alignItems: 'center',
    width: '100%',
    margin: '4%',
    padding: 12
  },
});

export default PrimaryButton;
