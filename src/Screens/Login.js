import React, { useState } from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';
import { Link, useNavigate } from 'react-router-native';

import PrimaryButton from '../Components/PrimaryButton';
import PageContainer from '../Components/PageContainer';
import PrimaryTextInput from '../Components/TextInput';
import Text from '../Components/Text';

import {loginHandler} from '../API/Joomla';

const LoginScreen = () => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const navigate = useNavigate();

    return (
      <ScrollView style={{backgroundColor: '#FAF6F4'}}>
        <PageContainer>
          <Image
            style={styles.logoImage}
            source={require('../assets/logo.png')}
          />

          <Text style={styles.pageTitle}>Welcome</Text>

          <Text style={styles.pageHeaders}>Email Address</Text>

          <PrimaryTextInput
            placeholder={'Email Address'}
            value={email}
            onChangeText={val => setEmail(val)}
          />

          <Text style={styles.pageHeaders}>Password</Text>

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
            <Text style={styles.forgottenPasswordText}>
              {' '}
              Forgotten password?{' '}
            </Text>
          </Link>

          <PrimaryButton
            text="Sign In"
            onPress={() =>
              loginHandler(email, password, setPopupMessage, navigate)
            }
          />

          <PrimaryButton
            text="Sign Up"
            onPress={() => navigate('/register')}
            style={{backgroundColor: '#E2E1DC'}}
            textStyle={{color: '#363636'}}
          />

        </PageContainer>
      </ScrollView>
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
    width: 250,
    height: 250,
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
});

export default LoginScreen;