import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigate} from 'react-router-native';

import PrimaryButton from 'components/buttons/PrimaryButton';
import TitledTextInput from 'components/TitledTextInput';

import {useLogin} from 'context/LoginContext';
import PageContainer from 'components/PageContainer';
import LoadingScreen from 'components/LoadingScreen';
import {getSessionValues} from 'Storage';

const LoginScreen = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);
  const [autoLoggingIn, setAutoLoggingIn] = useState(true);

  const navigate = useNavigate();
  const login = useLogin();
  const passwordRef = useRef();

  const onPressSubmit = async () => {
    setLoading(true);
    try {
      await login.login(email, password);
      navigate('/dashboard');
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  const fetchStorage = async () => {
    const storage = await getSessionValues();
    if (storage?.token) {
      try {
        await login.autoLogin(storage.token);
        navigate('dashboard');
      } catch {}
    }
    setAutoLoggingIn(false);
  };

  useEffect(() => {
    fetchStorage();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (autoLoggingIn) {
    return <LoadingScreen />;
  }

  return (
    <PageContainer contentContainerStyle={styles.container} bounces={false}>
      <View />
      <View>
        <TitledTextInput
          placeholder={'Email'}
          value={email}
          onChangeText={val => setEmail(val)}
          onSubmitEditing={() => passwordRef?.current?.focus()}
          returnKeyType={'go'}
          disabled={loading}
          editable={!loading}
          error={error}
        />

        <TitledTextInput
          placeholder={'Password'}
          value={password}
          onChangeText={val => setPassword(val)}
          type={'password'}
          secureTextEntry={true}
          innerRef={passwordRef}
          editable={!loading}
          error={error}
        />

        <PrimaryButton
          title={'Login'}
          onPress={onPressSubmit}
          // disabled={!email || !password}
          loading={loading}
        />
      </View>
      <View />
    </PageContainer>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
