import React, {useEffect} from 'react';
import {NativeRouter as Router, Route, Routes} from 'react-router-native';
import {BackHandler} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Orientation from 'react-native-orientation-locker';

import Login from './src/Screens/Login';
import Register from './src/Screens/Register';

import PopupProvider from './src/Context/PopupProvider';
import LoginProvider from './src/Context/LoginProvider';

export default function App() {
  useEffect(() => {
    SplashScreen?.hide();
    Orientation.lockToPortrait();

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
    <LoginProvider>
      <PopupProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </PopupProvider>
    </LoginProvider>
  );
}
