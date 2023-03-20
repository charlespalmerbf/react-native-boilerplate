import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {useNavigate} from 'react-router-native';
import {moderateScale} from 'react-native-size-matters';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import PrimaryButton from 'components/buttons/PrimaryButton';
import TitledTextInput from 'components/TitledTextInput';
import {MediumText} from 'components/Text';
import InfoPopup from 'components/popups/InfoPopup';

import theme from 'theme';

import {resetPassword} from 'api/api';

const ResetPassword = () => {
  const [email, setEmail] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();

  const onResetPassword = async () => {
    setLoading(true);
    try {
      const status = await resetPassword(email);
      setModalOpen(['Success', status]);
    } catch (e) {
      console.log(e);
      setError(e);
    }
    setLoading(false);
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      bounces={false}>
      <View>
        <Image
          source={require('assets/logo.png')}
          style={styles.logo}
          resizeMode={'contain'}
        />
        <MediumText style={styles.pageTitle}>
          Enter your details below to reset your password and gain access to the
          app
        </MediumText>
        <TitledTextInput
          title={'Email'}
          placeholder={'John.doe@email.co.uk'}
          value={email}
          onChangeText={val => setEmail(val)}
          error={error}
          onFocus={() => setError(false)}
        />
      </View>
      <View style={styles.bottom}>
        <View style={styles.buttonRow}>
          <PrimaryButton
            title={'Reset Password'}
            onPress={onResetPassword}
            disabled={!email}
            loading={loading}
          />
        </View>
        <MediumText style={styles.loginText} onPress={() => navigate(-1)}>
          Back to login
        </MediumText>
      </View>
      <InfoPopup
        title={modalOpen[0]}
        info={modalOpen[1]}
        visible={modalOpen}
        onPress={() => {
          navigate(-1);
          setModalOpen(false);
        }}
      />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'space-between',
    backgroundColor: theme.colors.grey.background,
    paddingHorizontal: moderateScale(32),
  },
  bottom: {
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
  },
  loginText: {
    marginVertical: moderateScale(30),
    fontSize: moderateScale(14),
  },
  logo: {
    width: '75%',
    alignSelf: 'center',
    height: moderateScale(100),
    marginTop: moderateScale(50),
  },
  pageTitle: {
    textAlign: 'center',
    marginBottom: moderateScale(50),
    fontSize: moderateScale(14),
    marginTop: moderateScale(5),
  },
});

export default ResetPassword;
