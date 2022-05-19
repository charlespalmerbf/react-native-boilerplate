import React from 'react';
import {Text, StyleSheet} from 'react-native';

const CustomText = ({children, style}) => {
  return <Text style={[styles.fixedStyle, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  fixedStyle: {
    color: '#202020',
  },
});

export default CustomText;
