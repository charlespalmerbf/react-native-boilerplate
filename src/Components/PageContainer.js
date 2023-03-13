import React from 'react';
import {View, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Header from 'components/Header';

import theme from 'theme';

const PageContainer = ({children, disableScroll, contentStyle}) => {
  return (
    <View style={styles.container}>
      <Header />
      <KeyboardAwareScrollView
        style={styles.contentView}
        contentContainerStyle={[styles.containerStyle, contentStyle]}
        enableAutomaticScroll={!disableScroll}>
        {children}
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: theme.colors.white,
    alignItems: 'center',
  },
  contentView: {
    width: '100%',
  },
  containerStyle: {
    padding: moderateScale(20),
    flexGrow: 1,
    justifyContent: 'space-between',
  },
});

export default PageContainer;
