import React, {useEffect} from 'react';
import {NativeRouter as Router, Route, Routes} from 'react-router-native';
import Orientation from 'react-native-orientation';

import Login from './src/Screens/Login';
import Register from './src/Screens/Login';

export default function App() {

  useEffect(() => {
    (async () => {
      Orientation.lockToPortrait();
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