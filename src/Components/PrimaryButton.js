import React from 'react';
import {TouchableHighlight, StyleSheet} from 'react-native';
import Text from '../Components/Text';

const PrimaryButton = ({text, onPress, style, textStyle, disabled}) => {
  return (
    <TouchableHighlight
      style={[styles.primaryButton, style]}
      onPress={onPress}
      underlayColor="#cac7c6"
      disabled={disabled}>
      <Text style={[styles.primaryButtonText, textStyle]}> {text} </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: '#2DAC59',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: 10,
  },

  primaryButtonText: {
    fontSize: 16,
    color: '#F6F9FC',
    margin: 15,
  },
});

export default PrimaryButton;