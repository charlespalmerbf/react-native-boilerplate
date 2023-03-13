import React from 'react';
import {Text, StyleSheet} from 'react-native';

import theme from 'theme';

const CustomText = ({children, style, ...props}) => {
  return (
    <Text style={style} {...props}>
      {children}
    </Text>
  );
};

const BoldText = props => {
  return <CustomText style={styles.bold} {...props} />;
};
const SemiBoldText = props => {
  return <CustomText style={styles.semibold} {...props} />;
};

const MediumText = props => {
  return <CustomText style={styles.medium} {...props} />;
};
const RegularText = props => {
  return <CustomText style={styles.regular} {...props} />;
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
    color: theme.colors.grey.text,
  },
  semibold: {
    fontWeight: 'bold',
    color: theme.colors.grey.text,
  },
  medium: {
    color: theme.colors.grey.text,
  },
  regular: {
    color: theme.colors.grey.text,
  },
});

export {BoldText, SemiBoldText, MediumText, RegularText};
