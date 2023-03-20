import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {useNavigate} from 'react-router-native';
import {moderateScale} from 'react-native-size-matters';

import PrimaryButton from 'components/buttons/PrimaryButton';
import TitledTextInput from 'components/TitledTextInput';
import {MediumText} from 'components/Text';
import InfoPopup from 'components/popups/InfoPopup';

import theme from 'theme';

import {useLogin} from 'context/LoginContext';
import {getSessionValues} from 'Storage';
import LoadingScreen from 'components/LoadingScreen';
import PageContainer from 'components/PageContainer';
import { registerUser } from 'api/api';

const Register = () => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate();
  const login = useLogin();
  const emailRef = useRef();
  const passwordRef = useRef();

  const onPressRegister = async () => {
    setLoading(true);
    try {
      const res = await registerUser(email, password);
      setModalOpen(["Success", res])
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  return (
    <PageContainer
      contentContainerStyle={styles.container}
      bounces={false}
      hideHeader={true}
    >
      <View style={styles.topContainer}>
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
            title={'Username'}
            placeholder={'John doe'}
            value={username}
            onChangeText={val => setUsername(val)}
            onFocus={() => setError(false)}
            secureTextEntry={true}
            innerRef={passwordRef}
          />
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
            onFocus={() => setError(false)}
            type={'password'}
            secureTextEntry={true}
            innerRef={passwordRef}
          />
      </View>
      <View style={styles.bottom}>
        <View style={styles.buttonRow}>
          <PrimaryButton
            title={'Login'}
            onPress={onPressRegister}
            disabled={!username || !email || !password}
            loading={loading}
          />
        </View>
        <MediumText
          style={styles.backToLoginText}
          onPress={() => navigate('/')}
        >
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
    </PageContainer>
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
  topContainer: {
    marginTop: moderateScale(20),
  },
  logo: {
    width: '75%',
    alignSelf: 'center',
    height: moderateScale(100),
  },
  pageTitle: {
    textAlign: 'center',
    marginBottom: moderateScale(50),
    fontSize: moderateScale(14),
    marginTop: moderateScale(5),
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
  backToLoginText: {
    marginVertical: moderateScale(30),
    fontSize: moderateScale(14)
  },
  
});

export default Register;
