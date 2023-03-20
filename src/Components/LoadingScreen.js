import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import theme from 'theme';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        color={theme.colors.blue.main}
        size={moderateScale(50)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoadingScreen;
