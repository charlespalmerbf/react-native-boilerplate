import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';

const PageContainer = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
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
