import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import {useNavigate} from 'react-router-native';
import {moderateScale} from 'react-native-size-matters';

import {MediumText} from 'components/Text';

import theme from 'theme';

const Header = props => {
  const navigate = useNavigate();

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
    display: 'flex',
    justifyContent: 'space-between',
    padding: moderateScale(20),
    marginTop: Platform.OS === 'ios' ? moderateScale(20) : 0,
    flexDirection: 'row',
  },
  backButtonText: {
    color: theme.colors.grey.text,
    fontSize: moderateScale(20),
  },
  logo: {
    width: '50%',
    height: moderateScale(20),
  },
});

export default Header;
