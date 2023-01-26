import React, {useEffect} from 'react';
import {NativeRouter as Router, Route, Routes} from 'react-router-native';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import SystemNavigationBar from 'react-native-system-navigation-bar';

import Login from './src/Screens/Login';
import Register from './src/Screens/Register';

import LoginProvider from './src/Context/LoginProvider';

export default function App() {
  useEffect(() => {
    SplashScreen?.hide();
    SystemNavigationBar.setNavigationBarDividerColor("transparent")
    SystemNavigationBar.setNavigationColor("transparent")
  }, []);

  return (
    <>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
      <LoginProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </LoginProvider>
    </>
  );
}