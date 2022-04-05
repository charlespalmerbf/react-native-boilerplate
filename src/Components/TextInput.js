import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

const PrimaryTextInput = props => {
  return (
    <TextInput
      label={props.label}
      style={[styles.input, props.style]}
      mode="outlined"
      theme={{colors: {primary: 'grey'}, roundness: props.roundness}}
      value={props.value}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      secureTextEntry={props.secureTextEntry === true}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 500,
  },
  hidden: {
    opacity: 0.0,
  },
});

export default PrimaryTextInput;