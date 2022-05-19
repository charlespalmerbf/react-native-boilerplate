import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';

const PageContainer = ({children, noPadding}) => {
  return (
    <View style={[styles.container, noPadding && styles.noPadding]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  noPadding: {
    padding: 0,
  },
  container: {
    backgroundColor: '#FAF6F4',
    alignItems: 'center',
    padding: 36,
    paddingTop: Platform.OS === 'ios' ? 50 : 36,
  },
});

export default PageContainer;
