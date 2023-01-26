import React, {useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import {Link, useNavigate} from 'react-router-native';

import PrimaryButton from '../Components/PrimaryButton';
import PageContainer from '../Components/PageContainer';
import PrimaryTextInput from '../Components/TextInput';
import {MediumText} from '../Components/Text';

import {useLogin} from '../Context/LoginContext';
import AndroidBackHandler from '../Components/AndroidBackHandler';

const LoginScreen = () => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const navigate = useNavigate();
  const login = useLogin();

  return (
    <PageContainer>
      <AndroidBackHandler onPress={() => console.log("FIRING")}/>
      <Image
        style={styles.logoImage}
        source={require('../Assets/logo.png')}
      />

      <MediumText style={styles.pageTitle}>Welcome</MediumText>

      <MediumText style={styles.pageHeaders}>Email Address</MediumText>

      <PrimaryTextInput
        placeholder={'Email Address'}
        value={email}
        onChangeText={val => setEmail(val)}
      />

      <MediumText style={styles.pageHeaders}>Password</MediumText>

      <PrimaryTextInput
        placeholder={'Password'}
        value={password}
        onChangeText={val => setPassword(val)}
        secureTextEntry={true}
      />

      <Link
        to="/forgot-password"
        underlayColor="#cac7c6"
        style={styles.forgottenPassword}>
        <MediumText style={styles.forgottenPasswordText}>Forgotten password? </MediumText>
      </Link>

      <PrimaryButton onPress={() => console.log('Test')}><MediumText>Sign In</MediumText></PrimaryButton>

      <PrimaryButton onPress={() => console.log('Test')}><MediumText>Sign Up</MediumText></PrimaryButton>

    </PageContainer>
  );
};

const styles = StyleSheet.create({
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
  },
});

export default LoginScreen;
