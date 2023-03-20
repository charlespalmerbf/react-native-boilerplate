import React from 'react';

import {View, StyleSheet} from 'react-native';

import Text from 'components/Text';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate(-1)} style={styles.backButton}>
        <MediumText style={styles.backButtonText}>{'<--'}</MediumText>
      </TouchableOpacity>
      <Image
        source={require('assets/logo.png')}
        style={styles.logo}
        resizeMode={'contain'}
      />
      <View />
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
