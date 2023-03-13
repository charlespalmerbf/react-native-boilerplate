import React, {useEffect} from 'react';
import {NativeRouter as Router, Route, Routes} from 'react-router-native';
import SplashScreen from 'react-native-splash-screen';
import {BackHandler} from 'react-native';

import Login from 'screens/Login';
import Dashboard from 'screens/Dashboard';

import LoginProvider from 'context/LoginProvider';

export default function App() {
  useEffect(() => {
    SplashScreen?.hide();

    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <>
      <LoginProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </LoginProvider>
    </>
  );
}
