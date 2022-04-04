import React from 'react';
import {NativeRouter as Router, Route, Routes} from 'react-router-native';

import Login from './src/Screens/Login';
import Register from './src/Screens/Login';

export default function App() {

  return (
    <Router>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </Router>
  );
}