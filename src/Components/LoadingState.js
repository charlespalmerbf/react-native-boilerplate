import React from 'react';
import {Image, StyleSheet, View, Dimensions} from 'react-native';

import Text from '../Components/Text';

const LoadingState = props => {
  return (
    <View
      style={styles.background}>
      <Image
        style={styles.spinnerImage}
        source={require('../assets/spinner.gif')}
      />
      {props.loadingMessage && (
        <Text style={styles.loadingMessage}>{props.loadingMessage}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
  },

  spinnerImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: 'contain',
  },

  loadingMessage: {
    fontSize: 20,
  },
});

export default LoadingState;