import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const PrimaryTextInput = props => {
  return (
    <TextInput
      {...props}
      style={[styles.input, props.style]}
      mode="outlined"
      theme={{colors: {primary: 'grey'}, roundness: props.roundness}}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: 'lightgrey',
    marginBottom: 10,
  },
});

export default PrimaryTextInput;
