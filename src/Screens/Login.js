import React, {useState} from 'react';
import {ScrollView, Image, StyleSheet} from 'react-native';
import {Link, useNavigate} from 'react-router-native';

import PrimaryButton from '../Components/PrimaryButton';
import PageContainer from '../Components/PageContainer';
import PrimaryTextInput from '../Components/TextInput';
import Text from '../Components/Text';

import {usePopup} from '../Context/PopupContext';
import {useLogin} from '../Context/LoginContext';
import AndroidBackHandler from '../Components/AndroidBackHandler';

const LoginScreen = () => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const navigate = useNavigate();
  const popup = usePopup();
  const login = useLogin();

  return (
    <ScrollView style={{backgroundColor: "#FAF6F4"}}>
      <PageContainer>
        <AndroidBackHandler onPress={() => console.log("FIRING")}/>
        <Image
          style={styles.logoImage}
          source={require('../Assets/logo.png')}
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
          <Text style={styles.forgottenPasswordText}>Forgotten password? </Text>
        </Link>

        <PrimaryButton text="Sign In" onPress={() => console.log('Sign in')} />

        <PrimaryButton
          text="Sign Up"
          onPress={() => navigate('/register')}
          style={styles.signupButton}
          textStyle={styles.signupButton}
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
