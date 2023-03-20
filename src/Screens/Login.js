import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {useNavigate} from 'react-router-native';
import {moderateScale} from 'react-native-size-matters';

import PrimaryButton from 'components/buttons/PrimaryButton';
import TitledTextInput from 'components/TitledTextInput';
import {MediumText} from 'components/Text';

import theme from 'theme';

import {useLogin} from 'context/LoginContext';
import {getSessionValues} from 'Storage';
import LoadingScreen from 'components/LoadingScreen';
import PageContainer from 'components/PageContainer';

const LoginScreen = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [autoLoggingIn, setAutoLoggingIn] = useState(true);

  const navigate = useNavigate();
  const login = useLogin();
  const emailRef = useRef();
  const passwordRef = useRef();

  const onPressLogin = async () => {
    setLoading(true);
    try {
      await login.login(email, password);
      navigate('dashboard');
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  // async function fetchStorage() {
  //   const storage = await getSessionValues();
  //   if (storage.token) {
  //     try {
  //       await login.autoLogin(storage.token, storage.studyId);
  //       navigate('dashboard');
  //     } catch {}
  //   }
  //   setAutoLoggingIn(false);
  // }

  // useEffect(() => {
  //   fetchStorage();
  //   //eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // if (autoLoggingIn) {
  //   return <LoadingScreen />;
  // }

  return (
    <PageContainer
      contentContainerStyle={styles.container}
      bounces={false}
      hideHeader={true}
    >
      <Image
        source={require('assets/logo.png')}
        style={styles.logo}
        resizeMode={'contain'}
      />
      <View>
        <TitledTextInput
          title={'Email'}
          placeholder={'John.doe@email.co.uk'}
          value={email}
          onChangeText={val => setEmail(val)}
          error={error}
          onFocus={() => setError(false)}
          onSubmitEditing={() => passwordRef?.current?.focus()}
          innerRef={emailRef}
          returnKeyType={'go'}
        />

        <TitledTextInput
          title={'Password'}
          placeholder={'************'}
          value={password}
          onChangeText={val => setPassword(val)}
          error={error}
          onFocus={() => setError(false)}
          type={'password'}
          secureTextEntry={true}
          innerRef={passwordRef}
        />
        <MediumText
          style={styles.forgotPassword}
          onPress={() => navigate('/reset-password')}
        >
          Forgot your password?
        </MediumText>
      </View>
      <View style={styles.bottom}>
        <View style={styles.buttonRow}>
          <PrimaryButton
            title={'Login'}
            onPress={onPressLogin}
            disabled={!email || !password}
            loading={loading}
          />
        </View>
        <MediumText
          style={styles.registerText}
          onPress={() => navigate('/register')}>
          No account?
          <MediumText style={styles.inlineRegister}> Register now</MediumText>
        </MediumText>
      </View>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
<<<<<<< Updated upstream
  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#363636',
    marginVertical: 20,
    alignSelf: 'flex-start',
  },

  pageHeaders: {
    fontSize: 15,
    color: '#363636',
    alignSelf: 'flex-start',
    marginTop: 10,
  },

  logoImage: {
    marginTop: 100,
    height: 200,
    resizeMode: 'contain',
  },

  forgottenPassword: {
    marginBottom: 33,
    alignSelf: 'flex-start',
  },

  forgottenPasswordText: {
    color: '#363636',
    fontSize: 17,
  },

  secondaryButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  },

  secondaryButtonText: {
    fontSize: 16,
    color: '#0D0334',
  },

  signupButton: {
    backgroundColor: '#E2E1DC',
=======
  container: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'space-between',
    backgroundColor: theme.colors.grey.background,
    paddingHorizontal: moderateScale(32),
  },
  logo: {
    width: '75%',
    alignSelf: 'center',
    height: moderateScale(100),
    marginTop: moderateScale(50),
  },
  bottom: {
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
  },
  skipButton: {
    backgroundColor: theme.colors.dark,
    marginLeft: moderateScale(10),
  },
  registerText: {
    marginVertical: moderateScale(30),
    fontSize: moderateScale(14),
  },
  inlineRegister: {
    color: theme.colors.blue.main,
  },
  forgotPassword: {
    alignSelf: 'center',
    textDecorationLine: 'underline',
    fontSize: moderateScale(14),
    marginBottom: moderateScale(25),
>>>>>>> Stashed changes
  },
});

export default LoginScreen;
