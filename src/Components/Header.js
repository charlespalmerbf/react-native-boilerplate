import React from 'react';

import {View, StyleSheet} from 'react-native';

import Text from '../Components/Text';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text>Icon</Text>
      <Text>Logo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    display: 'flex',
    backgroundColor: 'grey',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Header;
