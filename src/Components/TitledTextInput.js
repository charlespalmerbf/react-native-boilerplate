import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import theme from 'theme';
import {MediumText} from 'components/Text';

const TitledTextInput = props => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[styles.inputContainer, props.containerStyle]}>
        {props.title && (
          <MediumText style={[styles.title, props.titleStyle]}>
            {props.title}
          </MediumText>
        )}
        <TextInput
          {...props}
          style={[
            styles.input,
            props.error && styles.inputErrorStyle,
            props.style,
          ]}
          ref={props.innerRef}
        />
        {props.error && (
          <MediumText style={styles.error}>{props.error}</MediumText>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: moderateScale(20),
  },
  title: {
    fontSize: moderateScale(14),
    marginBottom: moderateScale(8),
  },
  input: {
    width: '100%',
    backgroundColor: theme.colors.white,
    borderRadius: moderateScale(5),
    borderColor: theme.colors.grey.border,
    borderWidth: moderateScale(1),
    paddingLeft: moderateScale(15),
    minHeight: Platform.OS === 'ios' ? moderateScale(50) : null,
    height: moderateScale(50),
    fontSize: moderateScale(14),
  },
  inputErrorStyle: {
    borderColor: theme.colors.red.main,
    borderWidth: moderateScale(2),
  },
  error: {
    color: theme.colors.red.main,
    fontSize: moderateScale(14),
  },
});

export default TitledTextInput;
