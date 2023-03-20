import React from 'react';
import {StyleSheet} from 'react-native';
import PageContainer from 'components/PageContainer';
import PrimaryButton from 'components/buttons/PrimaryButton';
import {useLogin} from 'context/LoginContext';
import {useNavigate} from 'react-router-native';
import { clearSession } from 'Storage';

const Dashboard = () => {
  const login = useLogin();
  const navigate = useNavigate();

  return (
    <PageContainer contentContainerStyle={styles.container} bounces={false}>
      <PrimaryButton
        onPress={() => {
          login.logout();
          clearSession()
          navigate('/');
        }}
      />
    </PageContainer>
  );
};

const styles = StyleSheet.create({});

export default Dashboard;
