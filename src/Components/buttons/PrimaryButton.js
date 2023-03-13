import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import theme from 'theme';
import {MediumText} from 'components/Text';

const PrimaryButton = ({title, loading, onPress, style, disabled}) => {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      style={[styles.primaryButton, isDisabled && styles.disabledStyle, style]}
      onPress={onPress}
      disabled={isDisabled}>
      <View style={styles.contentView}>
        <MediumText
          style={[styles.title, loading && {marginRight: moderateScale(10)}]}>
          {title}
        </MediumText>
        {loading && (
          <ActivityIndicator
            color={theme.colors.white}
            size={moderateScale(16)}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    flex: 1,
    backgroundColor: theme.colors.orange.main,
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(45),
  },
  disabledStyle: {
    opacity: 0.5,
  },
  contentView: {
    flexDirection: 'row',
    padding: moderateScale(12),
    flexGrow: 1,
  },
  title: {
    color: theme.colors.white,
    fontSize: moderateScale(16),
  },
});

export default PrimaryButton;
