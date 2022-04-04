import React, {useEffect} from 'react';
import {NativeRouter as Router, Route, Routes} from 'react-router-native';
import Orientation from 'react-native-orientation';
import {BackHandler} from 'react-native';

import Login from './src/Screens/Login';
import Register from './src/Screens/Login';

export default function App() {

  useEffect(() => {
    (async () => {
      Orientation.lockToPortrait();

      const backAction = () => {
        return true;
      };
  
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );
  
      return () => backHandler.remove();
    })();
  }, [])
  
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </Router>
  );
}