import React, {useRef} from 'react';
import {StyleSheet, View, Animated} from 'react-native';

const LoadingSkeleton = ({height}) => {
  var translation = useRef(new Animated.Value(0)).current;

  setInterval(function () {
    translation.setValue(0);
    Animated.timing(translation, {
      toValue: 400,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, 2500);

  const animationStyle = {
    transform: [{translateX: translation}],
  };

  const specifiedHeight = {
    paddingVertical: height || 20,
  };

  return (
    <View style={styles.main}>
      <Animated.View
        style={[styles.animatedView, animationStyle, specifiedHeight]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    width: '100%',
  },
  animatedView: {
    backgroundColor: '#fff',
    flex: 1,
    width: 20,
    right: 20,
  },
});

export default LoadingSkeleton;
