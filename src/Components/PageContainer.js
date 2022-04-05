import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';

const PageContainer = ({children, noPadding = false}) => {
  return (
    <View style={[styles.container, noPadding && {padding: 0, paddingTop: 0}]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  noPadding: {
    padding: 0,
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#FAF6F4',
    alignItems: 'center',
    padding: 36,
    paddingTop: Platform.OS === 'ios' ? 50 : 36,
    flex: 1,
  },
});

export default PageContainer;