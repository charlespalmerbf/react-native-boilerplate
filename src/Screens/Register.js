import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Link} from 'react-router-native';

import PrimaryButton from 'components/PrimaryButton';
import PageContainer from 'components/PageContainer';
import PrimaryTextInput from 'components/TextInput';
import {MediumText} from 'components/Text';

const FieldRow = props => {
  return (
    <>
      <MediumText style={styles.pageHeaders}>{props.rowName}</MediumText>

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
        <MediumText style={styles.pageTitle}>Create An Account</MediumText>

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

        <PrimaryButton onPress={() => console.log('Test')}><MediumText>Login</MediumText></PrimaryButton>

        <Link
          to="/login"
          underlayColor="#cac7c6"
          style={styles.secondaryButton}
        >
          <MediumText style={styles.secondaryButtonText}> Go Back </MediumText>
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
