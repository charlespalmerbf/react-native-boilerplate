import React, {useEffect} from 'react';
import {NativeRouter as Router, Route, Routes} from 'react-router-native';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import SystemNavigationBar from 'react-native-system-navigation-bar';

<<<<<<< Updated upstream
import Login from './src/Screens/Login';
import Register from './src/Screens/Register';
=======
import Login from 'screens/Login';
import ResetPassword from 'screens/ResetPassword';
import Register from 'screens/Register';

import Dashboard from 'screens/Dashboard';
>>>>>>> Stashed changes

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
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/register" element={<Register />} />

            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </LoginProvider>
    </>
  );
}