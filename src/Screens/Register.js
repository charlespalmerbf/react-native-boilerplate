import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Link} from 'react-router-native';

import PrimaryButton from '../Components/PrimaryButton';
import PageContainer from '../Components/PageContainer';
import PrimaryTextInput from '../Components/TextInput';
import Text from '../Components/Text';

const FieldRow = props => {
  return (
    <>
      <Text style={styles.pageHeaders}>{props.rowName}</Text>

      <PrimaryTextInput
        placeholder={props.rowName}
        value={props.value}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
      />
    </>
  );
};

const LoginScreen = () => {
  const [fullname, setFullname] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [email, setEmail] = useState();

  return (
    <ScrollView>
      <PageContainer>
        <Text style={styles.pageTitle}>Create An Account</Text>

        <FieldRow
          rowName={'Full Name'}
          value={fullname}
          onChangeText={val => setFullname(val)}
        />

        <FieldRow
          rowName={'Password'}
          value={password}
          onChangeText={val => setPassword(val)}
          secureTextEntry={true}
        />

        <FieldRow
          rowName={'Confirm Password'}
          value={confirmPassword}
          onChangeText={val => setConfirmPassword(val)}
          secureTextEntry={true}
        />

        <FieldRow
          rowName={'Email Address'}
          value={email}
          onChangeText={val => setEmail(val)}
        />

        <PrimaryButton text="Sign Up" onPress={() => console.log('Test')} />

        <Link
          to="/login"
          underlayColor="#cac7c6"
          style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}> Go Back </Text>
        </Link>
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
  },

  subHeading: {
    fontSize: 15,
    color: '#363636',
    paddingBottom: 15,
  },

  pageHeaders: {
    fontSize: 15,
    color: '#363636',
    alignSelf: 'flex-start',
    marginTop: 5,
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
    padding: 10,
    borderRadius: 10,
  },

  secondaryButtonText: {
    fontSize: 16,
    color: '#0D0334',
  },
});

export default LoginScreen;
