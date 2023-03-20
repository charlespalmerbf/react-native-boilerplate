import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';

import Header from 'components/Header';

import theme from 'theme';

const PageContainer = ({children, disableScroll, contentStyle, hideHeader}) => {
  return (
    <View style={styles.container}>
      {!hideHeader && <Header />}
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
    backgroundColor: "#fff",
    alignItems: 'center',
    padding: 36
  },
});

export default PageContainer;
