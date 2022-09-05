import React, {useEffect} from 'react';
import {NativeRouter as Router, Route, Routes} from 'react-router-native';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Orientation from 'react-native-orientation-locker';
import SystemNavigationBar from 'react-native-system-navigation-bar';

import Login from 'screens/Login';
import Register from 'screens/Register';

import LoginProvider from 'context/LoginProvider';

export default function App() {
  useEffect(() => {
    SplashScreen?.hide();
    Orientation.lockToPortrait();
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
